import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
import { REVIEWS } from "@/data/reviews";
import { SERVICE_GALLERY, SERVICE_TEXT_CARDS } from "@/data/serviceGallery";
import JsonLd from "@/components/JsonLd";
import FAQSection from "@/components/FAQ";
import CallCTA from "@/components/CallCTA";
import Photo from "@/components/Photo";
import { breadcrumbJsonLd, faqJsonLd, imageObjectJsonLd } from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Beauty Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "SanSha A Beauty Lounge in Hayatabad, Peshawar — bridal & party makeup, hair, keratin, facials, waxing and laser. Call 091-5839119 or WhatsApp 0313 9333377.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Beauty Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "SanSha A Beauty Lounge in Hayatabad, Peshawar — bridal & party makeup, hair, keratin, facials, waxing and laser. Call 091-5839119 or WhatsApp 0313 9333377.",
    url: SITE.url,
    siteName: SITE.fullName,
    locale: "en",
    type: "website",
    images: [
      {
        url: `${SITE.url}${OG_IMAGE.url}`,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "SanSha A Beauty Lounge in Hayatabad, Peshawar — bridal & party makeup, hair, keratin, facials, waxing and laser. Call 091-5839119 or WhatsApp 0313 9333377.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Where is SanSha A Beauty Lounge?",
    answer:
      "SanSha A Beauty Lounge is at Shop No. 4, Block A, Deans Hights, Phase 2, Hayatabad, Peshawar 25124, Pakistan. The salon is in Phase 2 of Hayatabad, close to the main Phase 2 market. Call 091-5839119 or message on WhatsApp if you need directions before you come.",
  },
  {
    question: "Do I need an appointment or can I walk in?",
    answer:
      "You can walk in — the salon is a walk-in salon at Shop No. 4, Block A, Deans Hights, Phase 2, Hayatabad. For bridal makeup or a longer treatment, a call or a WhatsApp message first keeps a time for you, so you do not have to wait.",
  },
  {
    question: "How do I book — call or WhatsApp?",
    answer:
      "Both. Call 091-5839119 to book, or send the salon a WhatsApp message at 0313 9333377 with your service and the day you want to come. The salon will confirm your slot. For bridal makeup, WhatsApp is the easiest way to book, because you can share your event date and function in one message.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Bridal and party makeup, haircuts, blow-dry, hair wash and styling, keratin and protein treatments, hair colour, balayage, dye and streaks, laser hair removal, facials, waxing and threading, and manicure and pedicure. Every service is done at the salon in Phase 2, Hayatabad — call or WhatsApp for today's price.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "SanSha A Beauty Lounge is open 24 hours, 7 days a week — you can walk in at any hour, or call 091-5839119 or WhatsApp 0313 9333377 first to keep a time. For bridal makeup or a longer treatment, booking ahead is the safer choice so you do not have to wait.",
  },
  {
    question: "Can I book more than one service in one visit?",
    answer:
      "Yes — message the salon on WhatsApp at 0313 9333377 with the services you want and the day you plan to come, and it will arrange them in one visit where possible. For a bridal booking with hair and makeup, or a longer visit, booking ahead keeps your whole slot together.",
  },
];

const photo = (slug: string) =>
  PHOTOS.find((p) => p.slug === slug) ??
  SERVICE_GALLERY.find((g) => g.slug === slug)!;
const HERO = photo("sansha-beauty-lounge-entrance-floral-arch-night");

/**
 * Service cards (Queens-reference pattern: one image + category +
 * the specific services under it, each card linking to its page).
 *
 * `photo` is the registry photo that shows that type of work — the
 * room or the products for it. The bridal / party / mehndi cards
 * use the flower-arch entrance photos: those are the bridal, party
 * and mehndi pages' own hero photos, showing the salon dressed for
 * the occasion. The service gallery below the hero (owner-supplied
 * illustrations, src/data/serviceGallery.ts) does show makeup and
 * treatments in progress — those are pictures of the service, not
 * of this salon's work.
 * `photo: null` = no matching photo exists — the card is shown
 * without an image rather than with a wrong one. The mani-pedi
 * card now uses the pedicure illustration from the service
 * gallery, which filled the earlier gap.
 *
 * `options` lists only services already stated on the site.
 */
