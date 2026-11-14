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

## Phase 2 — Batch 3 (content expansion, 2026-11-14)

Rewrote 4 skin + makeup pages to the same standard as Batches 1–2
(1,200+ own-copy words, 7 FAQs each, Quick Facts box, H3 structure,
direct-answer section leads, comparison tables, numbered process
steps, mid-paragraph contextual links). Titles/metas UNCHANGED
(verified 22/22). QA still **78/0 GREEN**; mobile-check GREEN at
360px.

- `/facial-peshawar/`: 535 → **2,497 own-copy words**; 4 → 7 FAQs
  (new: facial before a wedding or Eid; what to tell the salon
  about your skin; do facials include skin polish). Facial menu
  (whitening / organic / derma) softened to [CONFIRM] wording —
  the meta still lists those facials, so the meta/body tension
  remains (see below, same pattern as bridal trial/dupatta and
  hair spa). Skin-type guidance; who-it-suits / ask-first
  (sensitive skin, skin conditions — "mention at your
  appointment", not medical advice); 5-step appointment process
  (duration [CONFIRM]); aftercare + maintenance; price-factor
  framework (no figures); preparation checklist; mistakes +
  myths; facial-vs-waxing / laser cross-links. Quick Facts box,
  10 H3s.
- `/mani-pedi-peshawar/`: 476 → **2,084 own-copy words**; 4 → 7
  FAQs (new: how long it takes [CONFIRM]; manicure + pedicure in
  one visit; polish colours). Thinnest service page and the ONLY
  page with no service photo — fixed with a REAL photo from the
  existing 19-photo set: the salon interior
  (`sansha-beauty-lounge-hair-salon-interior`, salon floor with
  styling chairs), captioned as the salon, never as a mani-pedi
  treatment in progress; heroPages entry added in
  `src/data/photos.ts`, ImageObject schema added, and a
  mani-pedi `<url>` block added to `public/image-sitemap.xml`.
  Nail-art wording → [CONFIRM] (nails are G12
  directory-only). Manicure / pedicure / polish / care as H3
  sections; who-it-suits / ask-first; 4-step appointment process
  (duration [CONFIRM]); aftercare; price factors; mistakes +
  myths. Quick Facts box, 5 H3s.
- `/waxing-peshawar/`: 523 → **2,424 own-copy words**; 4 → 7 FAQs
  (new: how to prepare for waxing; after waxing; waxing + facial
  in one visit). Waxing areas as H3 sections (arms, legs, face,
  underarms, full body — never separate pages); who-it-suits /
  ask-first (sensitive skin, skin conditions — "mention at your
  appointment", not medical advice); 4-step appointment process
  (duration [CONFIRM]); preparation checklist; aftercare;
  price-factor framework (no figures); waxing-vs-threading and
  waxing-vs-laser comparisons; mistakes + myths. Quick Facts box,
  10 H3s.
- `/party-makeup-peshawar/`: 522 → **2,202 own-copy words**; 4 →
  7 FAQs (new: what to bring; group bookings [CONFIRM]; will the
  makeup last the evening). Party-vs-bridal comparison expanded
  (lighter, shorter — no invented price gap); engagement / dinner
  / family-event looks as H3 sections; who-it-suits / ask-first
  (skin reactions, skin conditions); 4-step appointment process
  (duration [CONFIRM]); preparation checklist; aftercare
  (removing makeup after the event); price factors; mistakes +
  myths. Quick Facts box, 5 H3s.
- QA script updated: expected FAQ total 57 → **69** (site total
  now 69). FAQ answers all 40–60 words, byte-match FAQPage
  JSON-LD.
- Uniqueness fix round: first QA run failed 1 check — 213 shared
  15-word shingles (mirrored appointment intros copied from
  keratin, identical "This is not medical advice" sentences,
  shared aftercare intros, "ask for one price for the whole
  booking" price closings, identical aftercare step items, laser
  cross-link sentences, and identical Quick Facts
  Prices→Where / Where→Hours runs). All passages rewritten
  distinct per page (including keratin-mirrored intros, which
  were reworded on the Batch 3 pages only — Batch 1–2 pages
  untouched). Re-run: 0 shared shingles, QA 78/0 GREEN.
- Placeholders left (owner questions): facial menu current?
  [CONFIRM]; facial appointment duration? [CONFIRM]; facial
  aftercare details [ADD STYLIST NOTE]; nail art offered?
  [CONFIRM]; mani-pedi duration? [CONFIRM]; mani-pedi aftercare
  details [ADD STYLIST NOTE]; waxing appointment duration?
  [CONFIRM]; waxing aftercare details [ADD STYLIST NOTE]; party
  makeup duration? [CONFIRM]; group bookings? [CONFIRM]; party
  aftercare details [ADD STYLIST NOTE]. NO prices anywhere (G2
  still open).

## Phase 2 — Batch 4 (reviews + contact + NEW gallery + NEW bridal mehndi, 2026-11-14)

Rewrote 2 pages and built 2 new pages to the same standard as
Batches 1–3 (1,200+ own-copy words, 7 FAQs each, Quick Facts box,
H3 structure where it fits, direct-answer section leads, numbered
process steps, mid-paragraph contextual links). QA **87/0 GREEN**
(up from 78 — 9 new checks: 2 new titles/metas, 28 new FAQs,
Review-schema byte-match, 17-page sitemap); mobile-check GREEN at
360px (all 17 pages).

- `/reviews/`: 129 → **1,592 own-copy words** (quotes excluded);
  0 → 7 FAQs. Restructured with H2s per service (hair / makeup /
  waxing / facials / visiting the salon) — the 12 verbatim Google
  reviews are UNCHANGED, word for word, only grouped under
  headings. Title/meta IMPROVED (audit P12): old title "Customer
  Reviews | SanSha A Beauty Lounge" (41 chars, no keyword/location)
  → new "Beauty Salon Reviews in Peshawar | SanSha A Beauty Lounge"
  (57 chars); old meta (145 chars) → new "Beauty salon reviews in
  Peshawar — SanSha A Beauty Lounge, 3.9 stars on Google from 92
  reviews. Read what our clients in Hayatabad wrote, word for
  word." (152 chars). "Reviews at a glance" Quick Facts box; honest
  framing added (the 3.9★ is the average of all 92 — older reviews
  are mixed, a few 1–2★; the 12 shown are recent). Review schema
  ADDED for the 12 verbatim reviews (real + visible + byte-matching;
  no reviewRating — the Google dump gives no per-review star count;
  NO aggregateRating anywhere). QA §11 updated: Review schema is
  allowed ONLY on /reviews/ and each item is verified against the
  visible blockquotes.
- `/contact/`: 169 → **1,286 own-copy words**; 0 → 7 FAQs.
  "Visit at a glance" Quick Facts box; new sections (what to say
  when you book, how to find us, what happens when you arrive,
  walk in or book ahead, parking). Map is still a general location
  search — [CONFIRM] slot for the exact GBP pin / geo (G11).
  Walk-in wording kept (owner-confirmed walk-in salon); ladies-only
  hours / Friday prayer break / appointment lead time are
  [CONFIRM] (G16). Title/meta UNCHANGED.
- NEW `/gallery/`: **1,395 own-copy words**; 7 FAQs; "Visit at a
  glance" Quick Facts box. All 19 real photos grouped by area
  (entrance 5, reception 2, styling chairs + hair 5, treatment
  rooms 3, outside 4), each with a fresh caption written for this
  page — describing only what the photo shows, never a treatment
  it does not show. Captions differ from the registry captions on
  the home page (uniqueness). Title "Salon Gallery | SanSha A
  Beauty Lounge, Hayatabad" (49 chars) + meta (151 chars) DRAFTED
  for this page (not a strategy brief — gallery had no brief).
  [ADD REAL PHOTO] placeholder for a treatment-in-progress shot;
  [CONFIRM] for photos during visits.
- NEW `/bridal-mehndi-peshawar/` (B11): **2,283 own-copy words**;
  7 FAQs; Quick Facts box; 4 H3s. Title/meta VERBATIM from
  strategy B11 (50/143 chars); H1 verbatim. SERVICE page (henna
  application for brides + guests) — explicitly NOT a design
  gallery (the design-gallery cluster stays off this site). G12-
  GATED: the offer itself is [CONFIRM] wherever it is unconfirmed
  (application offered, designs, duration, guests, booked-with-
  makeup, aftercare). Comparison table (mehndi vs bridal makeup).
  No client review mentions mehndi application yet — [ADD CLIENT
  REVIEW] placeholder left, none invented.
- Sitewide: sitemap.xml now 17 URLs (gallery 0.6, bridal mehndi
  0.8; gallery lists all 19 photos as image entries, same set as
  home); image-sitemap.xml now 14 URL blocks / 54 image entries
  (+ gallery block with all 19, + mehndi block with the arch
  photo). QA script updated: expected FAQ total 69 → **97**;
  EXPECTED_TITLES/METAS for the 2 new pages + new reviews
  title/meta; §11 Review-schema rule (above). Header nav + footer
  services/info nav now link both new pages; home links bridal
  mehndi in the Bridal & wedding list and the gallery from the
  "Inside the salon" section. Arch photo's heroPages gained
  "/bridal-mehndi-peshawar/" (sitemap image entry).
- Uniqueness fix rounds: first QA run failed 2 checks — 95 shared
  shingles (mirrored hero/price/ask-first/CallCTA/Quick Facts
  passages between the 4 new pages and facial/home/party/mani-
  pedi) + the Review-schema check itself (author names live in
  blockquote <footer> elements, which the visible-text helper
  strips — the check now reads names from the tag-stripped page).
  Second run: 21 shingles (Quick Facts Prices→Where runs +
  CallCTA tail + RelatedLinks lead). Third run: 2 shingles
  (appointment-step aftercare line + Quick Facts Where→Hours
  run). All passages rewritten distinct per page. Re-run: 0 shared
  shingles, QA 87/0 GREEN.
- Placeholders left (owner questions): bridal mehndi offered +
  designs + duration + guests + booked-with-makeup? [CONFIRM];
  mehndi aftercare details [ADD STYLIST NOTE]; mehndi client
  review [ADD CLIENT REVIEW]; treatment-in-progress photo [ADD
  REAL PHOTO]; photos during visits [CONFIRM]; parking [CONFIRM];
  GBP pin / geo [CONFIRM]; ladies-only hours / Friday prayer
  break / appointment lead time [CONFIRM]; group bookings
  [CONFIRM]. NO prices anywhere (G2 still open).

## Phase 3 — site-wide cleanup + before/after report (2026-11-14)

Full report: `../sansha-beauty-lounge/PHASE3.md`. No body copy
rewritten, no titles/metas changed — links, anchors, and the two
llms files only. QA still **87/0 GREEN**; mobile-check GREEN at
360px (all 17 pages).

- **Linking map:** every page now has ≥2 incoming in-main links
  (was: privacy + terms 0, bridal mehndi 1, cookies 1). New
  contextual links: bridal → bridal mehndi (Mehndi H3), party →
  bridal mehndi (Engagements H3), bridal → laser ("How to
  prepare"), hair salon → gallery (intro), privacy → reviews,
  terms → reviews, contact → privacy (Email section), and a "See
  also" closing line on each legal page cross-linking the other
  two. Total in-main links 149 → **164**. Home remains the hub
  (links all 13 content pages in-body).
- **Anchor diversification (~70 edits):** every repeated anchor
  now 0× — "keratin treatment for frizzy hair" 8×, "Contact the
  salon" 12×, "Customer reviews" 6×, "reviews page" 8× (mehndi
  kept its unique sentence), "Bridal makeup in Peshawar" 8×,
  "Hair salon — cuts, blow-dry & styling" 4×, "Hair colour,
  balayage and dye" 5×, "Facials in Hayatabad" / "Waxing and
  threading in Peshawar" / "Laser hair removal in Hayatabad" /
  "Hair salon in Hayatabad" / "Manicure and pedicure" as labels.
  Mid-paragraph anchors rewritten to fit their sentences;
  RelatedLinks labels unique per page (e.g. "Book your bridal
  makeup" / "Book a facial" / "Book a laser consultation").
  Residual >2× anchors are plain service/policy names only
  ("home" breadcrumbs 16×; "hair colour and balayage",
  "party makeup sitting", "privacy policy", "waxing and
  threading", "hair salon", "facial" at 3× each, once per page).
- **Cannibalisation: CLEAN.** Distinct primary keyword + H1 per
  page; risky pairs checked (keratin vs colour order sections,
  bridal vs party, facial vs laser, bridal mehndi vs bridal
  makeup, hair-salon hub vs keratin/colour) — all complementary
  cross-references, no changes needed. 0 shared shingles.
- **Consistency: CLEAN, one drift fixed.** NAP/phone/WhatsApp/
  email/address/hours/3.9★-92 identical on all 17 pages; 0 Rs/£
  figures; 0 wrong flyer email. **Drift:** `public/llms.txt` +
  `public/llms-full.txt` were stale (page lists ended at
  /reviews/) — both now list gallery + bridal mehndi, and bridal
  mehndi is in both services lists with [CONFIRM] framing.
- **Schema: CLEAN.** BeautySalon identical on all 17 pages (no
  geo G11, no priceRange G2 — correctly absent); Service on the
  10 service pages; FAQPage byte-matching on 14 pages; Review
  schema ONLY on /reviews/ (12 verbatim, no reviewRating); NO
  aggregateRating anywhere; no staff bylines.
- **NEW tension found in Phase 3:** bridal-mehndi meta + Service
  schema say "booked with your bridal makeup" while the body
  says [CONFIRM — mehndi and makeup booked together.] — fourth
  meta/body tension, same handling as trial/dupatta, hair spa,
  facial menu (owner decides; metas untouched).
- **Before/after (audit rubric, same method):** site mean
  **5.2 → 7.8/10** (all pages), content pages **5.5 → 8.2/10**;
  **14 of 17 pages now 7+** (Phase 1: 0). Own-copy words
  6,540 → **29,917**; FAQs 42 → **97**; Quick Facts 0/9 →
  **14/14** content pages; H3s 0 → **61**. Ceiling at 8–8.4 is
  honest: E-E-A-T caps at 7 (no bylines, G3), Local at 7 (no
  area pages, no geo, G10/G11), Semantic at 8–9 (durations,
  aftercare, prices all [CONFIRM], G2). Laser + bridal mehndi
  score E-E-A-T 5 — zero client reviews, honest placeholders.
- **GBP checklist** in PHASE3.md §6 (claim, website, hours,
  services, pin → geo/hasMap follow-up).
- **Deploy (owner-side, unchanged):** Pages deployment still
  returns bare 404 on https-sanshabeautylounge-com.pages.dev;
  repo verified good — check Deployments tab, connected repo
  (lockamithsits, not the empty mrskey repo), preset, build,
  output, branch. Domain still does not resolve (G6).

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
- Bridal mehndi (B11, found in Phase 3): meta + Service schema
  say "booked with your bridal makeup" (body: "[CONFIRM —
  mehndi and makeup booked together.]" — confirm whether
  mehndi + makeup can be booked together).

## Pages (17)

Home `/`, bridal makeup, party makeup, hair salon, keratin treatment,
hair colour & balayage, laser hair removal, facials, waxing &
threading, mani-pedi, bridal mehndi (B11, Phase 2 Batch 4), gallery
(Phase 2 Batch 4), contact, reviews (12 verbatim Google reviews),
privacy-policy, terms, cookies. Titles/metas verbatim from
STRATEGY.md briefs B1–B11 (22/22 verified in the strategy; B11
built in Batch 4); gallery title/meta drafted in Batch 4 (49/151
chars); reviews title/meta improved in Batch 4 (57/152 chars);
contact/legal titles/metas are short-but-clean builder versions
(contact meta 135 chars, legal 95–119).

**HELD (not built):** areas hub + area pages, massage page (G12),
prices/deals page (G2/G13), bridal packages page (G2). B11 bridal
mehndi application BUILT in Phase 2 Batch 4 (G12-gated, [CONFIRM]
framing); gallery BUILT in Batch 4.

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
