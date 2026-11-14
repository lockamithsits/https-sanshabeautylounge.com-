# SanSha A Beauty Lounge — v1 BUILD BRIEF

Built 2026-11-14. Next.js 16.3.8 static export for Cloudflare Pages.
15 pages. Committed locally only — **never push from this side**
(parent pushes after independent QA).

## Repo (push target — CHANGED by owner 2026-11-14)

https://github.com/lockamithsits/https-sanshabeautylounge.com-.git
(lockamithsits, main). This SUPERSEDES the mrskey repo given earlier
(the mrskey token was never used). Parent pushes; this side commits
locally only.

## Deploy — Cloudflare Pages Git integration (owner deploys, NO zip)

- Connect the lockamithsits repo, production branch `main`, root
  directory `/` (repo root).
- Framework preset: Next.js (Static HTML Export) — or "None" with the
  settings below; Pages must NOT run a Node server.
- **Build command:** `pnpm build` (Pages runs `pnpm install`
  automatically from `pnpm-lock.yaml`; `packageManager: pnpm@12.16.1`
  is pinned in package.json).
- **Output directory:** `out`
- **Node.js version:** 20 (`.nvmrc` pins `20`; Pages reads it — no
  `NODE_VERSION` env var needed).
- **Environment variables:** none.
- **Clean-checkout proof (2026-11-14):** fresh copy with no
  node_modules/.next/out → `pnpm install` + `pnpm build` GREEN
  (39 entries in `out/`, index/sitemap/robots/llms present).
  Note: the sandbox runs Node 24 locally and the build is green there
  too; Pages uses Node 20 per `.nvmrc`.

After the first deploy: add custom domains apex + www → Bulk
Redirects www→apex → GSC Verify + submit sitemap.xml → Request
Indexing ~10–20 pages/day. **A push is not a deploy — verify on the
live URL after deploying.**

## Facts used (all owner-confirmed 2026-11-14)

- **Domain:** https://sanshabeautylounge.com/ (apex canonical).
  Does NOT resolve yet — registration/DNS pending (G6).
- **Brand:** "SanSha A Beauty Lounge" (Google listing name).
- **Address:** Shop No. 4, Block A, Deans Hights, Phase 2, Hayatabad,
  Peshawar 25124, Pakistan. Walk-in salon — clients come to the salon;
  NO home service. NAP matches the Google profile exactly.
- **Phone:** call 091-5839119 (tel:+92915839119); WhatsApp
  +92 313 9333377 (wa.me/923139333377, display 0313 9333377).
  CTA: call + WhatsApp both.
- **Hours:** Open 24 hours, 7 days a week.
- **Email:** sansha.lounge@gmail.com — on the contact page, in the
  footer (every page), in BeautySalon schema (`email`), and in
  llms.txt / llms-full.txt.
- **Google rating:** 3.9★ / 92 reviews (visible text only — NO
  aggregateRating / Review schema anywhere).
- **Socials (sameAs + footer):** Instagram
  https://www.instagram.com/sanshaabeautylounge (2.9K) · Facebook
  https://www.facebook.com/SanshaAbeautylounge (3,297) · TikTok
  https://www.tiktok.com/@sanshaabeautylounge (920, 142 videos).
- **GSC:** meta `EcG3z_LiiugVp7Pq_E_8TK0lFiGBICYvk-e5kDGkXPI` +
  file `public/googleb7d79ba7b0fa42b4.html` (one line:
  `google-site-verification: googleb7d79ba7b0fa42b4.html`). FILLED.
- **GTM:** `GTM-TNQJ5FLL` (gtm.js async + gtag init,
  `beforeInteractive`; noscript iframe in body). No GA4 ID. FILLED.
- **Schema:** BeautySalon (+ LocalBusiness) on home with
  name/url/logo/image/telephone/email/address/areaServed/
  openingHoursSpecification (Mo–Su 00:00–23:59)/sameAs (3 socials).
  NO geo (G11 unconfirmed), NO priceRange (G2), NO aggregateRating.
  Service schema per service page, FAQPage (byte-matching visible
  text), BreadcrumbList, WebSite, ImageObject for hero/gallery.