const SERVICES = [
  {
    href: "/bridal-makeup-peshawar/",
    label: "Bridal Makeup",
    anchor: "bridal makeup for barat and walima",
    text: "Makeup with hairdo for barat, walima, nikah, mehndi and engagement.",
    photo: "sansha-beauty-lounge-flower-arch-entrance-night",
    options: ["Barat", "Walima", "Nikah", "Mehndi", "Engagement"],
  },
  {
    href: "/party-makeup-peshawar/",
    label: "Party Makeup",
    anchor: "party makeup with hairdo",
    text: "Lighter looks for engagements, dinners and family events.",
    photo: "sansha-beauty-lounge-floral-entrance-night",
    options: ["Engagements", "Dinners", "Family events"],
  },
  {
    href: "/bridal-mehndi-peshawar/",
    label: "Bridal Mehndi",
    anchor: "bridal mehndi in Hayatabad",
    text: "Henna for the bride and her guests, for the mehndi function.",
    photo: "sansha-beauty-lounge-entrance-floral-arch-night",
    options: ["Bridal mehndi", "Mehndi for guests"],
  },
  {
    href: "/hair-salon-peshawar/",
    label: "Hair Salon",
    anchor: "haircuts and blow-dry in Hayatabad",
    text: "Haircuts, blow-dry, hair wash and styling for events.",
    photo: "sansha-beauty-lounge-hair-salon-chairs-peshawar",
    options: ["Haircuts", "Blow-dry", "Hair wash", "Styling"],
  },
  {
    href: "/keratin-treatment-peshawar/",
    label: "Keratin Treatment",
    anchor: "keratin treatment for smooth hair",
    text: "Keratin and protein treatments for smooth, frizz-free hair.",
    photo: "sansha-beauty-lounge-hair-wash-area",
    options: ["Keratin treatment", "Protein treatment"],
  },
  {
    href: "/hair-colour-peshawar/",
    label: "Hair Colour & Balayage",
    anchor: "hair colour, balayage and dye",
    text: "Hair dye, balayage, streaks and highlights — choose your shade first.",
    photo: "sansha-beauty-lounge-hair-colour-products",
    options: ["Hair dye", "Balayage", "Streaks", "Highlights"],
  },
  {
    href: "/laser-hair-removal-peshawar/",
    label: "Laser Hair Removal",
    anchor: "laser hair removal in Hayatabad",
    text: "Laser hair removal for face, arms, legs and full body.",
    photo: "sansha-beauty-lounge-laser-hair-removal-room",
    options: ["Face", "Arms", "Legs", "Full body"],
  },
  {
    href: "/facial-peshawar/",
    label: "Facials",
    anchor: "facials in Hayatabad",
    text: "Whitening, organic and derma facials with skin polish.",
    photo: "sansha-beauty-lounge-facial-room-hayatabad",
    options: ["Whitening", "Organic", "Derma facials", "Skin polish"],
  },
  {
    href: "/waxing-peshawar/",
    label: "Waxing & Threading",
    anchor: "waxing and threading",
    text: "Waxing for arms, legs, face and underarms, plus threading.",
    photo: "sansha-beauty-lounge-facial-treatment-room",
    options: ["Arms", "Legs", "Face", "Underarms", "Threading"],
  },
  {
    href: "/mani-pedi-peshawar/",
    label: "Manicure & Pedicure",
    anchor: "manicure and pedicure",
    text: "Whitening mani-pedi with polish and nail care.",
    photo: "pedicure-sansha-hayatabad",
    options: ["Whitening mani-pedi", "Polish", "Nail care"],
  },
];

