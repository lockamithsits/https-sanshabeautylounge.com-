# SanSha A Beauty Lounge — v1

Static Next.js site for **SanSha A Beauty Lounge**
(sanshabeautylounge.com, apex canonical). Built 2026-11-14.

## Locked facts (owner-confirmed 2026-11-14)

- **Brand:** SanSha A Beauty Lounge (Google listing name, G5 closed)
- **Address:** Shop No. 4, Block A, Deans Hights, Phase 2, Hayatabad,
  Peshawar 25124, Pakistan (spelling "Deans Hights" per the Google
  listing, G5 closed; the listing's duplicated "Phase-2 Phase 2" is
  collapsed to one "Phase 2"). NAP matches the Google profile.
  Walk-in salon — clients come to the salon; NO home service.
- **Phone:** call 091-5839119 · WhatsApp +92 313 9333377 (display 0313
  9333377) · **CTA:** call + WhatsApp both
- **Hours:** Open 24 hours, 7 days a week (owner-confirmed, G1 closed;
  supersedes the conflicting directory hours).
- **Google rating:** 3.9★ / 92 reviews (visible text only — NO
  aggregateRating / Review schema anywhere)
- **Email:** sansha.lounge@gmail.com (owner-confirmed, G4 closed; on
  the contact page, in the footer, in schema, and in llms.txt).
  The flyer email san.shabehavioral@gmail.com was WRONG — it appears
  nowhere on the site (QA checks for it).
- **GSC:** meta `EcG3z_LiiugVp7Pq_E_8TK0lFiGBICYvk-e5kDGkXPI` + file
  `public/googleb7d79ba7b0fa42b4.html` (both baked)
- **GTM:** `GTM-TNQJ5FLL` (gtm.js async + gtag init, `beforeInteractive`;
  noscript iframe after `<body>`). No GA4 ID hardcoded.
- **Repo:** https://github.com/lockamithsits/https-sanshabeautylounge.com-
  (lockamithsits, main). Local commit only — **never push from this
  side** (parent pushes after independent QA). No deploy zip — the
  owner deploys via Cloudflare Pages Git integration (see below).

## Pages (15 — Top 10 + contact + reviews + 3 legal)

Home `/`, bridal makeup, party makeup, hair salon, keratin treatment,
hair colour & balayage, laser hair removal, facials, waxing & threading,
mani-pedi, contact, reviews (12 verbatim Google reviews), privacy-policy,
terms, cookies.

**HELD (not built):** B11 bridal mehndi application (wave 2, G12-gated),
areas hub + area pages, massage page (G12), prices/deals page (G2/G13),
bridal packages page (G2).

## Photos (19 real owner photos — see `src/data/photos.ts`)

Optimised pack (AVIF → WebP → JPG at widths capped at native — **never
upscaled**, EXIF stripped). ONE og canvas (`public/images/og-sansha-
beauty-lounge-hayatabad-peshawar.jpg`, 1200×630, hero photo at native
size on a near-black canvas) — used as the og:image on EVERY page. Home
shows all 19 photos (hero eager + preloaded; below-fold lazy, width/
height set, zero CLS). Image sitemaps: `sitemap.xml` carries
`<image:image>` entries (33) AND `public/image-sitemap.xml` (33 entries,
11 URLs); both listed in robots.txt.

Per-photo map (filename — native size — use): see `src/data/photos.ts`
+ `images-manifest.md` in `~/workspace/sansha-beauty-lounge/`.
Notes: photos showing the 2019 1st-anniversary 50%-off banner are photos
OF the salon — the 2019 offer is NOT current and is never captioned or
priced as a live deal. Captions name only what is visible.

## Tech