## Intake gaps — RESOLVED for v1 (owner, 2026-11-14)

- **G1 hours — CLOSED:** Open 24 hours, 7 days a week. Supersedes the
  conflicting Weddme / Peekaboo / Google Maps hours. No working-default
  hours remain anywhere on the site (QA checks for stale hours: 0).
- **G4 email — CLOSED:** sansha.lounge@gmail.com. **WARNING:** the
  flyer email san.shabehavioral@gmail.com was WRONG — it appears
  nowhere on the site, and QA fails the build if it ever appears
  (regression check in scripts/qa.ts §9).
- **G5 brand + address spelling — CLOSED:** brand "SanSha A Beauty
  Lounge" (Google listing name); address spelling "Deans Hights"
  (listing: "Deans Hights, Phase-2 Phase 2 Hayatabad, Peshawar,
  25124"). The listing's duplicated "Phase-2 Phase 2" is collapsed to
  one "Phase 2" on the site; NAP otherwise matches the profile exactly.
- **G9 build package — FILLED:** repo + GSC + GTM (above).
- **Remaining open for v1 intake: G2 prices ONLY** — no prices
  confirmed; CTA throughout is "Call or WhatsApp for today's price".
  All other gaps (G6 domain DNS, G10 GBP claim, G11 map geo, G12
  service confirmations, G13 deals, G3 staff spellings, G15 WhatsApp
  Business status, G16 booking policy) are owner-side follow-ups, not
  build blockers.

## Phase 2 — Batch 1 (content expansion, 2026-11-14)

Rewrote 3 pages to the strategist prompt's standard (1,200+ own-copy
words, 6–10 FAQs, Quick Facts box, H3 structure, direct-answer
section leads, comparison tables, numbered process steps,
mid-paragraph contextual links). Titles/metas UNCHANGED (verified
22/22). QA still **78/0 GREEN**; mobile-check GREEN at 360px.

- `/bridal-makeup-peshawar/`: 645 → **2,310 own-copy words**; 5 → 7
  FAQs (trial FAQ reworded to [CONFIRM] — trials + dupatta setting
  are NOT confirmed standing offers; Service schema description
  softened to match the body). Quick Facts box, H3s per function,
  booking steps, day-of process, price-factor framework (no figures),
  preparation checklist, mistakes + myths, bridal-vs-party table.
- `/laser-hair-removal-peshawar/`: 572 → **2,159 own-copy words**;
  4 → 7 FAQs. Compliance content added: results vary, skin + hair
  type matter, contraindications to raise at consultation, patch
  test, aftercare, consultation steps. "Book a consultation" varied
  (hero + CallCTA reworded; FAQ question kept). NO "permanent", NO
  guarantees, NO session counts. No laser reviews exist in the
  Google dump (0 hits) — [ADD CLIENT REVIEW] placeholder left.
- `/` (home): 938 → **1,813 own-copy words**; 4 → 6 FAQs. Quick
  Facts box, visit-process steps, price-guidance framework (no
  figures), who-it-is-for + honest limits, "Where we are" (only
  confirmed areas named; other areas as [CONFIRM] slot).
- Brand leak FIXED: "L'Oreal" removed from the hair-styling-chairs
  photo alt (src/data/photos.ts) + 2 image-sitemap titles
  (public/image-sitemap.xml). 0 brand names on the site now.
- QA script updated: expected FAQ total 42 → **49** (site total now
  49). FAQ answers all 40–60 words, byte-match FAQPage JSON-LD.
- Placeholders left (owner questions): bridal trial/dupatta
  availability [CONFIRM]; bridal duration [CONFIRM]; laser patch
  test [CONFIRM]; laser session length/gap [ADD STYLIST NOTE];
  laser client review [ADD CLIENT REVIEW]; home nearby areas
  [CONFIRM]. NO prices anywhere (G2 still open).

## Phase 2 — Batch 2 (content expansion, 2026-11-14)

