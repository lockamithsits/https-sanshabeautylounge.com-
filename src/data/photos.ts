/**
 * Photo registry — the 19 real salon photos the owner supplied 2026-11-14.
 *
 * Every photo was viewed and identified by what is visibly in it.
 * Captions describe ONLY what is visible — never a specific job,
 * service, or "we did this" claim. Photos showing the 2019
 * 1st-anniversary 50%-off banner are photos OF the salon — the 2019
 * offer is NOT current and is never captioned or priced as a live deal.
 *
 * Processing (see images-manifest.md in ~/workspace/sansha-beauty-lounge):
 * each source was re-encoded (new bytes, EXIF stripped) into
 * AVIF -> WebP -> JPG at widths capped at the native width — never
 * upscaled.
 *
 * og:image: there is ONE og canvas (og-sansha-beauty-lounge-hayatabad-
 * peshawar.jpg, 1200x630, hero photo at native size on a near-black
 * canvas, never stretched). EVERY page uses it as its og:image — see
 * OG_IMAGE below. No per-photo og canvases exist for this build.
 *
 * heroPages: routes that show this photo (the sitemap lists each photo
 * as an <image:image> entry on those routes; home lists all 19).
 */

export interface Photo {
  /** SEO slug; file base name, e.g. sansha-beauty-lounge-hair-wash-area-400.avif */
  slug: string;
  /** Original upload this was processed from (for audit only). */
  source: string;
  nativeW: number;
  nativeH: number;
  /** Widths generated (never above nativeW). */
  widths: number[];
  alt: string;
  caption: string;
  /** Routes that show this photo. */
  heroPages: string[];
}

/** The single og:image canvas (1200x630), used by every page. */
export const OG_IMAGE = {
  url: "/images/og-sansha-beauty-lounge-hayatabad-peshawar.jpg",
  width: 1200,
  height: 630,
  alt: "SanSha A Beauty Lounge entrance with a flower-decorated arch at night, Hayatabad, Peshawar",
} as const;

