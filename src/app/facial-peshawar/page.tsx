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
  title: "Facials in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Facials in Hayatabad, Peshawar — whitening, organic and derma facials with skin polish. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
  alternates: { canonical: `${SITE.url}/facial-peshawar/` },
  openGraph: {
    title: "Facials in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Facials in Hayatabad, Peshawar — whitening, organic and derma facials with skin polish. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    url: `${SITE.url}/facial-peshawar/`,
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
    title: "Facials in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Facials in Hayatabad, Peshawar — whitening, organic and derma facials with skin polish. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Which facial is right for my skin?",
    answer:
      "That depends on your skin — whether it is dry, oily, dull or sensitive, and what you want from the facial. The salon's menu covers whitening, organic and derma facials with skin polish, and the salon will help you choose when you book on call or WhatsApp.",
  },
  {
    question: "What is a derma facial?",
    answer:
      "A derma facial is one of the facials on the salon's menu, alongside whitening and organic facials. It is a deeper facial treatment for the skin — ask the salon on call or WhatsApp what it involves for your skin type, and whether it is the right choice for you.",
  },
  {
    question: "How often should I get a facial?",
    answer:
      "That depends on your skin and what you want from it, so the salon does not publish a fixed routine. When you book, ask how often the salon would suggest a facial for your skin, and it will give you a routine that fits your skin and your budget.",
  },
  {
    question: "How do I book?",
    answer:
      "Pick the facial you want and the day you would like to come, then call 091-5839119 or message the salon on WhatsApp at 0313 9333377. Your slot will be confirmed, and the salon will tell you the price before your appointment, so there are no surprises.",
  },
];

const photo = (slug: string) => PHOTOS.find((p) => p.slug === slug)!;
const HERO = photo("sansha-beauty-lounge-facial-room-hayatabad");

export default function FacialsPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Facials" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Facials in Hayatabad, Peshawar — Whitening, Organic &amp;
              Derma
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Facials with skin polish in Phase 2, Hayatabad — call or
              WhatsApp to keep a time.
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
          <h2>Facial types</h2>
          <p>
            The salon&apos;s facial menu covers three facials, with skin
            polish:
          </p>
          <ul>
            <li>
              <strong>Whitening facial</strong> — for brighter-looking
              skin.
            </li>
            <li>
              <strong>Organic facial</strong> — a gentler facial for
              sensitive skin.
            </li>
            <li>
              <strong>Derma facial</strong> — a deeper facial treatment
              for the skin.
            </li>
          </ul>
          <p>
            Ask the salon on call or WhatsApp which one suits your skin
            — it will help you choose when you book.
          </p>
          <Photo
            photo={photo("sansha-beauty-lounge-facial-treatment-room")}
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption="Facial treatment bed and sink in a private room."
          />

          <h2>Skin polish</h2>
          <p>
            Skin polish is done with the facials — ask the salon when
            you book whether skin polish is part of your facial, and
            what it involves for your skin.
          </p>

          <h2>Which facial suits my skin?</h2>
          <p>
            That depends on your skin — whether it is dry, oily, dull or
            sensitive, and what you want from the facial. The salon will
            help you choose when you book on call or WhatsApp. If you
            are unsure, tell the salon about your skin when you message
            and it will suggest the right facial for you.
          </p>

          <h2>Prices</h2>
          <p>
            Each facial is priced on its own, so the salon tells you the
            price when you book — this site does not carry a price list.
            Call <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> with
            the facial you want and ask for the price before your
            appointment.
          </p>

          <h2>Real clients</h2>
          <p>
            One of our clients wrote the review below on Google after a
            facial — word for word. The rest are on the{" "}
            <Link href="/reviews/">reviews page</Link>.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “I&apos;m very satisfied with the facial and plucking
              service my wife received from Ms. Seher. The work was
              excellent, neat, and professional. She was very cooperative
              and paid great attention to detail. Highly recommended!”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              WAQAS AHMED{" "}
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
            heading="Book your facial"
            text="Message us on WhatsApp with the facial you want — we will give you the price and keep a time for you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/waxing-peshawar/", label: "Waxing and threading in Peshawar" },
              { href: "/laser-hair-removal-peshawar/", label: "Laser hair removal in Hayatabad" },
              { href: "/mani-pedi-peshawar/", label: "Manicure and pedicure" },
              { href: "/contact/", label: "Contact the salon" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Facials" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Facials in Hayatabad, Peshawar",
          description:
            "Facials in Hayatabad, Peshawar — whitening, organic and derma facials with skin polish.",
          url: `${SITE.url}/facial-peshawar/`,
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