Rewrote 3 hair pages to the same standard as Batch 1 (1,200+ own-copy
words, 7 FAQs each, Quick Facts box, H3 structure, direct-answer
section leads, comparison tables, numbered process steps,
mid-paragraph contextual links). Titles/metas UNCHANGED (verified
22/22). QA still **78/0 GREEN**; mobile-check GREEN at 360px.

- `/keratin-treatment-peshawar/`: 718 → **2,262 own-copy words**;
  5 → 7 FAQs (new: does keratin straighten hair; colour after
  keratin). Keratin-vs-protein comparison table + H3s; who-it-suits /
  ask-first; 5-step appointment process (duration [CONFIRM]);
  hair-spa section added as [CONFIRM] wording so the body now
  mentions what the meta + schema advertise — meta/body tension
  remains (see below); price-factor framework (no figures);
  aftercare + maintenance; mistakes + myths; keratin-vs-colour
  order section. Quick Facts box, 4 H3s.
- `/hair-colour-peshawar/`: 601 → **2,442 own-copy words**; 4 → 7
  FAQs (new: how long colour lasts; dark-to-light in one visit;
  patch test). Dye / balayage / streaks / highlights as H3 sections;
  shade guidance; patch-test section ([CONFIRM] — ask when booking
  whether one is needed); who-it-suits / ask-first (previously
  coloured or damaged hair); 4-step appointment process (duration
  [CONFIRM]); aftercare + maintenance; price factors; mistakes +
  myths; colour-vs-keratin order section. Quick Facts box, 6 H3s.
- `/hair-salon-peshawar/`: 600 → **2,197 own-copy words**; 4 → 7
  FAQs (new: how long a haircut takes [CONFIRM]; cut + colour in
  one visit; what to bring). Each section expanded with process +
  duration [CONFIRM] + who-it-suits: haircuts (H3 what a haircut
  looks like, who it is for), blow-dry & wash, event styling
  (bridal/party links), treatments + colour as separate visits,
  price factors, preparation checklist, mistakes + myths. Quick
  Facts box, 4 H3s.
- QA script updated: expected FAQ total 49 → **57** (site total now
  57). FAQ answers all 40–60 words, byte-match FAQPage JSON-LD.
- Uniqueness fix round: first QA run failed 6 checks — 4 new FAQ
  answers were 61 words (trimmed to 57–59), "Best for:" in the
  keratin Quick Facts tripped the superlative check (reworded to
  "Good for:"), and 61 shared 15-word shingles (mirrored
  appointment intros, keratin/colour order sections, "simplest way
  to see what your hair needs" endings, price-factor closings, and
  identical Quick Facts Where/Hours lines). All four passages
  rewritten distinct per page; Quick Facts Where/Hours reworded
  per page. Re-run: 0 shared shingles, QA 78/0 GREEN.
- Placeholders left (owner questions): hair-spa offered + what it
  includes [CONFIRM]; keratin appointment duration [CONFIRM];
  keratin aftercare details [ADD STYLIST NOTE]; colour appointment
  duration [CONFIRM]; patch test needed? [CONFIRM]; colour
  aftercare details [ADD STYLIST NOTE]; haircut duration [CONFIRM];
  treatment-vs-cut call [ADD STYLIST NOTE]. NO prices anywhere
  (G2 still open).

## Meta wording caveats (flag — owner to confirm)

The strategy's verified metas carry wording the body copy repeats
without claiming it as a standing offer (origin: strategy briefs, not
owner confirmation): B2 meta "dupatta setting and trial on request"
(body: "ask about dupatta setting and a trial when you book"); B7 meta
"Book a consultation" (body: "book a consultation"); B5 meta "hair
spa" (reviewer language, G12 — Batch 2 added a [CONFIRM]-worded
hair-spa body section + Quick Facts line, so the body now mentions
what the meta advertises; the meta still presents it as an offer,
so the owner must confirm whether hair spa is offered and what it
includes); B8 meta lists whitening/organic/derma
facials (Eid flyer + reviewer language, G12 — confirm current facial
menu).

## Pages (15)

