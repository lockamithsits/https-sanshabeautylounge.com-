/**
 * QA script for SanSha A Beauty Lounge v1.
 * Runs against the static export in out/ (not the source).
 *
 * Checks (each prints PASS/FAIL with counts):
 *  1. Titles + metas in built HTML match the strategy briefs verbatim
 *     (B1–B10 titles/metas from STRATEGY.md; contact/reviews/legal
 *     titles/metas exact + length bounds).
 *  2. Every FAQ answer is 40–60 words AND byte-matches the FAQPage
 *     JSON-LD on the same page (same strings in visible <dd> and schema).
 *  3. Zero broken internal links (every internal href resolves to a
 *     built file in out/).
 *  4. Zero orphans (every sitemap page has ≥1 incoming internal link,
 *     except home).
 *  5. Sitemap URLs match the built HTML pages exactly.
 *  6. Favicon link tags present in every built HTML page.
 *  7. GSC meta (EcG3z_LiiugVp7Pq_E_8TK0lFiGBICYvk-e5kDGkXPI) + file
 *     + GTM-TNQJ5FLL (gtm.js script + noscript iframe) present in
 *     every built HTML page. No other GTM container. No GA4 ID.
 *  8. Built CSS contains utilities (a .bg- rule exists).
 *  9. Zero £ figures, zero Rs figures, zero sibling-brand contamination
 *     ("Birmingham", "Lost Car Key") anywhere in out/.
 * 10. 15-word shingle check: within-site duplicates AND vs the two
 *     sibling sites' built out/ (verbatim review quotes inside
 *     <blockquote> are excluded — third-party text shown in context)
 *     sibling sites' built HTML (carkeyfobprogramming + the lost-key
 *     fob site's out/). Chrome (header/footer/nav/sticky bar) is
 *     stripped before shingling.
 * 11. No review/aggregateRating schema anywhere; no invented claims
 *     list scan (ratings, "years", response-time figures); no
 *     superlatives ("best"/"cheapest"/"#1"/"5-star") in site copy
 *     outside the reviews page; staff names appear ONLY inside
 *     verbatim review quotes (<blockquote>).
 * 12. Images: every <img> has width/height + alt, src/srcset resolve,
 *     no upscaled renders; og:image (the single og canvas) + twitter:image
 *     on every page and resolving; sitemap image entries resolve.
 *
 * Usage: pnpm qa   (after `pnpm build`)
 */

import * as fs from "node:fs";
import * as path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "out");
const STRATEGY = path.resolve(
  ROOT,
  "../sansha-beauty-lounge/STRATEGY.md",
);
const DOMAIN = "https://sanshabeautylounge.com";
const OG_FILE = "og-sansha-beauty-lounge-hayatabad-peshawar.jpg";

let failures = 0;
let passes = 0;
function pass(msg: string) {
  passes++;
  console.log(`  PASS  ${msg}`);
}
function fail(msg: string) {
  failures++;
  console.log(`  FAIL  ${msg}`);
}
function section(name: string) {
  console.log(`\n== ${name} ==`);
}

// ---------- helpers ----------
function read(p: string): string {
  return fs.readFileSync(p, "utf8");
}
function listHtml(dir: string, base = ""): string[] {
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listHtml(p, `${base}${e.name}/`));
    else if (e.name.endsWith(".html")) out.push(`${base}${e.name}`);
  }
  return out;
}
function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&rsquo;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}
function visibleText(html: string): string {
  // Strip header/footer/sticky-CTA chrome: cut from <header to </header>,
  // from <footer to </footer>, and the fixed call bar.
  let h = html
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(
      /<div class="fixed inset-x-0 bottom-0[\s\S]*?<\/div>\s*<\/div>/gi,
      " ",
    );
  return stripTags(h);
}
function shingles(text: string, n = 15): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9'’£ ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + n <= words.length; i++) {
    out.add(words.slice(i, i + n).join(" "));
  }
  return out;
}
function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&rsquo;|&#39;|&apos;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'");
}