const HOME_REVIEWS = REVIEWS;

/** Our Collections: all 19 real photos, each tagged with the service
 * its room or products belong to. The tag follows the photo's own
 * hero-page assignment in the photo registry — entrance, signboard,
 * reception and building photos are "The salon". */
const COLLECTIONS: { slug: string; service: string }[] = [
  { slug: "sansha-beauty-lounge-entrance-floral-arch-night", service: "Bridal Mehndi" },
  { slug: "sansha-beauty-lounge-flower-arch-entrance-night", service: "Bridal Makeup" },
  { slug: "sansha-beauty-lounge-floral-entrance-night", service: "Party Makeup" },
  { slug: "sansha-beauty-lounge-hair-salon-chairs-peshawar", service: "Hair Salon" },
  { slug: "sansha-beauty-lounge-hair-styling-chairs", service: "Hair Salon" },
  { slug: "sansha-beauty-lounge-hair-salon-interior", service: "Hair Salon" },
  { slug: "sansha-beauty-lounge-hair-wash-area", service: "Keratin Treatment" },
  { slug: "sansha-beauty-lounge-hair-colour-products", service: "Hair Colour & Balayage" },
  { slug: "sansha-beauty-lounge-facial-room-hayatabad", service: "Facials" },
  { slug: "sansha-beauty-lounge-facial-treatment-room", service: "Facials" },
  { slug: "sansha-beauty-lounge-laser-hair-removal-room", service: "Laser Hair Removal" },
  { slug: "sansha-beauty-lounge-reception-desk-peshawar", service: "The salon" },
  { slug: "sansha-beauty-lounge-reception-shelves-hayatabad", service: "The salon" },
  { slug: "sansha-beauty-lounge-salon-sign-hayatabad-peshawar", service: "The salon" },
  { slug: "sansha-beauty-lounge-salon-signboard-hayatabad", service: "The salon" },
  { slug: "sansha-beauty-lounge-logo-sign-hayatabad", service: "The salon" },
  { slug: "sansha-beauty-lounge-building-exterior-hayatabad", service: "The salon" },
  { slug: "sansha-beauty-lounge-entrance-arch-night", service: "The salon" },
  { slug: "sansha-beauty-lounge-salon-entrance-night", service: "The salon" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-amber-300 uppercase">
              {SITE.tagline}
            </p>
            <h1 className="mt-3 text-4xl leading-tight font-bold sm:text-5xl">
              Beauty Salon in Hayatabad, Peshawar — SanSha A Beauty Lounge
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              SanSha A Beauty Lounge is a beauty salon in Phase 2, Hayatabad, Peshawar, offering bridal and party makeup, haircuts, keratin, facials, waxing, laser hair removal and mani-pedi. Walk in at any hour — the salon is open 24 hours, 7 days a week — or call 091-5839119 or WhatsApp 0313 9333377 to book your slot.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.phoneHref}
                className="flex min-h-12 items-center justify-center rounded-lg bg-accent-500 px-6 text-base font-bold text-brand-950 hover:bg-accent-400"
              >
                Call {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.whatsappHref}
                className="flex min-h-12 items-center justify-center rounded-lg bg-[#25d366] px-6 text-base font-bold text-white hover:brightness-110"
              >
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              {SITE.streetAddress}, {SITE.addressLocality},{" "}
              {SITE.addressRegion} {SITE.postalCode}, {SITE.country}
            </p>
          </div>
          <Photo
            photo={HERO}
            eager
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption={HERO.caption}
            captionClassName="mt-2 text-sm leading-relaxed text-slate-300"
          />
        </div>
      </section>

      {/* Our services in pictures — 38 owner-supplied service
          illustrations + 2 text-only cards (Electrolysis, Tag/Wart
          Removal — confirmed services with no image supplied),
          directly below the hero. Each image card: image +
          accurate service name + a short description of the service
          + a link to the service page where one exists (piercing,
          hijama cupping, lashes, tinting and acrylic & gel nails
          have no page yet, so their cards are not links).
          The intro says plainly that these are pictures of the
          service, not photos of this salon's work — the salon's real
          photos are in "Our Collections" further down the page. */}
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
          Our services in pictures
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-700">
          See what each service looks like before you book. The photos
          below show the service itself — a bridal look, a keratin
          treatment, a facial — so you can choose what you want. They
          are not photos of our salon or our clients; real photos of
          the salon are in{" "}
          <Link href="/gallery/" className="font-medium text-brand-700 underline hover:text-brand-900">
            Our Collections
          </Link>{" "}
          further down this page. Every service on our list has a
          photo below.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SERVICE_GALLERY.map((g) => {
            const card = (
              <>
                <Photo
                  photo={g}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                  className="aspect-[4/5] w-full object-cover"
                />
                <span className="flex flex-col p-4">
                  <span className="text-base font-bold text-brand-900">
                    {g.service}
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-slate-700">
                    {g.text}
                  </span>
                  {g.href && (
                    <span className="mt-2 text-sm font-semibold text-accent-600">
                      Learn more →
                    </span>
                  )}
                </span>
              </>
            );
            const cardClass =
              "flex min-h-11 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-accent-500";
            return g.href ? (
              <Link key={g.slug} href={g.href} className={cardClass}>
                {card}
              </Link>
            ) : (
              <article key={g.slug} className={cardClass}>
                {card}
              </article>
            );
          })}
          {SERVICE_TEXT_CARDS.map((t) => (
            <article
              key={t.service}
              className="flex min-h-11 flex-col justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="text-base font-bold text-brand-900">
                {t.service}
              </span>
              <span className="mt-1 text-sm leading-relaxed text-slate-700">
                {t.text}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Trust strip — facts only */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 text-center text-sm font-semibold text-brand-900">
          <span>{SITE.ratingValue}★ on Google ({SITE.reviewCount} reviews)</span>
          <span>Walk-in salon</span>
          <span>Call or WhatsApp to book</span>
          <span>Phase 2, Hayatabad</span>
          <span>{SITE.hours}</span>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">Quick facts</p>
          <ul className="mt-3 grid gap-2 leading-relaxed text-slate-700 sm:grid-cols-2">
            <li>
              <strong>What:</strong> a beauty salon in Phase 2, Hayatabad
              — bridal and party makeup, hair, keratin, facials, waxing,
              laser and mani-pedi.
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans Hights,
              Phase 2, Hayatabad, Peshawar 25124.
            </li>
            <li>
              <strong>Hours:</strong> open 24 hours, 7 days a week.
            </li>
            <li>
              <strong>Booking:</strong> walk in, or call 091-5839119 /
              WhatsApp 0313 9333377.
            </li>
            <li>
              <strong>Rating:</strong> 3.9★ on Google (92 reviews).
            </li>
            <li>
              <strong>Prices:</strong> call or WhatsApp for today&apos;s
              price — no price list on this site.
            </li>
          </ul>
        </div>
      </section>

      {/* Services — image cards: one photo + category + the specific
          services under it, each card linking to its service page */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
          Our services
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-700">
          Every service below is done at the salon in Phase 2, Hayatabad
          — walk in at any hour, or call or WhatsApp to book your slot.
          Prices depend on the service, so call or WhatsApp for
          today&apos;s price.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="flex min-h-11 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-accent-500"
            >
              {s.photo && (
                <Photo
                  photo={photo(s.photo)}
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="aspect-[4/3] w-full object-cover"
                />
              )}
              <span className="flex flex-col p-5">
                <span className="text-lg font-bold text-brand-900">
                  {s.label}
                </span>
                <span className="mt-1 text-sm leading-relaxed text-slate-700">
                  {s.text}
                </span>
                <span className="mt-3 flex flex-wrap gap-2">
                  {s.options.map((o) => (
                    <span
                      key={o}
                      className="rounded-full bg-cream-50 px-3 py-1 text-xs font-semibold text-brand-900"
                    >
                      {o}
                    </span>
                  ))}
                </span>
                <span className="mt-3 text-sm font-semibold text-accent-600">
                  {s.anchor} →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* What a visit looks like */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
            What does a visit to SanSha look like?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            A visit starts the way you like: walk in, or send a message
            first. Tell the salon which service you want and which day you
            plan to come, and it will confirm your slot and your price.
            Then come to the salon in Phase 2, Hayatabad — the treatment
            is done there, at the salon.
          </p>
          <ol className="mt-6 max-w-3xl list-decimal space-y-3 pl-6 leading-relaxed text-slate-700">
            <li>
              <strong>Walk in, or message first.</strong> For a short
              service, walking in is fine. For bridal makeup or a longer
              treatment, a message first keeps a time for you so you do
              not have to wait.
            </li>
            <li>
              <strong>Say the service and the day.</strong> Tell the salon
              what you want — a haircut, a facial, a waxing, a bridal
              sitting — and the day you plan to come.
            </li>
            <li>
              <strong>The salon confirms your slot and your price.</strong>{" "}
              You will know what is booked and what it costs before the
              day.
            </li>
            <li>
              <strong>Come to Phase 2, Hayatabad.</strong> The{" "}
              <Link href="/contact/" className="inline-flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900">
                contact page
              </Link>{" "}
              has the address and the map. The salon is open 24 hours, 7
              days a week.
            </li>
            <li>
              <strong>Book the next visit when you are ready.</strong>{" "}
              After your visit, message again to arrange the next one —
              there is no standing booking unless you ask for one.
            </li>
          </ol>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">
            You do not need to bring anything special. If you have a
            photo of a look you like — a haircut, a colour, a makeup look
            — bring it on your phone. It helps the salon understand what
            you want faster than words alone.
          </p>
        </div>
      </section>

      {/* Bridal & wedding */}
      <section className="bg-rose-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
              Bridal &amp; wedding makeup
            </h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              One salon for every function of your wedding — barat, walima,
              nikah, mehndi and engagement. Each look is booked separately,
              with a hairdo, and wedding season runs October to February,
              so book as soon as your date is fixed.
            </p>
            <ul className="mt-4 space-y-2 leading-relaxed text-slate-700">
              <li>
                <Link href="/bridal-makeup-peshawar/" className="inline-flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900">
                  Bridal makeup for barat and walima
                </Link>{" "}
                — the fuller look for the whole wedding day
              </li>
              <li>
                <Link href="/bridal-makeup-peshawar/" className="inline-flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900">
                  Nikah and mehndi makeup
                </Link>{" "}
                — softer looks for the smaller functions
              </li>
              <li>
                <Link href="/bridal-mehndi-peshawar/" className="inline-flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900">
                  Bridal mehndi for the mehndi function
                </Link>{" "}
                — henna for the bride and her guests
              </li>
              <li>
                <Link href="/party-makeup-peshawar/" className="inline-flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900">
                  Party makeup for engagements
                </Link>{" "}
                — lighter looks with a hairdo
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-slate-700">
              Prices depend on the function and the look — call{" "}
              <a href={SITE.phoneHref} className="font-medium text-brand-700 underline">{SITE.phoneDisplay}</a>{" "}
              or WhatsApp{" "}
              <a href={SITE.whatsappHref} className="font-medium text-brand-700 underline">{SITE.whatsappDisplay}</a>{" "}
              for your package.
            </p>
          </div>
          <Photo
            photo={photo("sansha-beauty-lounge-flower-arch-entrance-night")}
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption="Flower arch and fairy lights at the entrance of SanSha A Beauty Lounge at night."
          />
        </div>
      </section>

      {/* Hair */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
          Hair — cuts, colour, keratin
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          Haircuts, blow-dry, hair wash and styling, plus keratin and
          protein treatments and hair colour — dye, balayage, streaks and
          highlights. Walk in for a cut, or book your slot on WhatsApp.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Photo
            photo={photo("sansha-beauty-lounge-hair-salon-chairs-peshawar")}
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption="Hair styling chairs and mirrors inside SanSha A Beauty Lounge, Peshawar."
          />
          <Photo
            photo={photo("sansha-beauty-lounge-hair-styling-chairs")}
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption="Hair styling chairs inside the salon."
          />
          <Photo
            photo={photo("sansha-beauty-lounge-hair-wash-area")}
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption="Hair wash basins and chairs at SanSha A Beauty Lounge."
          />
          <Photo
            photo={photo("sansha-beauty-lounge-hair-colour-products")}
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption="Professional hair colour and treatment products on a shelf."
          />
        </div>
        <p className="mt-6 leading-relaxed text-slate-700">
          <Link href="/hair-salon-peshawar/" className="font-medium text-brand-700 underline hover:text-brand-900">
            Hair salon in Hayatabad
          </Link>{" "}
          ·{" "}
          <Link href="/keratin-treatment-peshawar/" className="font-medium text-brand-700 underline hover:text-brand-900">
            Keratin treatment for frizzy hair
          </Link>{" "}
          ·{" "}
          <Link href="/hair-colour-peshawar/" className="font-medium text-brand-700 underline hover:text-brand-900">
            Hair colour and balayage
          </Link>
        </p>
      </section>

      {/* How much do services cost? */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
            How much do services cost?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            There is no price list on this site, because the price of a
            service depends on what you book. A haircut is not priced
            like a bridal sitting, and a facial is not priced like a
            course of laser. The salon gives you the price when you ask
            — call or WhatsApp for today&apos;s price.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            What changes the price:
          </p>
          <ul className="mt-2 max-w-3xl list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
            <li>
              <strong>The service.</strong> Makeup, hair, skin, nails and
              laser are different jobs with different prices.
            </li>
            <li>
              <strong>The function, for makeup.</strong> A barat sitting
              is not priced like a nikah sitting — see{" "}
              <Link href="/bridal-makeup-peshawar/" className="inline-flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900">
                bridal makeup sittings
              </Link>{" "}
              for how that works.
            </li>
            <li>
              <strong>Hair length and thickness, for hair work.</strong>{" "}
              Longer, thicker hair takes more time and more product.
            </li>
            <li>
              <strong>The area, for laser and waxing.</strong> A small
              area and a large area are different sizes of job.
            </li>
            <li>
              <strong>How many services you book in one visit.</strong>{" "}
              Each service is priced on its own.
            </li>
          </ul>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            Ask for the price when you book, in the same message where
            you send the service and the day. That way you know what
            your visit covers and what it costs before you come.
          </p>
        </div>
      </section>

      {/* Skin & grooming + laser */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
            Skin &amp; grooming
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            Facials, waxing and threading, manicure and pedicure — and
            laser hair removal for face, arms, legs and full body. Laser
            and waxing are two different methods of hair removal; the{" "}
            <Link href="/laser-hair-removal-peshawar/" className="font-medium text-brand-700 underline hover:text-brand-900">
              laser hair removal page
            </Link>{" "}
            explains the difference.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Photo
              photo={photo("sansha-beauty-lounge-facial-room-hayatabad")}
              sizes="(max-width: 640px) 100vw, 400px"
              className="w-full rounded-2xl object-cover"
              caption="Facial treatment room with a treatment bed."
            />
            <Photo
              photo={photo("sansha-beauty-lounge-facial-treatment-room")}
              sizes="(max-width: 640px) 100vw, 400px"
              className="w-full rounded-2xl object-cover"
              caption="Facial treatment bed and sink in a private room."
            />
            <Photo
              photo={photo("sansha-beauty-lounge-laser-hair-removal-room")}
              sizes="(max-width: 640px) 100vw, 400px"
              className="w-full rounded-2xl object-cover"
              caption="Laser hair removal treatment room with laser machine."
            />
          </div>
          <p className="mt-6 leading-relaxed text-slate-700">
            <Link href="/facial-peshawar/" className="font-medium text-brand-700 underline hover:text-brand-900">
              Facials in Hayatabad
            </Link>{" "}
            ·{" "}
            <Link href="/waxing-peshawar/" className="font-medium text-brand-700 underline hover:text-brand-900">
              Waxing and threading
            </Link>{" "}
            ·{" "}
            <Link href="/mani-pedi-peshawar/" className="font-medium text-brand-700 underline hover:text-brand-900">
              Manicure and pedicure
            </Link>
          </p>
        </div>
      </section>

      {/* Who is the salon for? */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
          Who is the salon for?
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          SanSha is for anyone in Peshawar who wants salon work done
          well — a bride in wedding week, a guest getting ready for a
          family event, a student heading to a university farewell, or
          someone keeping up a regular routine of hair, skin and nails.
          You do not need a special occasion to come: a haircut, a
          blow-dry or a waxing is an everyday visit here.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          The services on this site are the services the salon offers;
          if you want a service that is not listed here, ask on
          WhatsApp before you come, and the salon will tell you
          honestly whether it does it.{" "}
          <Link href="/reviews/" className="font-medium text-brand-700 underline hover:text-brand-900">
            Read what clients say
          </Link>{" "}
          about their visits.
        </p>
        <h3 className="mt-8 text-xl font-bold text-brand-900">
          What the salon does not offer
        </h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
          No home service, and no medical treatments — the salon is a
          walk-in beauty salon, and the services on this site are the
          services it offers. If a service is not listed here, ask
          before you come rather than assuming it is available.
        </p>
      </section>

      {/* Where we are */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
            Where we are
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            The salon is in Phase 2, Hayatabad, Peshawar — at Shop No. 4,
            Block A, Deans Hights, close to the main Phase 2 market.
            Clients come to the salon, and the map further down this
            page shows where to find us. Walk in, or call or WhatsApp
            for directions before you come.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            The salon serves Hayatabad and Peshawar generally. [CONFIRM —
            nearby areas: the owner has not confirmed which nearby areas
            to list here yet.]
          </p>
        </div>
      </section>

      {/* Our Happy Customers — all 12 verbatim Google reviews already
          on the site (same texts as /reviews/, which carries the
          Review schema). Honest figure, plain text: 3.9★ / 92. */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
          Our happy customers
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {SITE.ratingValue}★ on Google ({SITE.reviewCount} reviews) — the
          twelve reviews below are word-for-word from Google, exactly as
          our clients wrote them.{" "}
          <Link href="/reviews/" className="font-medium text-brand-700 underline hover:text-brand-900">
            Read more about our reviews
          </Link>
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_REVIEWS.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-accent-600">
                {r.service} · {r.when}
              </p>
              <p className="mt-2 leading-relaxed text-slate-700">“{r.text}”</p>
              <footer className="mt-3 text-sm font-semibold text-brand-900">
                {r.name} <span className="font-normal text-slate-500">— via Google</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Questions? Call or WhatsApp */}
      <section className="bg-brand-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Questions? Call or WhatsApp
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-200">
            Not sure which service to book, or what it costs? Call{" "}
            {SITE.phoneDisplay} or WhatsApp {SITE.whatsappDisplay} — tell
            us the service and the day you want to come, and we will
            confirm your slot and your price.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={SITE.phoneHref}
              className="flex min-h-12 items-center justify-center rounded-lg bg-accent-500 px-6 text-base font-bold text-brand-950 hover:bg-accent-400"
            >
              Call {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsappHref}
              className="flex min-h-12 items-center justify-center rounded-lg bg-[#25d366] px-6 text-base font-bold text-white hover:brightness-110"
            >
              WhatsApp {SITE.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Our Collections — all 19 real photos of the salon, each tagged
          with the service its room or products belong to (the tag
          follows the photo's own hero-page assignment in the photo
          registry; entrance and signboard photos are tagged
          "The salon"). No photo shows a treatment in progress. */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
            Our collections
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-700">
            Real photos of the salon — the rooms where the work happens,
            the products on the shelves, the signboard and the entrance
            at night.{" "}
            <Link href="/gallery/" className="font-medium text-brand-700 underline hover:text-brand-900">
              See all 19 photos in the salon gallery
            </Link>
            .
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {COLLECTIONS.map(({ slug, service }) => {
              const p = photo(slug);
              return (
                <figure key={slug}>
                  <Photo
                    photo={p}
                    sizes="(max-width: 640px) 50vw, 320px"
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                  <figcaption className="mt-2 text-xs leading-relaxed text-slate-600">
                    <span className="font-semibold text-brand-900">{service}</span>
                    {" — "}
                    {p.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
          Find us
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <address className="text-lg leading-relaxed not-italic text-slate-700">
              {SITE.streetAddress}, {SITE.addressLocality},{" "}
              {SITE.addressRegion} {SITE.postalCode}, {SITE.country}
            </address>
            <p className="mt-4 leading-relaxed text-slate-700">
              Walk in, or call or WhatsApp to book. Hours: {SITE.hoursLong}.
              Email:{" "}
              <a href={SITE.emailHref} className="font-medium text-brand-700 underline">
                {SITE.email}
              </a>
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-x-1 text-sm leading-relaxed text-slate-700">
              Follow us:{" "}
              <a href={SITE.instagram} className="font-medium text-brand-700 underline" rel="me">Instagram ({SITE.instagramFollowers})</a>
              <span aria-hidden="true"> · </span>
              <a href={SITE.facebook} className="font-medium text-brand-700 underline" rel="me">Facebook ({SITE.facebookFollowers})</a>
              <span aria-hidden="true"> · </span>
              <a href={SITE.tiktok} className="font-medium text-brand-700 underline" rel="me">TikTok ({SITE.tiktokFollowers})</a>
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.phoneHref}
                className="flex min-h-12 items-center justify-center rounded-lg bg-accent-500 px-6 text-base font-bold text-brand-950"
              >
                Call {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.whatsappHref}
                className="flex min-h-12 items-center justify-center rounded-lg bg-[#25d366] px-6 text-base font-bold text-white"
              >
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Photo
                photo={photo("sansha-beauty-lounge-building-exterior-hayatabad")}
                sizes="(max-width: 640px) 100vw, 400px"
                className="w-full rounded-2xl object-cover"
                caption="SanSha A Beauty Lounge building exterior in Hayatabad, Peshawar."
              />
              <Photo
                photo={photo("sansha-beauty-lounge-logo-sign-hayatabad")}
                sizes="(max-width: 640px) 100vw, 400px"
                className="w-full rounded-2xl object-cover"
                caption="SanSha A Beauty Lounge sign on the salon building."
              />
            </div>
          </div>
          <iframe
            title="Map — SanSha A Beauty Lounge, Phase 2, Hayatabad, Peshawar"
            src="https://www.google.com/maps?q=SanSha+A+Beauty+Lounge+Hayatabad+Peshawar&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-2xl border border-slate-200"
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <FAQSection faqs={FAQS} />
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <CallCTA
          heading="Book your visit to SanSha A Beauty Lounge"
          text="Call or WhatsApp us — tell us the service and the day you want to come, and we will confirm your slot."
        />
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Home" }])} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={imageObjectJsonLd({
          url: `${SITE.url}/images/${HERO.slug}-${HERO.nativeW}.jpg`,
          caption: HERO.caption,
          width: HERO.nativeW,
          height: HERO.nativeH,
        })}
      />
    </div>
  );
}