Home `/`, bridal makeup, party makeup, hair salon, keratin treatment,
hair colour & balayage, laser hair removal, facials, waxing &
threading, mani-pedi, contact, reviews (12 verbatim Google reviews),
privacy-policy, terms, cookies. Titles/metas verbatim from
STRATEGY.md briefs B1–B10 (22/22 verified in the strategy);
contact/reviews/legal titles/metas are short-but-clean builder
versions (contact meta 135 chars, reviews 145, legal 95–119).

**HELD (not built):** B11 bridal mehndi application (wave 2,
G12-gated), areas hub + area pages, massage page (G12),
prices/deals page (G2/G13), bridal packages page (G2).

## Photos (19 real owner photos)

Optimised pack (AVIF → WebP → JPG, widths capped at native — never
upscaled, EXIF stripped). ONE og canvas
(`public/images/og-sansha-beauty-lounge-hayatabad-peshawar.jpg`,
1200×630) used as og:image on EVERY page. Home shows all 19 photos
(hero eager + preloaded; below-fold lazy, width/height set, zero
CLS). Image sitemaps: `sitemap.xml` (33 image entries) AND
`public/image-sitemap.xml` (33 entries, 11 URLs); both in robots.txt.
Photos showing the 2019 1st-anniversary 50%-off banner are photos OF
the salon — the 2019 offer is never presented as current.

## QA — GREEN (2026-11-14, after final fixes)

`pnpm qa`: **78 PASS / 0 FAIL.** Titles/metas verbatim 15/15; FAQ
42 answers, all 40–60 words, byte-match FAQPage JSON-LD; 616 internal
hrefs, 0 broken; 0 orphans; sitemap 15 URLs == built pages 15;
favicon.ico + apple-touch-icon + manifest link tags on all pages; GTM
GTM-TNQJ5FLL + GSC meta on all pages, exactly one GTM container, no
GA4 ID, GSC file content exact; Tailwind utilities in built CSS;
0 £ figures; 0 Rs figures; 0 "Birmingham" / "Lost Car Key" /
"Lost Key Fob"; 0 shared 15-word shingles within-site AND vs both
sibling built sites; no review/aggregateRating schema; no
best/cheapest/#1/5-star/5★ superlatives outside /reviews/;
"hygienic"/"painless" only in verbatim quotes; staff names ONLY inside
verbatim review quotes; no years-in-business claims; 19-photo
registry; all 47 `<img>` tags width/height + alt set, src/srcset
resolve, no upscaled renders; og:image + twitter:image on every page;
sitemap image entries resolve; correct email 94 hits; "Open 24 hours"
48 hits; 0 stale working-default hours; 0 wrong flyer email.

`pnpm mobile-check`: **GREEN — all 15 pages pass at 360px.** No
horizontal overflow; all structural tap targets ≥44px (2 inline text
links exempt); mobile menu opens/closes/navigates on tap; 0 JS errors,
0 failed requests (GTM + Maps embed excluded as sandbox-unreachable);
lab CLS = 0 on every page. (Field Core Web Vitals need real-user data
after deploy.)

**Shingle-check note:** verbatim review quotes inside `<blockquote>`
are excluded from the 15-word shingle check on both sides (they are
third-party text shown in context — the same review appears on its
service page, on home, and on /reviews/ by design, per STRATEGY.md).
The uniqueness rule applies to the site's own copy: 0 shared shingles.
Two fix rounds were needed to get there (Prices paragraphs, "How do I
book?" FAQ answers, "Real clients" intros and CallCTA texts rewritten
unique per page; laser FAQ "best" reworded; footer/contact social links
and 3 home service links raised to ≥44px tap targets).

## Content rules enforced

NO Rs/£ price figures anywhere. NO staff names in site copy (names
appear ONLY inside verbatim review quotes). NO "best/cheapest/#1/
5-star/hygienic" claims. NO fake reviews/ratings/awards/credentials.
NO medical claims on the laser page (no "permanent" guarantee, no
session counts, no skin-type claims). NO HydraFacial mention. NO home
service, no men's/barber, no courses, no Botox/PRP/HydraFacial. NO UK
conventions (no £, no UK postcodes, no UK regulations). This is
PAKISTAN: currency Rs. (PKR), local terms (mehndi, nikah, barat,
walima, Eid). Site language English.
