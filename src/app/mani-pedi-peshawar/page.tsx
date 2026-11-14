import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE } from "@/data/photos";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQ";
import CallCTA, { RelatedLinks } from "@/components/CallCTA";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Manicure & Pedicure Peshawar | SanSha A Beauty Lounge",
  description:
    "Manicure and pedicure in Hayatabad, Peshawar — whitening mani-pedi with polish and nail care. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot.",
  alternates: { canonical: `${SITE.url}/mani-pedi-peshawar/` },
  openGraph: {
    title: "Manicure & Pedicure Peshawar | SanSha A Beauty Lounge",
    description:
      "Manicure and pedicure in Hayatabad, Peshawar — whitening mani-pedi with polish and nail care. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot.",
    url: `${SITE.url}/mani-pedi-peshawar/`,
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
    title: "Manicure & Pedicure Peshawar | SanSha A Beauty Lounge",
    description:
      "Manicure and pedicure in Hayatabad, Peshawar — whitening mani-pedi with polish and nail care. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is included in a manicure?",
    answer:
      "A manicure at the salon is a whitening manicure with nail care and polish — your nails are shaped and cleaned, the hands are cared for, and polish is applied to finish. Call or WhatsApp the salon to book, and it will tell you the price before your appointment.",
  },
  {
    question: "What is included in a pedicure?",
    answer:
      "A pedicure at the salon is a whitening pedicure with foot care and polish — your feet are soaked and cared for, the nails are shaped and cleaned, and polish is applied to finish. Call or WhatsApp to book, and the salon will tell you the price first.",
  },
  {
    question: "Do you do nail polish and nail art?",
    answer:
      "The salon does manicure and pedicure with polish, and nail shaping as part of the service. For nail art, ask on WhatsApp before you book — the salon will tell you honestly what is available for your appointment, so you know before you come.",
  },
  {
    question: "How do I book?",
    answer:
      "Choose manicure, pedicure or both, then call 091-5839119 or message the salon on WhatsApp at 0313 9333377 with the day you would like to come. The salon will confirm your slot and tell you the price first, before your appointment starts.",
  },
];

export default function ManiPediPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Manicure & Pedicure" },
            ]}
          />
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">
            Manicure &amp; Pedicure in Peshawar — Whitening Mani-Pedi &amp;
            Nail Care
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            Manicure and pedicure with polish in Phase 2, Hayatabad —
            message us on WhatsApp or call to book.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.phoneHref}
              className="flex min-h-12 items-center justify-center rounded-lg bg-accent-500 px-6 text-base font-bold text-brand-950 hover:bg-accent-400 sm:w-auto"
            >
              Call {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsappHref}
              className="flex min-h-12 items-center justify-center rounded-lg bg-[#25d366] px-6 text-base font-bold text-white hover:brightness-110 sm:w-auto"
            >
              WhatsApp {SITE.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="page-content">
          <h2>Manicure</h2>
          <p>
            A manicure at the salon is a whitening manicure with nail
            care and polish — your nails are shaped and cleaned, the
            hands are cared for, and polish is applied to finish.
          </p>

          <h2>Pedicure</h2>
          <p>
            A pedicure at the salon is a whitening pedicure with foot
            care and polish — your feet are soaked and cared for, the
            nails are shaped and cleaned, and polish is applied to
            finish.
          </p>

          <h2>Nail care</h2>
          <p>
            Nail shaping is part of the manicure and pedicure, and
            polish is applied to finish. For nail art, ask on WhatsApp
            before you book — the salon will tell you honestly what is
            available for your appointment, so you know before you come.
          </p>

          <h2>Prices</h2>
          <p>
            A manicure, a pedicure or both — each has its own price,
            given to you when you book. No prices are printed on this
            site: WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> or call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> with what
            you want done and ask for the price.
          </p>

          <h2>Real clients</h2>
          <p>
            Below is a Google review from a client who had a mani-pedi —
            her own words, exactly as written. The reviews page has the
            full set.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “I did my Meni pedi and waxing from seher and I just love
              her services”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              sana jehangir{" "}
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
            heading="Book your manicure or pedicure"
            text="Message us on WhatsApp with what you want — manicure, pedicure or both — and we will confirm your slot."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/facial-peshawar/", label: "Facials in Hayatabad" },
              { href: "/waxing-peshawar/", label: "Waxing and threading in Peshawar" },
              { href: "/reviews/", label: "Customer reviews" },
              { href: "/contact/", label: "Contact the salon" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Manicure & Pedicure" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Manicure & Pedicure in Peshawar",
          description:
            "Manicure and pedicure in Hayatabad, Peshawar — whitening mani-pedi with polish and nail care.",
          url: `${SITE.url}/mani-pedi-peshawar/`,
        })}
      />
    </div>
  );
}