export const PHOTOS: Photo[] = [
  {
    slug: "sansha-beauty-lounge-reception-shelves-hayatabad",
    source: "unnamed__78.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "Product shelves and TV in the reception of SanSha A Beauty Lounge, Hayatabad, Peshawar",
    caption: "Reception shelves stocked with salon products.",
    heroPages: [],
  },
  {
    slug: "sansha-beauty-lounge-salon-sign-hayatabad-peshawar",
    source: "unnamed__77.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "SanSha A Beauty Lounge signboard outside the salon in Hayatabad, Peshawar",
    caption: "The salon signboard outside in Hayatabad.",
    heroPages: [],
  },
  {
    slug: "sansha-beauty-lounge-hair-colour-products",
    source: "unnamed__76.webp",
    nativeW: 680,
    nativeH: 453,
    widths: [400, 680],
    alt: "Professional hair colour and treatment products on a shelf at SanSha A Beauty Lounge",
    caption: "Professional hair colour products used at the salon.",
    heroPages: ["/hair-colour-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-facial-room-hayatabad",
    source: "unnamed__75.webp",
    nativeW: 394,
    nativeH: 510,
    widths: [394],
    alt: "Facial treatment room with a treatment bed at SanSha A Beauty Lounge",
    caption: "Private facial treatment room.",
    heroPages: ["/facial-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-entrance-floral-arch-night",
    source: "unnamed__74.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "Flower-decorated entrance arch with fairy lights at SanSha A Beauty Lounge at night",
    caption: "The flower-decorated entrance at night.",
    heroPages: ["/"],
  },
  {
    slug: "sansha-beauty-lounge-hair-salon-chairs-peshawar",
    source: "unnamed__73.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "Hair styling chairs and mirrors inside SanSha A Beauty Lounge, Peshawar",
    caption: "Hair styling area with chairs and mirrors.",
    heroPages: ["/hair-salon-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-hair-salon-interior",
    source: "unnamed__72.webp",
    nativeW: 680,
    nativeH: 453,
    widths: [400, 680],
    alt: "Hair salon floor with styling chairs at SanSha A Beauty Lounge",
    caption: "The hair salon floor.",
    heroPages: ["/mani-pedi-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-hair-wash-area",
    source: "unnamed__71.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "Hair wash basins and chairs at SanSha A Beauty Lounge",
    caption: "Hair wash area.",
    heroPages: ["/hair-salon-peshawar/", "/keratin-treatment-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-building-exterior-hayatabad",
    source: "unnamed__70.webp",
    nativeW: 561,
    nativeH: 510,
    widths: [400, 561],
    alt: "SanSha A Beauty Lounge building exterior in Hayatabad, Peshawar",
    caption: "The salon building in Hayatabad, Phase 2.",
    heroPages: ["/contact/"],
  },
  {
    slug: "sansha-beauty-lounge-entrance-arch-night",
    source: "unnamed__69.webp",
    nativeW: 382,
    nativeH: 510,
    widths: [382],
    alt: "Flower arch entrance of SanSha A Beauty Lounge at night",
    caption: "Entrance arch at night.",
    heroPages: [],
  },
  {
    slug: "sansha-beauty-lounge-floral-entrance-night",
    source: "unnamed__68.webp",
    nativeW: 382,
    nativeH: 510,
    widths: [382],
    alt: "Close-up of the flower-decorated entrance arch at SanSha A Beauty Lounge",
    caption: "Flower arch detail at the entrance.",
    heroPages: ["/party-makeup-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-reception-desk-peshawar",
    source: "unnamed__67.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "Reception desk and waiting area at SanSha A Beauty Lounge, Peshawar",
    caption: "Reception and waiting area.",
    heroPages: ["/reviews/"],
  },
  {
    slug: "sansha-beauty-lounge-salon-entrance-night",
    source: "unnamed__66.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "SanSha A Beauty Lounge entrance at night with a Now Open board",
    caption: "The salon entrance at night.",
    heroPages: [],
  },
  {
    slug: "sansha-beauty-lounge-laser-hair-removal-room",
    source: "unnamed__65.webp",
    nativeW: 680,
    nativeH: 453,
    widths: [400, 680],
    alt: "Laser hair removal treatment room with laser machine at SanSha A Beauty Lounge",
    caption: "Laser hair and skin treatment room.",
    heroPages: ["/laser-hair-removal-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-facial-treatment-room",
    source: "unnamed__64.webp",
    nativeW: 396,
    nativeH: 510,
    widths: [396],
    alt: "Facial treatment bed and sink in a private room at SanSha A Beauty Lounge",
    caption: "Private facial room.",
    heroPages: ["/facial-peshawar/", "/waxing-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-hair-styling-chairs",
    source: "unnamed__63.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "Hair styling chairs and mirrors with a poster on the wall at SanSha A Beauty Lounge",
    caption: "Hair styling chairs.",
    heroPages: ["/hair-salon-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-salon-signboard-hayatabad",
    source: "unnamed__62.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "SanSha A Beauty Lounge signboard and welcome banner in Hayatabad",
    caption: "Signboard outside the salon.",
    heroPages: [],
  },
  {
    slug: "sansha-beauty-lounge-flower-arch-entrance-night",
    source: "unnamed__61.webp",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "Flower arch and fairy lights at the entrance of SanSha A Beauty Lounge at night",
    caption: "Entrance dressed with flowers and lights.",
    heroPages: ["/bridal-makeup-peshawar/"],
  },
  {
    slug: "sansha-beauty-lounge-logo-sign-hayatabad",
    source: "unnamed__60.webp",
    nativeW: 680,
    nativeH: 364,
    widths: [400, 680],
    alt: "SanSha A Beauty Lounge sign on the salon building",
    caption: "The SanSha sign on the building.",
    heroPages: ["/contact/"],
  },
];