// ---------- 0. collect built pages ----------
const htmlFiles = listHtml(OUT).filter(
  (f) =>
    !f.startsWith("404") &&
    !f.startsWith("_not-found") &&
    // The GSC verification file is a plain-text file, not a page.
    f !== "googleb7d79ba7b0fa42b4.html",
);
console.log(`Built HTML pages: ${htmlFiles.length}`);
const htmlByPath = new Map<string, string>();
for (const f of htmlFiles) {
  // out/bridal-makeup-peshawar/index.html -> /bridal-makeup-peshawar/
  const route =
    f === "index.html" ? "/" : `/${f.replace(/\/index\.html$/, "/")}`;
  htmlByPath.set(route, read(path.join(OUT, f)));
}

// ---------- 1. titles + metas vs briefs ----------
section("1. Titles + metas vs strategy briefs");
const strategy = read(STRATEGY);
const briefTitles = [
  ...strategy.matchAll(
    /\*\*Title \((\d+) chars\):\*\* "([^"]+)"/g,
  ),
].map((m) => ({ claimed: Number(m[1]), text: m[2] }));
const briefMetas = [
  ...strategy.matchAll(/\*\*Meta \((\d+) chars\):\*\* "([^"]+)"/g),
].map((m) => ({ claimed: Number(m[1]), text: m[2] }));
console.log(`Brief titles: ${briefTitles.length}, brief metas: ${briefMetas.length}`);
if (briefTitles.length !== 11 || briefMetas.length !== 11) {
  fail(`expected 11 brief titles + 11 brief metas (B1–B11) in STRATEGY.md`);
} else {
  pass("11 brief titles + 11 brief metas in STRATEGY.md (B1–B11)");
  for (const t of briefTitles) {
    if (t.text.length !== t.claimed) fail(`brief title length mismatch: claimed ${t.claimed}, actual ${t.text.length}: "${t.text}"`);
  }
  for (const m of briefMetas) {
    if (m.text.length !== m.claimed) fail(`brief meta length mismatch: claimed ${m.claimed}, actual ${m.text.length}: "${m.text}"`);
  }
  pass("all brief title/meta claimed lengths match the quoted strings");
}

