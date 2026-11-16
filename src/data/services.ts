/**
 * The 20 confirmed services — the owner's list, 2026-11-16.
 *
 * SINGLE SOURCE OF TRUTH for the service links in the header menu
 * (Services dropdown + mobile accordion) and the footer Services
 * column, so the two never drift apart.
 *
 * Only 12 service pages exist. Each service links to its own page
 * where one exists; the other 7 link to the CLOSEST existing page
 * (marked below) — never to a page that does not exist. Those 7
 * need dedicated pages if the owner wants them; this file only
 * links, it never invents a page.
 *
 * The home service gallery (src/data/serviceGallery.ts) does NOT
 * use this list: its cards have their own granular names and a
 * stricter rule — `href: null` (no link) rather than a closest-page
 * link. Keep the two policies separate.
 */
export interface ServiceNavLink {
  /** Service name exactly as the owner listed it. */
  label: string;
  /** Target page (always an existing route). */
  href: string;
  /** True when the link goes to the closest existing page because
   *  the service has no page of its own yet. */
  closestPage: boolean;
}

export const SERVICE_NAV_LINKS: ServiceNavLink[] = [
  { label: "Threading", href: "/waxing-peshawar/", closestPage: false },
  { label: "Waxing", href: "/waxing-peshawar/", closestPage: false },
  { label: "Facial", href: "/facial-peshawar/", closestPage: false },
  { label: "Massage", href: "/massage-peshawar/", closestPage: false },
  { label: "Manicure", href: "/mani-pedi-peshawar/", closestPage: false },
  { label: "Pedicure", href: "/mani-pedi-peshawar/", closestPage: false },
  // Nails has no page of its own — nails are part of mani-pedi.
  { label: "Nails", href: "/mani-pedi-peshawar/", closestPage: true },
  // Lashes has no page of its own — lashes are a makeup service.
  { label: "Lashes", href: "/party-makeup-peshawar/", closestPage: true },
  // Tinting has no page of its own — brow/lash tinting is a face treatment.
  { label: "Tinting", href: "/facial-peshawar/", closestPage: true },
  // Hijama Cupping has no page of its own — cupping is a body therapy.
  { label: "Hijama Cupping", href: "/body-spa-peshawar/", closestPage: true },
  { label: "Haircut & Styling", href: "/hair-salon-peshawar/", closestPage: false },
  { label: "Hair Treatment", href: "/keratin-treatment-peshawar/", closestPage: false },
  { label: "Hair Colour", href: "/hair-colour-peshawar/", closestPage: false },
  { label: "Makeup", href: "/party-makeup-peshawar/", closestPage: false },
  // Electrolysis has no page of its own — hair-removal family.
  { label: "Electrolysis", href: "/laser-hair-removal-peshawar/", closestPage: true },
  { label: "Face Laser", href: "/laser-hair-removal-peshawar/", closestPage: false },
  { label: "Body Laser", href: "/laser-hair-removal-peshawar/", closestPage: false },
  // Piercing has no page of its own. The home service gallery has no
  // anchor id, so the card cannot be deep-linked — link to Contact
  // (ask on call or WhatsApp) instead of inventing a page.
  { label: "Piercing", href: "/contact/", closestPage: true },
  { label: "Mehndi", href: "/bridal-mehndi-peshawar/", closestPage: false },
  // Tag/Wart Removal has no page of its own — a skin treatment.
  { label: "Tag/Wart Removal", href: "/facial-peshawar/", closestPage: true },
];