Next.js **16.3.8 exact** + `@opennextjs/cloudflare` 1.20.9,
`cacheComponents: false`, Tailwind v4 (`@tailwindcss/turbopack` loader),
`output: "export"` for Cloudflare Pages, `trailingSlash: true`, system
fonts only (zero webfont downloads — display serif is a system Georgia
stack; a Google display face can be swapped in later). Static export —
no `_redirects` (www→apex via Cloudflare Bulk Redirects, owner-side);
`_headers` sets 1-year immutable cache for jpg/webp/avif/png/svg +
`/_next/static/*`.

Content rules: FAQPage JSON-LD byte-matches visible FAQ text (40–60-word
answers, single source of truth in each page file); no Rs/£ figures
anywhere ("call or WhatsApp for today's price"); no staff names in site
copy (names appear ONLY inside verbatim review quotes); no
"best/cheapest/#1/5-star/hygienic" claims; no sibling brands named
anywhere; 15-word shingle check vs the two sibling sites is 0 (see QA).

## QA

- `pnpm qa` — checks: titles/metas verbatim vs strategy briefs (15/15),
  FAQ 40–60w + byte-match (42 answers), 0 broken links, 0 orphans,
  sitemap == built pages (15), favicon link tags on all pages, GSC +
  GTM on all pages, CSS utilities present, 0 £/Rs figures, 0 sibling
  contamination ("Birmingham"/"Lost Car Key"), 0 shared 15-word shingles
  (within-site + both siblings), no review/aggregateRating schema, staff
  names only inside verbatim quotes, images (width/height + alt,
  src/srcset resolve, no upscaled renders), og:image + twitter:image on
  every page, sitemap image entries resolve.
- `pnpm mobile-check` — scripted 360px check on all 15 pages: zero
  horizontal overflow, all structural tap targets ≥44px, mobile menu
  opens/closes/navigates on tap, 0 JS errors, lab CLS = 0, map embed
  present on home + contact. (GTM + Google Maps loads are excluded as
  sandbox-unreachable externals; lab metrics only — Search Console FIELD
  Core Web Vitals need real-user data after deployment.)

## Deploy (owner-side — Cloudflare Pages Git integration)

Domain sanshabeautylounge.com does NOT resolve yet (registration/DNS
pending, G6) — deploy only after DNS is fixed. The owner deploys
directly from GitHub (no drag-drop zip):

- **Pages project:** connect the lockamithsits repo above, production
  branch `main`, root directory `/` (repo root).
- **Framework preset:** Next.js (Static HTML Export) — or "None" with
  the settings below; either way Pages must NOT run a Node server.
- **Build command:** `pnpm build`
  (Pages runs `pnpm install` automatically from `pnpm-lock.yaml`;
  `packageManager: pnpm@12.16.1` is pinned in package.json).
- **Output directory:** `out`
- **Node.js version:** 20 (`.nvmrc` pins `20`; Pages reads it — no
  `NODE_VERSION` env var needed).
- **Environment variables:** none.
- **Build verified from a clean checkout 2026-11-14** (`pnpm install`
  + `pnpm build` in a fresh copy, no node_modules/.next/out): green.
  Note: the sandbox runs Node 24 locally and the build is green there
  too; Pages uses Node 20 per `.nvmrc`.

After the first deploy: add custom domains apex + www → Bulk
Redirects www→apex → GSC Verify + submit sitemap.xml → Request
Indexing ~10–20 pages/day. **A push is not a deploy — verify on the
live URL after deploying.**

## Owner items still open (one-liners needed)

Current prices (G2 — call/WhatsApp for prices throughout, unchanged) ·
domain DNS (G6) · GBP claim (G10) · map geo (G11) · service
confirmations (G12: massage types, nails, mehndi application,
piercing) · deals (G13) · staff spellings (G3) · WhatsApp Business
status (G15) · booking policy (G16: walk-in vs appointment,
ladies-only, Friday prayer break).
**Closed for v1:** G1 hours (Open 24 hours) · G4 email
(sansha.lounge@gmail.com) · G5 brand + address spelling
("Deans Hights").