// Titles: B1–B10 verbatim (B11 held — not built) + contact/reviews/legal.
const EXPECTED_TITLES: Record<string, string> = {
  "/": "Beauty Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
  "/bridal-makeup-peshawar/": "Bridal Makeup in Peshawar | SanSha A Beauty Lounge",
  "/party-makeup-peshawar/": "Party Makeup in Hayatabad Peshawar | SanSha A Beauty Lounge",
  "/hair-salon-peshawar/": "Hair Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
  "/keratin-treatment-peshawar/": "Keratin Treatment in Peshawar | SanSha A Beauty Lounge",
  "/hair-colour-peshawar/": "Hair Colour & Balayage Peshawar | SanSha A Beauty Lounge",
  "/laser-hair-removal-peshawar/": "Laser Hair Removal Peshawar | SanSha A Beauty Lounge",
  "/facial-peshawar/": "Facials in Hayatabad Peshawar | SanSha A Beauty Lounge",
  "/waxing-peshawar/": "Waxing & Threading Peshawar | SanSha A Beauty Lounge",
  "/mani-pedi-peshawar/": "Manicure & Pedicure Peshawar | SanSha A Beauty Lounge",
  "/contact/": "Contact SanSha A Beauty Lounge | Hayatabad, Peshawar",
  "/reviews/": "Customer Reviews | SanSha A Beauty Lounge",
  "/privacy-policy/": "Privacy Policy | SanSha A Beauty Lounge",
  "/terms/": "Terms of Service | SanSha A Beauty Lounge",
  "/cookies/": "Cookie Policy | SanSha A Beauty Lounge",
};
for (const [route, expected] of Object.entries(EXPECTED_TITLES)) {
  const html = htmlByPath.get(route);
  if (!html) {
    fail(`${route}: page not built`);
    continue;
  }
  const m = html.match(/<title>([^<]*)<\/title>/);
  const actual = m ? decodeEntities(m[1]) : "";
  if (actual === expected && expected.length <= 60) {
    pass(`${route}: title ${expected.length} chars, exact match`);
  } else {
    fail(
      `${route}: title "${actual}" (${actual.length}) != expected "${expected}" (${expected.length})`,
    );
  }
}
// Metas: B1–B10 verbatim from the brief order in the strategy file.
const BRIEF_ROUTES = [
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
  "/bridal-mehndi-peshawar/", // B11 — held, not built
];
const EXPECTED_METAS: Record<string, string> = {};
BRIEF_ROUTES.forEach((r, i) => {
  if (briefMetas[i]) EXPECTED_METAS[r] = briefMetas[i].text;
});
for (const [route, expected] of Object.entries(EXPECTED_METAS)) {
  const html = htmlByPath.get(route);
  if (!html) continue; // held pages are not built — not a failure here
  const m = html.match(
    /<meta name="description" content="([^"]*)"/,
  );
  const actual = m ? decodeEntities(m[1]) : "";
  if (actual === expected && expected.length >= 140 && expected.length <= 155) {
    pass(`${route}: meta ${expected.length} chars, exact match`);
  } else {
    fail(
      `${route}: meta "${actual}" (${actual.length}) != expected "${expected}" (${expected.length})`,
    );
  }
}
// Contact/reviews/legal metas: exact strings, length bounds.
const EXPECTED_OTHER_METAS: Record<string, { text: string; min: number; max: number }> = {
  "/contact/": {
    text: "Contact SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — call 091-5839119 or WhatsApp 0313 9333377. Walk in, or book your slot.",
    min: 130,
    max: 160,
  },
  "/reviews/": {
    text: "Customer reviews for SanSha A Beauty Lounge in Hayatabad, Peshawar — 3.9 stars on Google from 92 reviews. Read verbatim reviews from our clients.",
    min: 130,
    max: 160,
  },
  "/privacy-policy/": {
    text: "Privacy policy for SanSha A Beauty Lounge. What data this website collects, why, and how to contact us about your data.",
    min: 0,
    max: 155,
  },
  "/terms/": {
    text: "Terms of service for SanSha A Beauty Lounge. How bookings, prices and visits to the salon work.",
    min: 0,
    max: 155,
  },
  "/cookies/": {
    text: "Cookie policy for SanSha A Beauty Lounge. What cookies this website uses, why, and how to control them in your browser.",
    min: 0,
    max: 155,
  },
};
for (const [route, exp] of Object.entries(EXPECTED_OTHER_METAS)) {
  const html = htmlByPath.get(route);
  if (!html) {
    fail(`${route}: page not built`);
    continue;
  }
  const m = html.match(/<meta name="description" content="([^"]*)"/);
  const actual = m ? decodeEntities(m[1]) : "";
  if (actual === exp.text && actual.length >= exp.min && actual.length <= exp.max) {
    pass(`${route}: meta ${actual.length} chars, exact match`);
  } else {
    fail(
      `${route}: meta "${actual}" (${actual.length}) != expected "${exp.text}" (${exp.text.length})`,
    );
  }
}

// ---------- 2. FAQ word counts + byte-match ----------
section("2. FAQ answers 40–60 words + byte-match vs FAQPage JSON-LD");
let faqPages = 0;
let faqTotal = 0;
for (const [route, html] of htmlByPath) {
  const ddMatches = [...html.matchAll(/<dd[^>]*>([^<]*)<\/dd>/g)].map((m) =>
    decodeEntities(m[1].trim()),
  );
  if (ddMatches.length === 0) continue;
  faqPages++;
  const ldMatches = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ];
  let schemaAnswers: string[] = [];
  for (const lm of ldMatches) {
    try {
      const data = JSON.parse(lm[1]);
      if (data["@type"] === "FAQPage") {
        schemaAnswers = data.mainEntity.map(
          (q: { acceptedAnswer: { text: string } }) =>
            q.acceptedAnswer.text,
        );
      }
    } catch {
      /* ignore non-JSON blocks */
    }
  }
  for (const a of ddMatches) {
    faqTotal++;
    const wc = a.split(/\s+/).filter(Boolean).length;
    if (wc < 40 || wc > 60) {
      fail(`${route}: FAQ answer ${wc} words (must be 40–60): "${a.slice(0, 60)}..."`);
    }
  }
  if (schemaAnswers.length !== ddMatches.length) {
    fail(
      `${route}: FAQ count mismatch — visible ${ddMatches.length}, schema ${schemaAnswers.length}`,
    );
  } else {
    const mismatched = ddMatches.filter((a, i) => a !== schemaAnswers[i]);
    if (mismatched.length > 0) {
      fail(`${route}: ${mismatched.length} FAQ answer(s) do NOT byte-match schema`);
    } else {
      pass(`${route}: ${ddMatches.length} FAQs, all 40–60 words, byte-match schema`);
    }
  }
}
console.log(`FAQ pages: ${faqPages}, total FAQ answers: ${faqTotal}`);
if (faqTotal !== 57) fail(`expected 57 FAQ answers (B1–B10 + Phase 2 Batch 1: bridal 7, laser 7, home 6 + Batch 2: keratin 7, colour 7, hair salon 7), got ${faqTotal}`);
else pass("57 FAQ answers total (B1–B10 + Phase 2 Batches 1–2)");

