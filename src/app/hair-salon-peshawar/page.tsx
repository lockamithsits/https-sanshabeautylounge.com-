import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQ";
import CallCTA, { RelatedLinks } from "@/components/CallCTA";
import Photo from "@/components/Photo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  imageObjectJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Hair Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Haircuts, blow-dry, hair wash and styling in Hayatabad, Peshawar. Walk in or book your slot today on WhatsApp — SanSha A Beauty Lounge, Phase 2.",
  alternates: { canonical: `${SITE.url}/hair-salon-peshawar/` },
  openGraph: {
    title: "Hair Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Haircuts, blow-dry, hair wash and styling in Hayatabad, Peshawar. Walk in or book your slot today on WhatsApp — SanSha A Beauty Lounge, Phase 2.",
    url: `${SITE.url}/hair-salon-peshawar/`,
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
    title: "Hair Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Haircuts, blow-dry, hair wash and styling in Hayatabad, Peshawar. Walk in or book your slot today on WhatsApp — SanSha A Beauty Lounge, Phase 2.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Do I need an appointment for a haircut?",
    answer:
      "No — you can walk in to the salon at Shop No. 4, Block A, Deans Hights, Phase 2, Hayatabad. If you are coming at a busy time, or you want a cut and blow-dry before an event, it is worth calling or sending a WhatsApp message first so a time is kept for you.",
  },
  {
    question: "Can you cut and blow-dry my hair for an event?",
    answer:
      "Yes — a cut with a blow-dry is one of the salon's everyday services, and it is a good choice before a party, dinner or family event. Tell the salon about your event when you book, so it can plan the cut and the finish around the look you want.",
  },
  {
    question: "Do you do hair colour and keratin too?",
    answer:
      "Yes — the salon does hair colour, balayage, dye and streaks, and keratin and protein treatments for smooth, frizz-free hair. Each has its own page on this site, and you can book any of them by calling 091-5839119 or messaging on WhatsApp.",
  },
  {
    question: "How do I book?",
    answer:
      "You can walk in to the salon in Phase 2, Hayatabad — no booking needed for a haircut. If you would rather have a time kept for you, call 091-5839119 or message the salon on WhatsApp at 0313 9333377 with the service you want and the day you would like to come.",
  },
];

const photo = (slug: string) => PHOTOS.find((p) => p.slug === slug)!;
const HERO = photo("sansha-beauty-lounge-hair-salon-chairs-peshawar");

export default function HairSalonPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Hair Salon" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Hair Salon in Hayatabad, Peshawar — Cuts, Blow-Dry &amp;
              Styling
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Haircuts, blow-dry, hair wash and styling in Phase 2,
              Hayatabad. Walk in, or book your slot today on WhatsApp.
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

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="page-content">
          <h2>Haircuts</h2>
          <p>
            A haircut at the salon is a cut shaped to your hair and your
            face — tell the salon what you want when you come in, and it
            will cut it the way you ask. Walk in, or book your slot on
            WhatsApp if you are coming at a busy time.
          </p>

          <h2>Blow-dry &amp; hair wash</h2>
          <p>
            A hair wash with a blow-dry leaves your hair clean, smooth
            and ready for the day — or for an event the same evening. It
            is also the finish after a cut, so the shape of the cut
            shows properly.
          </p>
          <Photo
            photo={photo("sansha-beauty-lounge-hair-wash-area")}
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption="Hair wash basins and chairs at SanSha A Beauty Lounge."
          />

          <h2>Hair styling for events</h2>
          <p>
            If you have a party, dinner or family event, the salon can
            style your hair for it — a cut with a blow-dry, or styling
            with your makeup. Tell the salon about your event when you
            book, so it can plan the finish around the look you want.
          </p>

          <h2>Hair treatments</h2>
          <p>
            For frizzy, unmanageable hair, the salon does{" "}
            <Link href="/keratin-treatment-peshawar/">
              keratin treatment for frizzy hair
            </Link>{" "}
            and protein treatments — smooth, frizz-free hair that is
            easier to manage and style.
          </p>

          <h2>Hair colour</h2>
          <p>
            The salon also does{" "}
            <Link href="/hair-colour-peshawar/">
              hair colour, balayage and dye
            </Link>{" "}
            — dye, balayage, streaks and highlights. Choose your shade
            first, then book.
          </p>

          <h2>Prices</h2>
          <p>
            What a hair service costs depends on the service and your
            hair, so the salon tells you the price when you book. Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> with
            the service you want and ask for the price of your booking.
          </p>

          <h2>Real clients</h2>
          <p>
            The two reviews below are word-for-word from Google — written
            by clients after a haircut. More are on the{" "}
            <Link href="/reviews/">reviews page</Link>.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “AOA, I&apos;m Fatima. Had my haircut today at San Shah
              Salon. The staff was very welcoming and helpful. Special
              thanks to Miss Lubna — she&apos;s highly skilled,
              professional, and gave me a beautiful, elegant cut.
              Mashallah. Will definitely visit again!”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Beena Fatima{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Eman did an amazing job with my hair; she was skilled,
              friendly, and paid great attention to detail.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              komal butt{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your hair appointment"
            text="Walk in, or call or WhatsApp us with the service you want and the day you would like to come."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/keratin-treatment-peshawar/", label: "Keratin treatment for frizzy hair" },
              { href: "/hair-colour-peshawar/", label: "Hair colour, balayage and dye" },
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup with hairdo" },
              { href: "/contact/", label: "Contact the salon" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Hair Salon" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Hair Salon in Hayatabad, Peshawar",
          description:
            "Haircuts, blow-dry, hair wash and styling in Hayatabad, Peshawar.",
          url: `${SITE.url}/hair-salon-peshawar/`,
        })}
      />
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
