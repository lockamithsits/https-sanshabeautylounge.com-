import { SITE } from "@/data/siteConfig";
import { PHOTOS } from "@/data/photos";

/** Required for static export (output: "export"). */
export const dynamic = "force-static";

/**
 * sitemap.xml — hand-built (Next's MetadataRoute.Sitemap cannot carry
 * <image:image> entries). Indexable URLs only, matching the built pages
 * exactly; every page photo is listed as an <image:image> entry
 * (home lists all 19 photos; each other page lists its hero photo(s)).
 * The full per-image sitemap also lives at
 * /image-sitemap.xml (static file in public/).
 *
 * Wave 1 (Top 10 + contact + reviews + 3 legal = 15 pages).
 * Wave 2 (Batch 4): + /gallery/ + /bridal-mehndi-peshawar/ (B11)
 * = 17 pages.
 */
const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/bridal-makeup-peshawar/", priority: 0.9 },
  { path: "/party-makeup-peshawar/", priority: 0.9 },
  { path: "/hair-salon-peshawar/", priority: 0.9 },
  { path: "/keratin-treatment-peshawar/", priority: 0.8 },
  { path: "/hair-colour-peshawar/", priority: 0.8 },
  { path: "/laser-hair-removal-peshawar/", priority: 0.8 },
  { path: "/facial-peshawar/", priority: 0.8 },
  { path: "/waxing-peshawar/", priority: 0.8 },
  { path: "/mani-pedi-peshawar/", priority: 0.8 },
  { path: "/bridal-mehndi-peshawar/", priority: 0.8 },
  { path: "/contact/", priority: 0.7 },
  { path: "/reviews/", priority: 0.6 },
  { path: "/gallery/", priority: 0.6 },
  { path: "/privacy-policy/", priority: 0.3 },
  { path: "/terms/", priority: 0.3 },
  { path: "/cookies/", priority: 0.3 },
];

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function GET() {
  const pageImages = new Map<string, typeof PHOTOS>();
  for (const p of PHOTOS) {
    for (const r of p.heroPages) {
      const list = pageImages.get(r) ?? [];
      list.push(p);
      pageImages.set(r, list);
    }
  }
  pageImages.set("/", PHOTOS);
  // The gallery page shows all 19 photos (same set as home).
  pageImages.set("/gallery/", PHOTOS);

  const urls = ROUTES.map((r) => {
    const imgs = (pageImages.get(r.path) ?? [])
      .map(
        (p) =>
          `    <image:image>\n      <image:loc>${SITE.url}/images/${p.slug}-${p.nativeW}.jpg</image:loc>\n      <image:title>${esc(p.alt)}</image:title>\n      <image:caption>${esc(p.caption)}</image:caption>\n    </image:image>`,
      )
      .join("\n");
    return (
      `  <url>\n    <loc>${SITE.url}${r.path}</loc>\n` +
      `    <lastmod>${SITE.lastUpdated}</lastmod>\n` +
      `    <changefreq>monthly</changefreq>\n` +
      `    <priority>${r.priority.toFixed(1)}</priority>\n` +
      (imgs ? `${imgs}\n` : "") +
      `  </url>`
    );
  }).join("\n");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    `${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