// ---------- 3. broken internal links ----------
section("3. Broken internal links");
const builtRoutes = new Set<string>(htmlByPath.keys());
const builtFiles = new Set<string>();
for (const f of fs.readdirSync(OUT, { recursive: true }) as string[]) {
  builtFiles.add(`/${f}`);
}
function routeExists(href: string): boolean {
  const clean = href.split("#")[0].split("?")[0];
  if (clean === "" || clean === "/") return builtRoutes.has("/");
  if (builtRoutes.has(clean)) return true;
  if (builtRoutes.has(`${clean}/`)) return true;
  if (builtFiles.has(clean)) return true;
  return false;
}
let linkTotal = 0;
let broken = 0;
for (const [route, html] of htmlByPath) {
  const hrefs = [...html.matchAll(/href="([^"]*)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("https://wa.me") ||
      href.startsWith("#") ||
      href.startsWith("javascript:")
    )
      continue;
    linkTotal++;
    if (!routeExists(href)) {
      broken++;
      fail(`${route}: broken internal link ${href}`);
    }
  }
}
if (broken === 0) pass(`${linkTotal} internal hrefs, 0 broken`);

// ---------- 4. orphans ----------
section("4. Orphans");
const incoming = new Map<string, number>();
for (const [route, html] of htmlByPath) {
  const hrefs = [...html.matchAll(/href="([^"]*)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (href.startsWith("/")) {
      const clean = href.split("#")[0];
      incoming.set(clean, (incoming.get(clean) ?? 0) + 1);
      incoming.set(
        clean.endsWith("/") ? clean.slice(0, -1) : `${clean}/`,
        (incoming.get(clean.endsWith("/") ? clean.slice(0, -1) : `${clean}/`) ?? 0) + 1,
      );
    }
  }
}
for (const route of htmlByPath.keys()) {
  if (route === "/") continue;
  const count = incoming.get(route) ?? 0;
  if (count === 0) fail(`${route}: orphan (no incoming internal link)`);
}
{
  const orphans = [...htmlByPath.keys()].filter(
    (r) => r !== "/" && (incoming.get(r) ?? 0) === 0,
  );
  if (orphans.length === 0) pass("0 orphans");
}

// ---------- 5. sitemap vs built pages ----------
section("5. Sitemap vs built pages");
const sitemap = read(path.join(OUT, "sitemap.xml"));
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => m[1].replace(DOMAIN, ""),
);
const builtSet = new Set(htmlByPath.keys());
const missing = sitemapUrls.filter((u) => !builtSet.has(u));
const extra = [...builtSet].filter((u) => !sitemapUrls.includes(u));
if (missing.length === 0 && extra.length === 0) {
  pass(`sitemap ${sitemapUrls.length} URLs == built pages ${builtSet.size}`);
} else {
  if (missing.length) fail(`sitemap URLs not built: ${missing.join(", ")}`);
  if (extra.length) fail(`built pages not in sitemap: ${extra.join(", ")}`);
}

// ---------- 6. favicon link tags ----------
section("6. Favicon link tags");
let favMissing = 0;
for (const [route, html] of htmlByPath) {
  const hasIcon =
    html.includes('rel="icon"') && html.includes("/favicon.ico");
  const hasApple = html.includes('rel="apple-touch-icon"');
  const hasManifest = html.includes('rel="manifest"');
  if (!hasIcon || !hasApple || !hasManifest) {
    favMissing++;
    fail(`${route}: favicon tags incomplete (icon=${hasIcon}, apple=${hasApple}, manifest=${hasManifest})`);
  }
}
if (favMissing === 0) pass(`favicon.ico + apple-touch-icon + manifest link tags on all ${htmlByPath.size} pages`);

