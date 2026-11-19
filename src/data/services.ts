/**
 * The 18 confirmed services — the owner's list, 2026-11-16,
 * minus two removed 2026-11-18 at the owner's request.
 *
 * SINGLE SOURCE OF TRUTH for the service links in the header menu
 * (Services dropdown + mobile accordion) and the footer Services
 * column, so the two never drift apart.
 *
 * 17 service pages exist. Each service links to its own page
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
  { label: "Nails", href: "/nails-peshawar/", closestPage: false },
  { label: "Lashes", href: "/lashes-peshawar/", closestPage: false },
  { label: "Tinting", href: "/tinting-peshawar/", closestPage: false },
  { label: "Haircut & Styling", href: "/hair-salon-peshawar/", closestPage: false },
  { label: "Hair Treatment", href: "/keratin-treatment-peshawar/", closestPage: false },
  { label: "Hair Colour", href: "/hair-colour-peshawar/", closestPage: false },
  { label: "Makeup", href: "/party-makeup-peshawar/", closestPage: false },
  { label: "Face Laser", href: "/laser-hair-removal-peshawar/", closestPage: false },
  { label: "Body Laser", href: "/laser-hair-removal-peshawar/", closestPage: false },
  { label: "Piercing", href: "/piercing-peshawar/", closestPage: false },
  { label: "Mehndi", href: "/bridal-mehndi-peshawar/", closestPage: false },
  { label: "Tag/Wart Removal", href: "/tag-wart-removal-peshawar/", closestPage: false },
];
