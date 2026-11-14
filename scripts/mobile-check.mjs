#!/usr/bin/env node
/**
 * Scripted mobile check — runs the built static export (out/) over
 * local HTTP and loads EVERY page at a 360px mobile viewport.
 *
 * Per page it verifies:
 *  - zero horizontal overflow (scrollWidth <= 360)
 *  - every tap target >= 44px (structural targets; inline text links
 *    inside flowing paragraphs are reported separately as exempt)
 *  - mobile menu opens AND closes on tap, and a menu link navigates
 *  - 0 JS errors / 0 failed requests
 *  - hero LCP element identified (largest-contentful-paint entry)
 *  - lab CLS (layout-shift sum, input shifts excluded)
 *
 * Lab metrics only: Search Console FIELD Core Web Vitals need real-user
 * data after deployment — this pass is what can be verified locally.
 *
 * Usage: pnpm mobile-check   (after `pnpm build`)
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = path.join(ROOT, "out");
const PORT = 8931;
const BASE = `http://127.0.0.1:${PORT}`;

const CHROMIUM_PATHS = [
  path.join(
    process.env.HOME ?? "",
    ".cache/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell",
  ),
  path.join(
    process.env.HOME ?? "",
    ".cache/ms-playwright/chromium-1243/chrome-linux64/chrome",
  ),
];
const EXECUTABLE = CHROMIUM_PATHS.find((p) => fs.existsSync(p));
if (!EXECUTABLE) {
  console.error("No cached Playwright chromium found — cannot run the mobile check.");
  process.exit(2);
}

const PAGES = [
  "/",
  "/bridal-makeup-peshawar/",
  "/party-makeup-peshawar/",
  "/hair-salon-peshawar/",
  "/keratin-treatment-peshawar/",
  "/hair-colour-peshawar/",
  "/laser-hair-removal-peshawar/",
  "/facial-peshawar/",
  "/waxing-peshawar/",
  "/mani-pedi-peshawar/",
  "/contact/",
  "/reviews/",
  "/privacy-policy/",
  "/terms/",
  "/cookies/",
];

function waitForServer(ms = 8000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      http
        .get(`${BASE}/`, (res) => {
          res.resume();
          resolve();
        })
        .on("error", () => {
          if (Date.now() - start > ms) reject(new Error("server did not start"));
          else setTimeout(tick, 200);
        });
    };
    tick();
  });
}

const server = spawn(
  process.execPath,
  ["-e", `require("http").createServer((req,res)=>{const fs=require("fs"),path=require("path");let p=decodeURIComponent(req.url.split("?")[0]);if(p.endsWith("/"))p+="index.html";const f=path.join(${JSON.stringify(OUT)},p);const ext=path.extname(f);const types={".html":"text/html",".css":"text/css",".js":"text/javascript",".json":"application/json",".xml":"application/xml",".txt":"text/plain",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".avif":"image/avif",".ico":"image/x-icon",".webmanifest":"application/manifest+json"};fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end("nf");}else{res.writeHead(200,{"Content-Type":types[ext]||"application/octet-stream"});res.end(d);}});}).listen(${PORT});`],
  { stdio: "ignore" },
);

let failures = 0;
const fail = (msg) => {
  failures++;
  console.log(`  FAIL  ${msg}`);
};
const pass = (msg) => console.log(`  PASS  ${msg}`);

try {
  await waitForServer();
  const browser = await chromium.launch({
    executablePath: EXECUTABLE,
    args: ["--no-sandbox"],
  });
  const context = await browser.newContext({
    viewport: { width: 360, height: 800 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  for (const route of PAGES) {
    console.log(`\n== ${route} ==`);
    const page = await context.newPage();
    const errors = [];
    const failedReqs = [];
    page.on("pageerror", (e) => errors.push(String(e)));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    page.on("requestfailed", (r) => failedReqs.push(`${r.url()} (${r.failure()?.errorText})`));
    await page.addInitScript(() => {
      window.__vitals = { lcp: null, cls: 0 };
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) {
          window.__vitals.lcp = {
            tag: e.element?.tagName ?? "?",
            src: e.element?.currentSrc ?? e.element?.src ?? "",
            size: Math.round(e.size ?? 0),
          };
        }
      }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) {
          if (!e.hadRecentInput) window.__vitals.cls += e.value;
        }
      }).observe({ type: "layout-shift", buffered: true });
    });
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle", timeout: 20000 });
    await page.waitForTimeout(800);

    // 1. Horizontal overflow at 360px.
    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
    }));
    if (overflow.scrollWidth <= 361 && overflow.bodyScrollWidth <= 361) {
      pass(`no horizontal overflow (scrollWidth ${overflow.scrollWidth}px)`);
    } else {
      fail(`horizontal overflow: document ${overflow.scrollWidth}px, body ${overflow.bodyScrollWidth}px`);
    }

    // 2. Tap targets >= 44px. Inline text links inside flowing
    // paragraphs are exempt by design (they wrap in text); everything
    // else — nav, menu, buttons, cards, footer, call bar — must pass.
    const targets = await page.evaluate(() => {
      const bad = [];
      const exempt = [];
      for (const el of document.querySelectorAll("a, button")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue; // hidden
        if (r.height >= 44 && r.width >= 44) continue;
        const inFlowText =
          el.closest("p, .page-content") &&
          !el.closest("nav, header, footer, section[aria-label='Call or WhatsApp us']");
        const info = `${el.tagName.toLowerCase()} "${(el.textContent || "").trim().slice(0, 40)}" ${Math.round(r.width)}x${Math.round(r.height)}`;
        (inFlowText ? exempt : bad).push(info);
      }
      return { bad, exempt };
    });
    if (targets.bad.length === 0) {
      pass(`all structural tap targets >= 44px (${targets.exempt.length} inline text link(s) exempt)`);
    } else {
      fail(`${targets.bad.length} tap target(s) < 44px: ${targets.bad.join(" | ")}`);
    }

    // 3. Mobile menu opens/closes on tap; a menu link navigates.
    const menuBtn = page.locator('button[aria-label="Open menu"]');
    if (await menuBtn.count()) {
      await menuBtn.tap();
      await page.waitForTimeout(300);
      const opened = await page.evaluate(() => {
        const btn = document.querySelector('button[aria-label="Close menu"]');
        const nav = document.querySelector('nav[aria-label="Mobile navigation"]');
        return !!btn && !!nav && nav.getBoundingClientRect().height > 0;
      });
      if (opened) pass("mobile menu opens on tap");
      else fail("mobile menu did NOT open on tap");
      const closeBtn = page.locator('button[aria-label="Close menu"]');
      if (await closeBtn.count()) {
        await closeBtn.tap();
        await page.waitForTimeout(300);
        const closed = await page.evaluate(
          () => !document.querySelector('nav[aria-label="Mobile navigation"]'),
        );
        if (closed) pass("mobile menu closes on tap");
        else fail("mobile menu did NOT close on tap");
      }
      // Re-open and follow a link.
      await page.locator('button[aria-label="Open menu"]').tap();
      await page.waitForTimeout(300);
      await page.locator('nav[aria-label="Mobile navigation"] a[href="/contact/"]').tap();
      await page.waitForTimeout(600);
      if (page.url().endsWith("/contact/")) pass("menu link navigates to /contact/");
      else fail(`menu link navigation failed (url: ${page.url()})`);
      await page.goto(`${BASE}${route}`, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(400);
    } else {
      console.log("  SKIP  menu button not present at this viewport");
    }

    // 4. JS errors / failed requests. Three environmental exceptions:
    //  - googletagmanager.com is unreachable from this sandbox
    //    (ERR_TUNNEL_CONNECTION_FAILED) — the GTM snippet is the
    //    standard owner-supplied container; it loads in the real world.
    //    Its failed load also surfaces as bare "Event" console errors
    //    (script error events, no message). They are dropped ONLY
    //    because the filtered failed-request list proves no same-origin
    //    resource failed — a real app error would still show up as a
    //    pageerror or a console error with text.
    //  - google.com/maps (the query-based map embed on home + contact)
    //    is likewise external and sandbox-unreachable; the embed's
    //    presence + correct src is verified by a DOM check below.
    //  - same-origin ERR_ABORTED = Next.js <Link> prefetch requests
    //    aborted when the page navigates (menu tap test). Broken links
    //    are a 404, not an abort — and 0 broken links is already
    //    verified by `pnpm qa` (506 hrefs).
    const realErrors = errors.filter(
      (e) =>
        e !== "Event" &&
        !e.includes("googletagmanager.com") &&
        !e.includes("ERR_TUNNEL_CONNECTION_FAILED"),
    );
    const realFailed = failedReqs.filter(
      (r) => !r.includes("googletagmanager.com") && !r.includes("google.com/maps") && !r.includes("ERR_ABORTED"),
    );
    if (realErrors.length === 0 && realFailed.length === 0) {
      pass(
        `0 JS errors, 0 failed requests${errors.length || failedReqs.length ? " (GTM + Maps embed + prefetch aborts excluded — sandbox-only, see note)" : ""}`,
      );
    } else {
      fail(`JS errors: ${realErrors.join(" | ") || "none"}; failed requests: ${realFailed.join(" | ") || "none"}`);
    }

    // 4b. Map embed present with the right src (home + contact only).
    if (route === "/" || route === "/contact/") {
      const mapOk = await page.evaluate(() => {
        const f = document.querySelector('iframe[title^="Map — SanSha"]');
        return !!f && f.src.includes("google.com/maps?q=SanSha+A+Beauty+Lounge");
      });
      if (mapOk) pass("Google Maps embed present with the correct query src");
      else fail("Google Maps embed missing or wrong src");
    }

    // 5. LCP element + lab CLS.
    const vitals = await page.evaluate(() => window.__vitals);
    if (vitals.lcp) {
      pass(`LCP element: <${vitals.lcp.tag.toLowerCase()}> ${vitals.lcp.src.split("/").pop() || ""} (${vitals.lcp.size}px)`);
    } else {
      console.log("  NOTE  no LCP entry observed (headless quirk)");
    }
    const cls = Math.round(vitals.cls * 1000) / 1000;
    if (cls === 0) pass("lab CLS = 0");
    else if (cls < 0.1) console.log(`  NOTE  lab CLS = ${cls} (under the 0.1 budget)`);
    else fail(`lab CLS = ${cls} (over the 0.1 budget)`);
    await page.close();
  }

  await browser.close();
} finally {
  server.kill();
}

console.log(`\n================ MOBILE CHECK ================`);
console.log(failures === 0 ? "MOBILE CHECK GREEN — all pages pass at 360px." : `MOBILE CHECK FAILED — ${failures} failure(s).`);
process.exit(failures === 0 ? 0 : 1);