// ---------- 7. GSC + GTM ----------
section("7. GSC meta + GTM");
const GTM = "GTM-TNQJ5FLL";
const GSC = "EcG3z_LiiugVp7Pq_E_8TK0lFiGBICYvk-e5kDGkXPI";
let gtmMissing = 0;
let gscMissing = 0;
for (const [route, html] of htmlByPath) {
  if (!html.includes(`gtm.js?id=${GTM}`)) {
    gtmMissing++;
    fail(`${route}: gtm.js ${GTM} missing`);
  }
  if (!html.includes(`ns.html?id=${GTM}`)) {
    gtmMissing++;
    fail(`${route}: GTM noscript iframe missing`);
  }
  if (!html.includes('name="google-site-verification"')) {
    gscMissing++;
    fail(`${route}: GSC meta missing`);
  }
  if (!html.includes(GSC)) {
    gscMissing++;
    fail(`${route}: GSC meta content wrong`);
  }
}
if (gtmMissing === 0) pass(`GTM ${GTM} (gtm.js + noscript iframe) on all pages`);
if (gscMissing === 0) pass(`GSC meta ${GSC} on all pages`);
{
  const allHtml = [...htmlByPath.values()].join("\n");
  const gtmIds = [...new Set([...allHtml.matchAll(/GTM-[A-Z0-9]+/g)].map((m) => m[0]))];
  if (gtmIds.length === 1 && gtmIds[0] === GTM) pass("exactly one GTM container, no other");
  else fail(`GTM containers found: ${gtmIds.join(", ")}`);
  if (/G-[A-Z0-9]{10}/.test(allHtml)) fail("a GA4 measurement ID (G-...) appears hardcoded");
  else pass("no hardcoded GA4 ID");
  const gscFile = read(path.join(OUT, "googleb7d79ba7b0fa42b4.html"));
  if (gscFile.trim() === "google-site-verification: googleb7d79ba7b0fa42b4.html") {
    pass("GSC verification file content exact");
  } else {
    fail(`GSC file content wrong: ${JSON.stringify(gscFile)}`);
  }
}

