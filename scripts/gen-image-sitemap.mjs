#!/usr/bin/env node
/**
 * Regenerate public/image-sitemap.xml from the built out/sitemap.xml.
 *
 * The image sitemap is the same per-route <image:image> data as
 * sitemap.xml, without <lastmod>/<changefreq>/<priority>. It is a
 * static file (not a route) so it must be regenerated after any
 * photo-registry change — run after `pnpm build`:
 *
 *   pnpm build && node scripts/gen-image-sitemap.mjs
 *
 * The QA image check verifies both files' <image:loc> entries
 * resolve to built files.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const src = fs.readFileSync(path.join(ROOT, "out", "sitemap.xml"), "utf8");
const stripped = src
  .split("\n")
  .filter((l) => !/^\s*<(lastmod|changefreq|priority)>/.test(l))
  .join("\n");
fs.writeFileSync(path.join(ROOT, "public", "image-sitemap.xml"), stripped);
const n = (stripped.match(/<image:image>/g) ?? []).length;
const urls = (stripped.match(/<url>/g) ?? []).length;
console.log(`image-sitemap.xml: ${urls} urls, ${n} image entries`);
