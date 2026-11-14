import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQ";
import { RelatedLinks } from "@/components/CallCTA";
import Photo from "@/components/Photo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  imageObjectJsonLd,
} from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Contact SanSha A Beauty Lounge | Hayatabad, Peshawar",
  description:
    "Contact SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — call 091-5839119 or WhatsApp 0313 9333377. Walk in, or book your slot.",
  alternates: { canonical: `${SITE.url}/contact/` },
  openGraph: {
    title: "Contact SanSha A Beauty Lounge | Hayatabad, Peshawar",
    description:
      "Contact SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — call 091-5839119 or WhatsApp 0313 9333377. Walk in, or book your slot.",
    url: `${SITE.url}/contact/`,
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
    title: "Contact SanSha A Beauty Lounge | Hayatabad, Peshawar",
    description:
      "Contact SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — call 091-5839119 or WhatsApp 0313 9333377. Walk in, or book your slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Can I just turn up, or must I book first?",
    answer:
      "Just turn up — the salon takes walk-ins all day and all night, 24 hours a day, 7 days a week. If you want a set time, or you are booking bridal makeup for a wedding function, ring or message first and the salon will hold your slot. A haircut or a waxing rarely needs a booking.",
  },
  {
    question: "What should I tell the salon when I book?",
    answer:
      "Tell the salon which service you want and the day you would like to come. For bridal makeup, add your event date and the function — barat, walima, nikah, mehndi or engagement — so the salon can plan the sitting. If you are booking for more than one person, say so when you message.",
  },
  {
    question: "Where is the salon?",
    answer:
      "You will find the salon in Phase 2, Hayatabad — Shop No. 4, Block A, Deans Hights, Peshawar 25124. The map on this page shows where it is, and the salon's Google profile has directions too. If you are unsure, call or WhatsApp and the salon will guide you in.",
  },
  {
    question: "Is there parking at the salon?",
    answer:
      "The salon has not published parking details, so ask when you call or message on WhatsApp and it will tell you where to park before you come. [CONFIRM — parking at the salon.] Do not drive around the block looking for a space without asking first — a quick message saves the trouble.",
  },
  {
    question: "What are the opening hours?",
    answer:
      "The salon is open 24 hours, 7 days a week — you can walk in any time, day or night. If you are coming late at night or for an early-morning bridal sitting, message first so the salon knows you are coming and can have someone ready for you.",
  },
  {
    question: "How do I book bridal makeup?",
    answer:
      "Message the salon on WhatsApp or call 091-5839119 with your event date and the function — barat, walima, nikah, mehndi or engagement. The salon will confirm your slot and tell you the price before the day, so there are no surprises. Book as soon as your date is fixed, especially in wedding season.",
  },
  {
    question: "Can I message on WhatsApp instead of calling?",
    answer:
      "Yes — WhatsApp is the easiest way to book for many clients. Send the service you want, the day you would like to come, and anything the salon should know, and it will reply to confirm your slot and the price. If you prefer to talk, call 091-5839119 instead.",
  },
];

const photo = (slug: string) => PHOTOS.find((p) => p.slug === slug)!;
const EXTERIOR = photo("sansha-beauty-lounge-building-exterior-hayatabad");
const SIGN = photo("sansha-beauty-lounge-logo-sign-hayatabad");