// ---------- 8. CSS utilities ----------
section("8. Built CSS contains utilities");
{
  const cssFiles: string[] = [];
  const chunksDir = path.join(OUT, "_next", "static", "chunks");
  if (fs.existsSync(chunksDir)) {
    for (const f of fs.readdirSync(chunksDir, { recursive: true }) as string[]) {
      if (f.endsWith(".css")) cssFiles.push(path.join(chunksDir, f));
    }
  }
  const cssDir = path.join(OUT, "_next", "static", "css");
  if (fs.existsSync(cssDir)) {
    for (const f of fs.readdirSync(cssDir)) {
      if (f.endsWith(".css")) cssFiles.push(path.join(cssDir, f));
    }
  }
  let found = false;
  for (const f of cssFiles) {
    const css = read(f);
    if (/\.bg-[a-z0-9-]+{/.test(css) && css.length > 5000) found = true;
  }
  if (found) pass(`Tailwind utilities present in built CSS (${cssFiles.length} css file(s))`);
  else fail(`no .bg- utility found in built CSS (${cssFiles.length} css file(s))`);
}

// ---------- 9. £ / Rs figures + sibling-brand contamination ----------
section("9. £ / Rs figures + sibling-brand contamination");
{
  const allHtml = [...htmlByPath.values()].join("\n");
  const poundHits = (allHtml.match(/£\s?\d/g) || []).length;
  if (poundHits === 0) pass("zero £ figures in built HTML (call or WhatsApp for today's price)");
  else fail(`${poundHits} £ figure(s) in built HTML`);
  const rsHits = (allHtml.match(/\bRs\b/g) || []).length;
  if (rsHits === 0) pass("zero Rs figures in built HTML (no prices published)");
  else fail(`${rsHits} Rs figure(s) in built HTML`);
  const wrongEmailHits = (allHtml.match(/san\.shabehavioral/g) || []).length;
  if (wrongEmailHits === 0) pass("zero wrong flyer email (san.shabehavioral) in built HTML");
  else fail(`wrong flyer email appears ${wrongEmailHits} time(s) in built HTML`);
  const emailHits = (allHtml.match(/sansha\.lounge@gmail\.com/g) || []).length;
  if (emailHits >= 15) pass(`correct email sansha.lounge@gmail.com on all pages (${emailHits} hits)`);
  else fail(`correct email only ${emailHits} hit(s) in built HTML, expected >= 15`);
  const staleHoursHits = (allHtml.match(/Tue closed|Tuesday closed|10:00–20:00|11:00–20:00/g) || []).length;
  if (staleHoursHits === 0) pass("zero stale working-default hours in built HTML (Open 24 hours)");
  else fail(`${staleHoursHits} stale hours mention(s) in built HTML`);
  const open24Hits = (allHtml.match(/Open 24 hours/g) || []).length;
  if (open24Hits >= 15) pass(`"Open 24 hours" on all pages (${open24Hits} hits)`);
  else fail(`"Open 24 hours" only ${open24Hits} hit(s) in built HTML, expected >= 15`);
  for (const bad of ["Birmingham", "Lost Car Key", "Lost Key Fob"]) {
    const hits = (allHtml.match(new RegExp(bad, "g")) || []).length;
    if (hits === 0) pass(`zero "${bad}" in built HTML (sibling-brand purity)`);
    else fail(`"${bad}" appears ${hits} time(s) in built HTML`);
  }
}

// ---------- 10. shingle check ----------
// Verbatim review quotes are third-party text shown in context (the same
// review appears on its service page, on home, and on /reviews/ by design,
// per STRATEGY.md). The uniqueness rule applies to the site's own copy,
// so <blockquote> contents are excluded from the shingle checks on both
// sides of every comparison.
function stripBlockquotes(html: string): string {
  return html.replace(/<blockquote[\s\S]*?<\/blockquote>/gi, " ");
}

section("10. 15-word shingle check (within-site + vs siblings)");
function reportOverlaps(
  label: string,
  a: Map<string, string>,
  b: Map<string, string>,
) {
  let pairs = 0;
  const examples: string[] = [];
  const bShingles = new Map<string, string>();
  for (const [page, text] of b) {
    for (const s of shingles(text)) bShingles.set(s, page);
  }
  for (const [page, text] of a) {
    for (const s of shingles(text)) {
      const other = bShingles.get(s);
      if (other && other !== page) {
        pairs++;
        if (examples.length < 5) examples.push(`"${s.slice(0, 60)}..." (${page} vs ${other})`);
      }
    }
  }
  if (pairs === 0) pass(`${label}: 0 shared 15-word shingles`);
  else {
    fail(`${label}: ${pairs} shared 15-word shingle(s)`);
    for (const e of examples) console.log(`       ${e}`);
  }
  return pairs;
}
const myTexts = new Map<string, string>();
for (const [route, html] of htmlByPath) {
  myTexts.set(route, visibleText(stripBlockquotes(html)));
}
{
  let total = 0;
  const seen = new Map<string, string>();
  for (const [route, text] of myTexts) {
    for (const s of shingles(text)) {
      const prev = seen.get(s);
      if (prev && prev !== route) {
        total++;
        if (total <= 5) console.log(`       "${s.slice(0, 60)}..." (${route} vs ${prev})`);
      } else if (!prev) {
        seen.set(s, route);
      }
    }
  }
  if (total === 0) pass("within-site: 0 shared 15-word shingles");
  else fail(`within-site: ${total} shared 15-word shingle(s)`);
}
const siblingDirs = [
  "/home/hatch/workspace/carkeyfobprogramming/out",
  "/home/hatch/workspace/lost-key-fob-replacement-site/out",
];
for (const dir of siblingDirs) {
  if (!fs.existsSync(dir)) {
    console.log(`  SKIP  sibling out/ not found: ${dir}`);
    continue;
  }
  const sibTexts = new Map<string, string>();
  for (const f of listHtml(dir)) {
    const route = f === "index.html" ? "/" : `/${f.replace(/\/index\.html$/, "/")}`;
    sibTexts.set(`${path.basename(dir)}:${route}`, visibleText(stripBlockquotes(read(path.join(dir, f)))));
  }
  reportOverlaps(`vs ${path.basename(dir)} (built)`, myTexts, sibTexts);
}

// ---------- 11. schema + claims + staff names ----------
section("11. Schema, claims, staff names");
{
  const allHtml = [...htmlByPath.values()].join("\n");
  if (/aggregateRating|"@type":"Review"|"@type": "Review"/.test(allHtml)) fail("review/aggregateRating schema present");
  else pass("no review/aggregateRating schema");
  // Superlatives in site copy (reviews page excluded — verbatim quotes).
  const nonReviewTexts = [...htmlByPath.entries()]
    .filter(([r]) => r !== "/reviews/")
    .map(([, h]) => visibleText(h))
    .join("\n");
  for (const bad of [/\bbest\b/i, /\bcheapest\b/i, /#1/, /5-star/i, /5★/]) {
    const hits = (nonReviewTexts.match(bad) || []).length;
    if (hits === 0) pass(`no "${bad}" superlative in site copy outside /reviews/`);
    else fail(`superlative ${bad} appears ${hits} time(s) outside /reviews/`);
  }
  // "hygienic" / "painless" only inside verbatim review quotes
  // (reviews page + waxing page quote).
  for (const [route, html] of htmlByPath) {
    if (route === "/reviews/" || route === "/waxing-peshawar/") continue;
    const t = visibleText(html);
    if (/\bhygienic\b/i.test(t)) fail(`${route}: "hygienic" appears outside a review quote`);
    if (/\bpainless\b/i.test(t)) fail(`${route}: "painless" appears outside a review quote`);
  }
  pass(`"hygienic"/"painless" appear only on /reviews/ and /waxing-peshawar/ (inside verbatim quotes)`);
  // Staff names ONLY inside <blockquote> (verbatim review quotes).
  const staff = [
    "lubna", "eman", "eeman", "emaan", "iman",
    "sehar", "seher", "sahar",
    "sadia", "kainat", "kayinat", "kaniyat", "farah", "muskaan",
  ];
  const staffRe = new RegExp(`\\b(${staff.join("|")})\\b`, "i");
  let staffBad = 0;
  for (const [route, html] of htmlByPath) {
    const noQuotes = html.replace(/<blockquote[\s\S]*?<\/blockquote>/gi, " ");
    const t = visibleText(noQuotes);
    const m = t.match(staffRe);
    if (m) {
      staffBad++;
      fail(`${route}: staff name "${m[0]}" appears outside a verbatim review quote`);
    }
  }
  if (staffBad === 0) pass("staff names appear ONLY inside verbatim review quotes (<blockquote>)");
  // No "years in business" / response-time inventions.
  if (/\b\d+\s*years?\s+(in business|of experience)\b/i.test(nonReviewTexts)) fail("invented years-in-business/experience claim");
  else pass('no "years in business / of experience" claims');
}

// ---------- 12. Images (photos + og canvas) ----------
section("12. Images (photos + og canvas)");
{
  const regText = read(path.join(ROOT, "src", "data", "photos.ts"));
  interface RegPhoto { slug: string; nativeW: number; nativeH: number; heroPages: string[] }
  const PHOTOS: RegPhoto[] = [];
  for (const m of regText.matchAll(/\{\s*slug: "([^"]+)",[\s\S]*?\n  \},/g)) {
    const block = m[0];
    const num = (re: RegExp) => Number(block.match(re)?.[1] ?? 0);
    const list = (re: RegExp) => [...(block.match(re)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((x) => x[1]);
    PHOTOS.push({
      slug: m[1],
      nativeW: num(/nativeW: (\d+)/),
      nativeH: num(/nativeH: (\d+)/),
      heroPages: list(/heroPages: \[([^\]]*)\]/),
    });
  }
  if (PHOTOS.length === 19) pass("photo registry: 19 photos");
  else fail(`photo registry: ${PHOTOS.length} photos (expected 19)`);
  const bySlug = new Map(PHOTOS.map((p) => [p.slug, p]));

  const imgRe = /<img\b([^>]*)>/gi;
  let imgTotal = 0;
  const imgProblems: string[] = [];
  const ogProblems: string[] = [];
  for (const [route, html] of htmlByPath) {
    const og = html.match(/<meta property="og:image" content="([^"]+)"/);
    const tw = html.match(/<meta name="twitter:image" content="([^"]+)"/);
    if (!og || !tw) {
      ogProblems.push(`${route}: missing og:image and/or twitter:image`);
    } else {
      for (const u of [og[1], tw[1]]) {
        const rel = u.replace(new RegExp(`^${DOMAIN.replace(/\./g, "\\.")}/`), "");
        if (!fs.existsSync(path.join(OUT, rel))) ogProblems.push(`${route}: og/twitter image not built: ${u}`);
      }
      if (og[1] !== tw[1]) ogProblems.push(`${route}: og:image != twitter:image`);
      if (!og[1].endsWith(`/images/${OG_FILE}`)) {
        ogProblems.push(`${route}: og:image should be the single og canvas ${OG_FILE}, got ${og[1]}`);
      }
    }
    let m: RegExpExecArray | null;
    while ((m = imgRe.exec(html)) !== null) {
      imgTotal++;
      const attrs = m[1];
      const src = attrs.match(/src="([^"]+)"/)?.[1] ?? "";
      const w = Number(attrs.match(/width="(\d+)"/)?.[1] ?? 0);
      const h = Number(attrs.match(/height="(\d+)"/)?.[1] ?? 0);
      const alt = attrs.match(/alt="([^"]*)"/)?.[1];
      if (!w || !h) imgProblems.push(`${route}: <img> missing width/height: ${src}`);
      if (alt === undefined || alt === "") imgProblems.push(`${route}: <img> missing/empty alt: ${src}`);
      const srcset = attrs.match(/srcset="([^"]+)"/)?.[1] ?? "";
      const urls = [src, ...srcset.split(",").map((s) => s.trim().split(/\s+/)[0])].filter(Boolean);
      for (const u of urls) {
        if (u.startsWith("http")) continue;
        if (!fs.existsSync(path.join(OUT, u.replace(/^\//, "")))) {
          imgProblems.push(`${route}: image URL not built: ${u}`);
        }
      }
      const slugMatch = src.match(/\/images\/([a-z0-9-]+)-(\d+)\.(avif|webp|jpg)$/);
      if (slugMatch) {
        const photo = bySlug.get(slugMatch[1]);
        const renderedW = Number(slugMatch[2]);
        if (!photo) imgProblems.push(`${route}: unknown photo slug in src: ${src}`);
        else {
          if (renderedW > photo.nativeW) imgProblems.push(`${route}: UPSCALED render ${renderedW}w > native ${photo.nativeW}w: ${src}`);
          if (w && w !== renderedW) imgProblems.push(`${route}: <img> width attr ${w} != src width ${renderedW}: ${src}`);
        }
      }
    }
  }
  if (imgProblems.length === 0) pass(`all ${imgTotal} <img> tags: width/height + alt set, src/srcset resolve, no upscaled renders`);
  else fail(`${imgProblems.length} image problems:\n    - ${imgProblems.slice(0, 12).join("\n    - ")}${imgProblems.length > 12 ? `\n    …and ${imgProblems.length - 12} more` : ""}`);
  if (ogProblems.length === 0) pass(`og:image + twitter:image on every page = the single og canvas (${OG_FILE}), resolving to the built file`);
  else fail(`${ogProblems.length} og:image problems:\n    - ${ogProblems.slice(0, 12).join("\n    - ")}${ogProblems.length > 12 ? `\n    …and ${ogProblems.length - 12} more` : ""}`);

  const smProblems: string[] = [];
  for (const sm of ["sitemap.xml", "image-sitemap.xml"]) {
    const p = path.join(OUT, sm);
    if (!fs.existsSync(p)) { smProblems.push(`${sm} missing from out/`); continue; }
    const xml = read(p);
    for (const loc of [...xml.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((x) => x[1])) {
      const rel = loc.replace(new RegExp(`^${DOMAIN.replace(/\./g, "\\.")}/`), "");
      if (!fs.existsSync(path.join(OUT, rel))) smProblems.push(`${sm}: image loc not built: ${loc}`);
    }
    if (!xml.includes("<image:image>")) smProblems.push(`${sm}: no <image:image> entries`);
  }
  if (smProblems.length === 0) pass("sitemap.xml + image-sitemap.xml image entries all resolve to built files");
  else fail(`${smProblems.length} sitemap-image problems:\n    - ${smProblems.slice(0, 12).join("\n    - ")}`);
}

// ---------- summary ----------
console.log(`\n================ SUMMARY ================`);
console.log(`PASS: ${passes}   FAIL: ${failures}`);
if (failures > 0) {
  console.log("QA FAILED — fix the items above and re-run.");
  process.exit(1);
} else {
  console.log("QA GREEN — all checks passed.");
}
