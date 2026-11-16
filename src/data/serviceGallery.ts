import type { Photo } from "@/data/photos";

/**
 * Service gallery — 20 owner-supplied service illustrations, shown in
 * the "Our services in pictures" gallery directly below the hero on
 * the home page.
 *
 * These are NOT the salon's real photos: they are pictures the owner
 * supplied showing what each service looks like, so a customer can
 * see the service before booking. They must never be captioned as
 * "our work", "our client" or "our result" — the captions below
 * describe the SERVICE only. The salon's real photos live in
 * `src/data/photos.ts` and are shown in "Our Collections".
 *
 * One of the 21 files the owner sent is a duplicate:
 * pyyosuw5wxcoffmcrtdl.jpg is byte-identical (same md5) to
 * bc2o3swy1xrjrg4yfilw.jpg, so it was processed once and shown once.
 *
 * Processing (same pipeline as the real photos): capped at 800px
 * wide, never upscaled (hair-updo-styling is 395px native and stays
 * 395px), AVIF -> WebP -> JPG, WebP/JPG q78, AVIF crf 32, EXIF
 * stripped. Widths: capped native + 400w (only when capped > 450).
 *
 * One image shows branded tools (a straightener and a styling
 * spray). No brand name from that photo appears anywhere on the
 * site — the image shows the type of tools used, that is all.
 *
 * `href: null` = no page for that service exists yet (massage, body
 * spa) — the card is shown without a link rather than linked to the
 * wrong page.
 */
export interface GalleryItem extends Photo {
  /** Accurate service name for the card heading. */
  service: string;
  /** 1–2 line description of the service (not of the photo). */
  text: string;
  /** Service page to link to, or null when no page exists. */
  href: string | null;
}