export default function ContactPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Breadcrumbs
            items={[{ name: "Home", path: "/" }, { name: "Contact" }]}
          />
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">
            Contact {SITE.fullName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            Walk in, or call or WhatsApp to book. The salon is in Phase
            2, Hayatabad, Peshawar.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">
            Visit at a glance
          </p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar 25124.
            </li>
            <li>
              <strong>Call:</strong> 091-5839119.{" "}
              <strong>WhatsApp:</strong> 0313 9333377.
            </li>
            <li>
              <strong>Hours:</strong> open 24 hours, 7 days a week —
              walk in any time.
            </li>
            <li>
              <strong>Bring:</strong> nothing special. For bridal
              makeup, bring your event date and the function.
            </li>
            <li>
              <strong>Parking:</strong> [CONFIRM — ask when you call
              or message on WhatsApp].
            </li>
          </ul>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-900">
              Call or WhatsApp
            </h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
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
            <p className="mt-4 leading-relaxed text-slate-700">
              Send your service and the day you want to come, and the
              salon will confirm your slot. For bridal makeup, send your
              event date and function — barat, walima, nikah, mehndi or
              engagement.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              What to say when you call or WhatsApp
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              A short message is enough: which service you want, and
              the day you would like to come. The salon will reply
              with your slot and the price before your appointment, so
              there is nothing to guess about when you arrive. If you
              are booking for a wedding function, add the event date
              and the function — barat, walima, nikah, mehndi or
              engagement — because the sitting is planned around it,
              and the salon needs to know how much of the day to keep
              for you.
            </p>
            <p className="mt-3 leading-relaxed text-slate-700">
              Mention anything the salon should know before the
              appointment: skin that reacts easily, hair that has
              been coloured before, a waxing area that was sore last
              time, or a makeup look you want copied from a photo.
              If you have a photo of the look you want, send it on
              WhatsApp — a picture gets the idea across quicker than
              describing it. And if you are booking for more than one person
              — a bride and her sisters, or a group for a party —
              say so in the first message, so the salon can plan the
              day. [CONFIRM — group bookings.]
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              How to find us
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              The salon sits in Phase 2, Hayatabad — Shop No. 4,
              Block A, Deans Hights, Peshawar 25124. The map on this
              page shows the spot, and the salon&apos;s Google profile
              carries directions from anywhere in Peshawar. If the
              map looks unclear, message the salon on WhatsApp and
              ask for directions before you set out — a two-line
              message is quicker than circling the block.
            </p>
            <p className="mt-3 leading-relaxed text-slate-700">
              The map here is a general location search for the
              salon&apos;s name. [CONFIRM — the exact pin from the
              salon&apos;s Google profile, and the map coordinates
              for this page.] Once the salon&apos;s Google profile is
              claimed, this page will carry the profile&apos;s own
              map pin instead.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              What happens when you arrive
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              Walk in and say what you came for — the service you
              booked, or the service you want. If you booked ahead,
              the salon will have your slot; if you walked in, the
              salon will tell you honestly how long the wait is.
              Tell the salon about your skin or hair before the
              appointment starts, so the treatment is right for you
              from the first step.
            </p>
            <p className="mt-3 leading-relaxed text-slate-700">
              The price is confirmed before the appointment starts —
              ask for it if it has not been said, and do not agree
              to anything you have not been told the price of. The
              salon does not publish a price list on this site, so
              the price you are given when you book is the price
              that stands. If you want a second service in the same
              visit — a facial with waxing, or a manicure with a
              blow-dry — ask for one price for the whole visit
              before anything starts.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Walk in or book ahead?
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              The salon is a walk-in salon, open 24 hours, 7 days a
              week — you can come any time, day or night. For a
              haircut, a blow-dry or a waxing, walking in is usually
              fine. For bridal makeup, book ahead: wedding season
              runs October to February, and the salon keeps whole
              days for brides, so a slot booked late may already be
              taken. [CONFIRM — how far ahead bridal bookings are
              taken, and whether there are ladies-only hours or a
              Friday prayer break.]
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Parking and getting here
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              Ask the salon where to park when you call or message —
              it will tell you before you come, so you are not
              looking for a space after you arrive. [CONFIRM —
              parking at the salon.] Come by car, rickshaw or on
              foot from anywhere in Hayatabad; the salon is in
              Phase 2, and the map on this page shows the way.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Email
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              <a
                href={SITE.emailHref}
                className="font-medium text-brand-700 underline hover:text-brand-900"
              >
                {SITE.email}
              </a>
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Address
            </h2>
            <address className="mt-3 text-lg leading-relaxed not-italic text-slate-700">
              {SITE.streetAddress}, {SITE.addressLocality},{" "}
              {SITE.addressRegion} {SITE.postalCode}, {SITE.country}
            </address>
            <p className="mt-3 leading-relaxed text-slate-700">
              <a
                href={SITE.googleMaps}
                className="font-medium text-brand-700 underline hover:text-brand-900"
              >
                Find us on Google Maps
              </a>
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Opening hours
            </h2>
            <table className="mt-3 w-full max-w-md border-collapse text-left">
              <tbody>
                {SITE.hoursTable.map((row) => (
                  <tr
                    key={row.day}
                    className="border-b border-slate-200"
                  >
                    <th
                      scope="row"
                      className="py-2 pr-4 font-semibold text-slate-900"
                    >
                      {row.day}
                    </th>
                    <td className="py-2 text-slate-700">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              The salon is open 24 hours, 7 days a week — walk in any
              time, or call or WhatsApp to book.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Follow us
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-x-1 leading-relaxed text-slate-700">
              <a
                href={SITE.instagram}
                className="flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900"
                rel="me"
              >
                Instagram ({SITE.instagramFollowers})
              </a>
              <span aria-hidden="true"> · </span>
              <a
                href={SITE.facebook}
                className="flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900"
                rel="me"
              >
                Facebook ({SITE.facebookFollowers})
              </a>
              <span aria-hidden="true"> · </span>
              <a
                href={SITE.tiktok}
                className="flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900"
                rel="me"
              >
                TikTok ({SITE.tiktokFollowers})
              </a>
            </p>
          </div>

          <div>
            <iframe
              title="Map — SanSha A Beauty Lounge, Phase 2, Hayatabad, Peshawar"
              src="https://www.google.com/maps?q=SanSha+A+Beauty+Lounge+Hayatabad+Peshawar&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-2xl border border-slate-200"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Photo
                photo={EXTERIOR}
                sizes="(max-width: 640px) 100vw, 400px"
                className="w-full rounded-2xl object-cover"
                caption={EXTERIOR.caption}
              />
              <Photo
                photo={SIGN}
                sizes="(max-width: 640px) 100vw, 400px"
                className="w-full rounded-2xl object-cover"
                caption={SIGN.caption}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <RelatedLinks
            links={[
              { href: "/reviews/", label: "What our clients say" },
              { href: "/gallery/", label: "See inside the salon" },
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup in Peshawar" },
              { href: "/hair-salon-peshawar/", label: "Hair salon in Hayatabad" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={imageObjectJsonLd({
          url: `${SITE.url}/images/${EXTERIOR.slug}-${EXTERIOR.nativeW}.jpg`,
          caption: EXTERIOR.caption,
          width: EXTERIOR.nativeW,
          height: EXTERIOR.nativeH,
        })}
      />
    </div>
  );
}
