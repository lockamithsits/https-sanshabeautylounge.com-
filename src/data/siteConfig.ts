/**
 * Single source of truth for every business fact on the site.
 *
 * HARD RULE: never invent a fact. Anything unknown stays a visible
 * [CONFIRM] flag here and in BUILD-BRIEF.md — never a made-up number,
 * price, rating, address or claim. When the owner supplies a fact,
 * change it here and it flows to every page, link and schema.
 *
 * Locked facts (owner-confirmed 2026-11-14): domain (apex canonical),
 * brand "SanSha A Beauty Lounge", address Shop No. 4, Block A,
 * Deans Hights, Phase 2, Hayatabad, Peshawar 25124, call
 * 091-5839119, WhatsApp +92 313 9333377, CTA call + WhatsApp both.
 * Google rating 3.9★ / 92 reviews (visible text only — NO
 * aggregateRating / Review schema anywhere).
 *
 * OWNER-CONFIRMED 2026-11-14 (G1 hours, G4 email, G5 spelling —
 * all closed):
 * - Hours: Open 24 hours, 7 days a week (G1 closed; owner's word
 *   supersedes the conflicting Weddme / Peekaboo / Google Maps hours).
 * - Address spelling "Deans Hights" — RESOLVED 2026-11-14 (G5 closed:
 *   owner pasted the Google listing: "Deans Hights, Phase-2 Phase 2
 *   Hayatabad, Peshawar, 25124"). NAP matches the Google profile; the
 *   listing's duplicated "Phase-2 Phase 2" is collapsed to one "Phase 2".
 * - Email sansha.lounge@gmail.com — RESOLVED 2026-11-14 (G4 closed).
 * - GSC + GTM: SUPPLIED 2026-11-14 (G9 filled) — GSC meta
 *   EcG3z_LiiugVp7Pq_E_8TK0lFiGBICYvk-e5kDGkXPI + file
 *   public/googleb7d79ba7b0fa42b4.html (both baked); GTM-TNQJ5FLL
 *   installed in the root layout. No GA4 ID hardcoded.
 */
export const SITE = {
  /** Display name used in the header logo and page titles. */
  name: "SanSha A Beauty Lounge",
  /** Confirmed brand name (owner, 2026-11-14 — Google listing name, G5 closed). */
  fullName: "SanSha A Beauty Lounge",
  tagline: "Your Beauty, Your Canvas",
  domain: "sanshabeautylounge.com",
  url: "https://sanshabeautylounge.com",
  /** Canonical host: apex. www→apex is via Cloudflare Bulk Redirects
   *  (owner-side) — never via absolute-URL rules in _redirects. */
  canonicalHost: "apex",

  // Contact — call + WhatsApp confirmed by the owner 2026-11-14.
  phoneDisplay: "091-5839119",
  phoneHref: "tel:+92915839119",
  whatsappDisplay: "0313 9333377",
  whatsappHref: "https://wa.me/923139333377",
  /** Email — confirmed by the owner 2026-11-14 (G4 closed). */
  email: "sansha.lounge@gmail.com",
  emailHref: "mailto:sansha.lounge@gmail.com",

  /** Opening hours — Open 24 hours, 7 days a week.
   *  Owner-confirmed 2026-11-14 (G1 closed; supersedes the
   *  conflicting directory hours). */
  hours: "Open 24 hours",
  hoursLong: "Open 24 hours, 7 days a week",
  hoursTable: [
    { day: "Monday", hours: "Open 24 hours" },
    { day: "Tuesday", hours: "Open 24 hours" },
    { day: "Wednesday", hours: "Open 24 hours" },
    { day: "Thursday", hours: "Open 24 hours" },
    { day: "Friday", hours: "Open 24 hours" },
    { day: "Saturday", hours: "Open 24 hours" },
    { day: "Sunday", hours: "Open 24 hours" },
  ] as const,

  /** Walk-in salon (clients come to the salon) — never claim home
   *  service, men's/barber service, or courses. */
  businessModel: "walk-in",
  streetAddress: "Shop No. 4, Block A, Deans Hights, Phase 2",
  addressLocality: "Hayatabad",
  addressRegion: "Peshawar",
  postalCode: "25124",
  addressCountry: "PK",
  city: "Peshawar",
  region: "Hayatabad",
  country: "Pakistan",
  areaServed: ["Hayatabad", "Peshawar, Pakistan"],

  /** Google rating — honest figure, visible text only. */
  ratingValue: "3.9",
  reviewCount: "92",

  /** Socials — verified 2026-11-14 (sameAs set). */
  instagram: "https://www.instagram.com/sanshaabeautylounge",
  instagramFollowers: "2.9K",
  facebook: "https://www.facebook.com/SanshaAbeautylounge",
  facebookFollowers: "3,297",
  tiktok: "https://www.tiktok.com/@sanshaabeautylounge",
  tiktokFollowers: "920",
  /** Google Maps — search link (no GBP share URL supplied yet; the
   *  profile is unclaimed — G10. Replace with the GBP share URL
   *  once the owner claims it). */
  googleMaps:
    "https://www.google.com/maps/search/SanSha+A+Beauty+Lounge+Hayatabad+Peshawar",

  /** Real content date — drives sitemap lastmod. */
  lastUpdated: "2026-11-14",

  /** Search-console verification (owner-supplied 2026-11-14, both ways:
   *  meta tag + public/googleb7d79ba7b0fa42b4.html). */
  gscMetaTag: "EcG3z_LiiugVp7Pq_E_8TK0lFiGBICYvk-e5kDGkXPI",
  /** GTM container — owner-supplied 2026-11-14. No GA4 ID hardcoded;
   *  GA4 config + tags are GTM-console work, NOT in code. */
  gtmId: "GTM-TNQJ5FLL",
} as const;

export type SiteConfig = typeof SITE;
