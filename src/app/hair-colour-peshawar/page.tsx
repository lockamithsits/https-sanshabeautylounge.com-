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
  title: "Hair Colour & Balayage Peshawar | SanSha A Beauty Lounge",
  description:
    "Hair colour, balayage, dye and streaks in Hayatabad, Peshawar. Choose your shade first, then book — call 091-5839119 or WhatsApp 0313 9333377.",
  alternates: { canonical: `${SITE.url}/hair-colour-peshawar/` },
  openGraph: {
    title: "Hair Colour & Balayage Peshawar | SanSha A Beauty Lounge",
    description:
      "Hair colour, balayage, dye and streaks in Hayatabad, Peshawar. Choose your shade first, then book — call 091-5839119 or WhatsApp 0313 9333377.",
    url: `${SITE.url}/hair-colour-peshawar/`,
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
    title: "Hair Colour & Balayage Peshawar | SanSha A Beauty Lounge",
    description:
      "Hair colour, balayage, dye and streaks in Hayatabad, Peshawar. Choose your shade first, then book — call 091-5839119 or WhatsApp 0313 9333377.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Can you dye my hair the shade I want?",
    answer:
      "Bring the shade you want to the salon — a photo helps — and the salon will look at your hair and tell you honestly whether that shade is possible for you. Some shades need more than one visit, and the salon will say so before it starts.",
  },
  {
    question: "What is balayage?",
    answer:
      "Balayage is a way of colouring the hair where the colour is painted on by hand, so the lighter pieces blend softly into your natural shade instead of starting in a hard line. It is one of the colour services at the salon — call or WhatsApp to book.",
  },
  {
    question: "Will colour damage my hair?",
    answer:
      "Colour changes the hair, and how much depends on your hair and the shade you choose — lighter shades ask more of the hair than darker ones. Come in first and the salon will look at your hair and tell you honestly what is possible, and what it would need.",
  },
  {
    question: "How do I book?",
    answer:
      "Send a photo of the shade you want on WhatsApp at 0313 9333377, with the day you would like to come — or call 091-5839119. The salon will look at the shade, tell you whether it suits your hair, and confirm your slot.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-hair-colour-products",
)!;

export default function HairColourPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Hair Colour & Balayage" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Hair Colour &amp; Balayage in Peshawar — Dye, Streaks &amp;
              Highlights
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Hair colour, balayage, dye and streaks in Phase 2,
              Hayatabad. Choose your shade first, then book — call or
              WhatsApp.
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
            photo={PHOTO}
            eager
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption={PHOTO.caption}
            captionClassName="mt-2 text-sm leading-relaxed text-slate-300"
          />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="page-content">
          <h2>Colour services</h2>
          <p>
            The salon does hair colour in all its forms — dye, balayage,
            streaks and highlights. Each one is a different way of
            putting colour in the hair, and the salon will help you pick
            the one that suits your hair and the look you want:
          </p>
          <ul>
            <li>
              <strong>Hair dye</strong> — a full colour change for the
              whole head.
            </li>
            <li>
              <strong>Balayage</strong> — colour painted on by hand, so
              the lighter pieces blend softly into your natural shade.
            </li>
            <li>
              <strong>Streaks</strong> — lighter pieces through the
              hair for contrast.
            </li>
            <li>
              <strong>Highlights</strong> — lighter pieces that lift the
              colour overall.
            </li>
          </ul>

          <h2>Choose your shade</h2>
          <p>
            Bring the shade you want to the salon — a photo helps — and
            the salon will look at your hair and tell you honestly
            whether that shade is possible for you. Some shades need more
            than one visit, and the salon will say so before it starts.
            If you have a photo of the shade, send it on WhatsApp when
            you book.
          </p>

          <h2>Colour after keratin</h2>
          <p>
            If you have had a keratin treatment, or you are thinking of
            having one, ask the salon about the order — colour and
            keratin are both done at the salon, and the salon will tell
            you what works for your hair. See{" "}
            <Link href="/keratin-treatment-peshawar/">
              keratin treatment for frizzy hair
            </Link>
            .
          </p>

          <h2>Prices</h2>
          <p>
            Colour is priced by the colour you choose and your hair
            length, so there is no price list on this site. Message the
            salon on WhatsApp at{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> — or
            call <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> — with
            the colour you want, and it will give you the price for your
            booking.
          </p>

          <h2>Real clients</h2>
          <p>
            The reviews below come straight from Google — two clients
            writing about their hair colour. More are on the{" "}
            <Link href="/reviews/">reviews page</Link>.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “My experience with eman was amazing. Suvh a lovely soul
              and perfect dye done by her.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Nabeeha Khanum{" "}
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
            heading="Book your hair colour"
            text="Send a photo of the shade you want on WhatsApp and we will tell you whether it suits your hair — then book your slot."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/hair-salon-peshawar/", label: "Hair salon — cuts, blow-dry & styling" },
              { href: "/keratin-treatment-peshawar/", label: "Keratin treatment for frizzy hair" },
              { href: "/reviews/", label: "Customer reviews" },
              { href: "/contact/", label: "Contact the salon" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Hair Colour & Balayage" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Hair Colour & Balayage in Peshawar",
          description:
            "Hair colour, balayage, dye and streaks in Hayatabad, Peshawar.",
          url: `${SITE.url}/hair-colour-peshawar/`,
        })}
      />
      <JsonLd
        data={imageObjectJsonLd({
          url: `${SITE.url}/images/${PHOTO.slug}-${PHOTO.nativeW}.jpg`,
          caption: PHOTO.caption,
          width: PHOTO.nativeW,
          height: PHOTO.nativeH,
        })}
      />
    </div>
  );
}