export const SERVICE_GALLERY: GalleryItem[] = [
  {
    slug: "bridal-makeup-sansha-hayatabad",
    source: "unnamed-2.jpg",
    nativeW: 735,
    nativeH: 760,
    widths: [400, 735],
    alt: "Bride with full bridal makeup, gold jewellery and red roses in her hair",
    caption: "Bridal makeup with a hairdo.",
    heroPages: ["/"],
    service: "Bridal Makeup",
    text: "Full bridal makeup with a hairdo for barat, walima, nikah, mehndi and engagement.",
    href: "/bridal-makeup-peshawar/",
  },
  {
    slug: "bridal-hair-styling-sansha-hayatabad",
    source: "wwugd39yqkuehskji2do.jpg",
    nativeW: 736,
    nativeH: 1308,
    widths: [400, 736],
    alt: "Long wavy hair with a crystal hairpiece, styled for a wedding",
    caption: "Bridal hairdo with long waves.",
    heroPages: ["/"],
    service: "Bridal Hair Styling",
    text: "Bridal and party hairdos — long waves, twists and pins for the wedding day.",
    href: "/bridal-makeup-peshawar/",
  },
  {
    slug: "balayage-hair-colour-sansha-hayatabad",
    source: "eqjue87oaq6gs2470jny.jpg",
    nativeW: 736,
    nativeH: 1311,
    widths: [400, 736],
    alt: "Long wavy hair with blonde balayage highlights",
    caption: "Blonde balayage on long wavy hair.",
    heroPages: ["/"],
    service: "Balayage & Hair Colour",
    text: "Balayage and highlights for a soft, blended colour.",
    href: "/hair-colour-peshawar/",
  },
  {
    slug: "keratin-treatment-sansha-hayatabad",
    source: "z3by23hhn2vzlrdq0tua.jpg",
    nativeW: 800,
    nativeH: 800,
    widths: [400, 800],
    alt: "Two views of long dark hair — wavy on one side, straight and smooth on the other",
    caption: "Wavy hair, straight and smooth after treatment.",
    heroPages: ["/"],
    service: "Keratin Treatment",
    text: "Keratin treatment for smooth, frizz-free hair.",
    href: "/keratin-treatment-peshawar/",
  },
  {
    slug: "hair-colour-foil-application-sansha-hayatabad",
    source: "bc2o3swy1xrjrg4yfilw.jpg",
    nativeW: 736,
    nativeH: 1349,
    widths: [400, 736],
    alt: "Hair colour being applied with a brush and foil",
    caption: "Colour applied with a brush and foil.",
    heroPages: ["/"],
    service: "Hair Colour",
    text: "Hair colour with foils — dye, streaks and highlights, shade chosen with you.",
    href: "/hair-colour-peshawar/",
  },
  {
    slug: "hair-treatment-application-sansha-hayatabad",
    source: "gbgxmodph3iuia4vnk26.jpg",
    nativeW: 800,
    nativeH: 1000,
    widths: [400, 800],
    alt: "Hair treatment cream being brushed onto long dark hair",
    caption: "Treatment cream brushed onto the hair.",
    heroPages: ["/"],
    service: "Hair Treatment",
    text: "Hair treatments for dry, frizzy hair — keratin and protein, applied section by section.",
    href: "/keratin-treatment-peshawar/",
  },
  {
    slug: "hair-updo-styling-sansha-hayatabad",
    source: "unnamed__1-2.jpg",
    nativeW: 395,
    nativeH: 408,
    widths: [395],
    alt: "Hair styled into a twisted updo",
    caption: "A twisted updo, styled for an event.",
    heroPages: ["/"],
    service: "Hair Styling",
    text: "Updos and styled looks for events, dinners and family functions.",
    href: "/hair-salon-peshawar/",
  },
  {
    slug: "hair-cutting-sansha-hayatabad",
    source: "puttmkioe08d2b9sraps.jpg",
    nativeW: 735,
    nativeH: 980,
    widths: [400, 735],
    alt: "Hair being cut with scissors",
    caption: "A haircut in progress.",
    heroPages: ["/"],
    service: "Hair Cutting",
    text: "Haircuts for every length — a fresh cut, shaped to suit you.",
    href: "/hair-salon-peshawar/",
  },
  {
    slug: "hair-styling-tools-sansha-hayatabad",
    source: "eko5p7r1ebvhwwusj6sl.jpg",
    nativeW: 800,
    nativeH: 1199,
    widths: [400, 800],
    alt: "Hair styling tools — straightener, scissors, comb, hairpins and brush on white silk",
    caption: "The tools of a hair styling sitting.",
    heroPages: ["/"],
    service: "Blow-Dry & Styling",
    text: "Blow-dry and styling with professional tools — smooth, finished hair for the day.",
    href: "/hair-salon-peshawar/",
  },
  {
    slug: "eyebrow-threading-sansha-hayatabad",
    source: "unnamed__3.jpg",
    nativeW: 720,
    nativeH: 720,
    widths: [400, 720],
    alt: "Eyebrow shapes in a grid — three styles of shaped, filled brows",
    caption: "Three shaped-brow styles.",
    heroPages: ["/"],
    service: "Eyebrow Threading",
    text: "Shaped brows by threading — a precise way to tidy and define eyebrows.",
    href: "/waxing-peshawar/",
  },
  {
    slug: "eyebrow-threading-closeup-sansha-hayatabad",
    source: "ebdvkhi0iaasqmxw5qtm.jpg",
    nativeW: 501,
    nativeH: 626,
    widths: [400, 501],
    alt: "Eyebrow threading — thread held against the brow",
    caption: "Threading in progress.",
    heroPages: ["/"],
    service: "Eyebrow Threading",
    text: "Threading for clean, shaped brows — gentle on the skin.",
    href: "/waxing-peshawar/",
  },
  {
    slug: "spa-facial-treatment-sansha-hayatabad",
    source: "vw7yqrqg6nsyhvclqdac.jpg",
    nativeW: 800,
    nativeH: 436,
    widths: [400, 800],
    alt: "Facial treatment with a steamer in a spa room",
    caption: "A facial with a steamer.",
    heroPages: ["/"],
    service: "Facial",
    text: "A spa facial with steam and mask — a calm, relaxing skin treatment.",
    href: "/facial-peshawar/",
  },
  {
    slug: "facial-mask-sansha-hayatabad",
    source: "xx476jvgsfxpuxcorwn8.jpg",
    nativeW: 474,
    nativeH: 842,
    widths: [400, 474],
    alt: "Face mask on skin, side view",
    caption: "A face mask during a facial.",
    heroPages: ["/"],
    service: "Facial",
    text: "Facials with a mask and skin polish — for clean, fresh-looking skin.",
    href: "/facial-peshawar/",
  },
  {
    slug: "facial-mask-towel-sansha-hayatabad",
    source: "rnnomgsomb95z0rnoiol.jpg",
    nativeW: 750,
    nativeH: 1333,
    widths: [400, 750],
    alt: "Woman with a towel on her hair and a face mask",
    caption: "Face mask with a towel wrap.",
    heroPages: ["/"],
    service: "Facial",
    text: "A facial mask, applied and left to work — part of the salon's facial treatments.",
    href: "/facial-peshawar/",
  },
  {
    slug: "leg-waxing-sansha-hayatabad",
    source: "unnamed__2.jpg",
    nativeW: 800,
    nativeH: 800,
    widths: [400, 800],
    alt: "Waxing strip being pulled from a leg during a leg wax",
    caption: "A leg wax in progress.",
    heroPages: ["/"],
    service: "Waxing",
    text: "Waxing for smooth skin on arms, legs, face and underarms.",
    href: "/waxing-peshawar/",
  },
  {
    slug: "honey-wax-leg-sansha-hayatabad",
    source: "bwwimvz2xdubkenadh3i.jpg",
    nativeW: 800,
    nativeH: 800,
    widths: [400, 800],
    alt: "Honey wax being spread on a leg",
    caption: "Honey wax spread on the leg.",
    heroPages: ["/"],
    service: "Waxing",
    text: "Honey wax for legs and arms — for smooth skin.",
    href: "/waxing-peshawar/",
  },
  {
    slug: "pedicure-sansha-hayatabad",
    source: "o5vmjl0oijhnrfzhfgrn.jpg",
    nativeW: 800,
    nativeH: 800,
    widths: [400, 800],
    alt: "Cream being massaged onto feet during a pedicure",
    caption: "Cream massaged onto the feet.",
    heroPages: ["/"],
    service: "Pedicure",
    text: "Pedicure with cream and care — clean, shaped nails and soft feet.",
    href: "/mani-pedi-peshawar/",
  },
  {
    slug: "manicure-sansha-hayatabad",
    source: "rhqixxclsprcbuuqbu2i.jpg",
    nativeW: 660,
    nativeH: 881,
    widths: [400, 660],
    alt: "Cuticles being trimmed during a manicure",
    caption: "Cuticle care during a manicure.",
    heroPages: ["/"],
    service: "Manicure",
    text: "Manicure with cuticle care and polish — neat, cared-for hands.",
    href: "/mani-pedi-peshawar/",
  },
  {
    slug: "back-massage-sansha-hayatabad",
    source: "mgct0bdkj2vygffvxgh3.jpg",
    nativeW: 736,
    nativeH: 981,
    widths: [400, 736],
    alt: "Back massage on a treatment bed",
    caption: "A back massage on the treatment bed.",
    heroPages: ["/"],
    service: "Massage",
    text: "A relaxing back massage to ease tired muscles and unwind.",
    href: null,
  },
  {
    slug: "body-scrub-spa-sansha-hayatabad",
    source: "rjjslwqdrxeczmfibwyb.jpg",
    nativeW: 450,
    nativeH: 675,
    widths: [450],
    alt: "Body scrub being massaged onto the back",
    caption: "A body scrub massaged onto the back.",
    heroPages: ["/"],
    service: "Body Spa",
    text: "A body scrub and massage for soft, refreshed skin.",
    href: null,
  },
];
