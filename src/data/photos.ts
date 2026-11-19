/**
 * Photo registry — 33 real photos.
 *
 * Batch 1 (2026-11-14): the 19 salon photos the owner supplied —
 * rooms, reception, signboard, entrance. No client faces in focus.
 *
 * Batch 3 (2026-11-19): 14 work photos the owner supplied — bridal
 * looks, hair colour, curls and mehndi, taken at the salon. These DO
 * show real clients, faces in focus. Captions describe ONLY what is
 * visible — never a specific job, service, or "we did this" claim,
 * and no client is named. Held, NOT in this registry: 4 maroon-velvet
 * bridal shots with a faint "IDEAL" studio watermark across the
 * middle — see images-batch3-held/README.md.
 *
 * Processing (see images-manifest.md in ~/workspace/sansha-beauty-lounge):
 * each source was re-encoded (new bytes, EXIF stripped) into
 * AVIF -> WebP -> JPG at widths capped at the native width — never
 * upscaled. Batch 3 AVIF: ffmpeg libaom-av1 crf 30 still-picture.
 * One batch-3 source (red bridal) was a phone screenshot with black
 * letterbox bars top/bottom — the bars were cropped before resize;
 * no content was cropped.
 *
 * og:image: there is ONE og:image (the haircut photo, 330x220 — see
 * OG_IMAGE below). EVERY page uses it as its og:image and
 * twitter:image. No per-page og images exist for this build.
 *
 * heroPages: routes that show this photo (the sitemap lists each photo
 * as an <image:image> entry on those routes; home lists the 14 work
 * photos, the gallery lists all 33).
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

/** The og:image for every page — the owner's pick (2026-11-18). */
export const OG_IMAGE = {
  url: "/images/haircut-short-style-sansha-hayatabad-330.jpg",
  width: 330,
  height: 220,
  alt: "Woman with a fresh short haircut, styled with a side fringe",
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
    heroPages: ["/bridal-mehndi-peshawar/"],
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
    heroPages: ["/", "/contact/"],
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
    heroPages: ["/", "/contact/"],
  },
  {
    slug: "bridal-makeup-hairdo-sansha-hayatabad",
    source: "51165072_280504919284916_8617942687917539328_n.jpg",
    nativeW: 680,
    nativeH: 907,
    widths: [400, 680],
    alt: "Bridal hairdo with gold jewellery at SanSha A Beauty Lounge, Hayatabad, Peshawar",
    caption: "Hair pinned up with gold jewellery for a wedding.",
    heroPages: ["/", "/gallery/", "/bridal-makeup-peshawar/"],
  },
  {
    slug: "bridal-makeup-nath-sansha-hayatabad",
    source: "64620733_337660263569381_9092257001819340800_n.jpg",
    nativeW: 680,
    nativeH: 907,
    widths: [400, 680],
    alt: "Bridal makeup with nose ring and gold jewellery at SanSha A Beauty Lounge, Peshawar",
    caption: "Bridal makeup with a nose ring and gold jewellery.",
    heroPages: ["/", "/gallery/", "/bridal-makeup-peshawar/"],
  },
  {
    slug: "bridal-makeup-green-lehenga-sansha-hayatabad",
    source: "134940213_671995230135881_6741789412396808461_n.jpg",
    nativeW: 680,
    nativeH: 907,
    widths: [400, 680],
    alt: "Bride in a light green lehenga with henna at SanSha A Beauty Lounge, Hayatabad",
    caption: "A bride in a light green lehenga with henna on her hands.",
    heroPages: ["/", "/gallery/", "/bridal-makeup-peshawar/"],
  },
  {
    slug: "bridal-makeup-red-sansha-hayatabad",
    source: "135526358_671992963469441_4910266904128014848_n.jpg",
    nativeW: 561,
    nativeH: 988,
    widths: [400, 561],
    alt: "Bride in red with gold jewellery at SanSha A Beauty Lounge, Peshawar",
    caption: "A bride in red with gold jewellery, seated at the salon.",
    heroPages: ["/", "/gallery/", "/bridal-makeup-peshawar/"],
  },
  {
    slug: "bridal-makeup-maroon-velvet-sansha-hayatabad",
    source: "481919600_1200127152120177_1696014114613177830_n.jpg",
    nativeW: 680,
    nativeH: 680,
    widths: [400, 680],
    alt: "Bride in a maroon velvet dress with gold jewellery at SanSha A Beauty Lounge",
    caption: "A bride in a maroon velvet dress with gold jewellery.",
    heroPages: ["/", "/gallery/", "/bridal-makeup-peshawar/"],
  },
  {
    slug: "party-makeup-purple-saree-sansha-hayatabad",
    source: "487434577_1220682856731273_6979786727521352520_n.jpg",
    nativeW: 680,
    nativeH: 680,
    widths: [400, 680],
    alt: "Party makeup with a purple saree at SanSha A Beauty Lounge, Hayatabad, Peshawar",
    caption: "A party look in a purple saree by a carved wooden door.",
    heroPages: ["/", "/gallery/", "/party-makeup-peshawar/"],
  },
  {
    slug: "party-makeup-purple-saree-door-sansha-hayatabad",
    source: "487857537_1220683093397916_31451380440893700_n.jpg",
    nativeW: 680,
    nativeH: 680,
    widths: [400, 680],
    alt: "Party makeup look in a purple saree at SanSha A Beauty Lounge, Peshawar",
    caption: "A party look in a purple saree, head bowed.",
    heroPages: ["/", "/gallery/", "/party-makeup-peshawar/"],
  },
  {
    slug: "bridal-mehndi-hands-sansha-hayatabad",
    source: "468041953_1464584050876991_2123355253180851819_n.jpg",
    nativeW: 680,
    nativeH: 907,
    widths: [400, 680],
    alt: "Bridal henna on both hands at SanSha A Beauty Lounge, Hayatabad, Peshawar",
    caption: "Henna on both hands, with floral patterns.",
    heroPages: ["/", "/gallery/", "/bridal-mehndi-peshawar/"],
  },
  {
    slug: "bridal-mehndi-feet-sansha-hayatabad",
    source: "468006966_1464583777543685_6111089969507297380_n.jpg",
    nativeW: 680,
    nativeH: 510,
    widths: [400, 680],
    alt: "Bridal henna on feet at SanSha A Beauty Lounge, Hayatabad, Peshawar",
    caption: "Henna on both feet.",
    heroPages: ["/", "/gallery/", "/bridal-mehndi-peshawar/"],
  },
  {
    slug: "hair-colour-red-sansha-hayatabad",
    source: "49742698_273270646675010_1894088329951969280_n.jpg",
    nativeW: 680,
    nativeH: 907,
    widths: [400, 680],
    alt: "Long red hair colour at SanSha A Beauty Lounge, Hayatabad, Peshawar",
    caption: "Long hair coloured red, styled with soft waves.",
    heroPages: ["/", "/gallery/", "/hair-colour-peshawar/"],
  },
  {
    slug: "hair-colour-highlights-sansha-hayatabad",
    source: "139523051_679287072740030_3617799765126920338_n.jpg",
    nativeW: 680,
    nativeH: 907,
    widths: [400, 680],
    alt: "Hair highlights with a smooth blow-dry at SanSha A Beauty Lounge, Peshawar",
    caption: "Long hair with highlights, blow-dried smooth.",
    heroPages: ["/", "/gallery/", "/hair-colour-peshawar/"],
  },
  {
    slug: "hair-curls-blowdry-sansha-hayatabad",
    source: "49035949_267867327215342_4608613922809839616_n.jpg",
    nativeW: 508,
    nativeH: 960,
    widths: [400, 508],
    alt: "Long curled hair at SanSha A Beauty Lounge, Hayatabad, Peshawar",
    caption: "Long hair curled, seen from behind.",
    heroPages: ["/", "/gallery/", "/hair-salon-peshawar/"],
  },
  {
    slug: "haircut-short-bob-sansha-hayatabad",
    source: "66496270_348583095810431_7477220535403806720_n.jpg",
    nativeW: 538,
    nativeH: 960,
    widths: [400, 538],
    alt: "Short bob haircut with a side fringe at SanSha A Beauty Lounge, Peshawar",
    caption: "A short bob haircut with a side fringe.",
    heroPages: ["/", "/gallery/", "/hair-salon-peshawar/"],
  },
  {
    slug: "hair-blowdry-smooth-sansha-hayatabad",
    source: "132564781_668270610508343_8513266350657238459_n.jpg",
    nativeW: 680,
    nativeH: 907,
    widths: [400, 680],
    alt: "Long hair blow-dried smooth at SanSha A Beauty Lounge, Hayatabad, Peshawar",
    caption: "Long hair blow-dried with soft waves.",
    heroPages: ["/", "/gallery/", "/hair-salon-peshawar/"],
  },
];
