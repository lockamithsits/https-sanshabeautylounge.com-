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
  title: "Waxing & Threading Peshawar | SanSha A Beauty Lounge",
  description:
    "Waxing and threading in Hayatabad, Peshawar — arms, legs, face and underarms with gentle care. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
  alternates: { canonical: `${SITE.url}/waxing-peshawar/` },
  openGraph: {
    title: "Waxing & Threading Peshawar | SanSha A Beauty Lounge",
    description:
      "Waxing and threading in Hayatabad, Peshawar — arms, legs, face and underarms with gentle care. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
    url: `${SITE.url}/waxing-peshawar/`,
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
    title: "Waxing & Threading Peshawar | SanSha A Beauty Lounge",
    description:
      "Waxing and threading in Hayatabad, Peshawar — arms, legs, face and underarms with gentle care. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Does waxing hurt?",
    answer:
      "Waxing is uncomfortable for a moment — that is the honest answer. Clients in our reviews describe it as gentle and quick, with no pain or rashes afterwards, but every person feels it differently. If you are worried, message the salon first and ask what to expect for the area you want done.",
  },
  {
    question: "Which areas do you wax?",
    answer:
      "The salon waxes arms, legs, face and underarms, and offers full-body waxing too. Threading is also available for eyebrows and facial hair. Call 091-5839119 or WhatsApp 0313 9333377 with the area you want done and the salon will confirm it and give you the price.",
  },
  {
    question: "Threading or waxing for eyebrows — which is better?",
    answer:
      "Both are done at the salon, and the better one depends on your skin and the shape you want. Threading shapes with a thread, while waxing removes the hair with wax. Ask the salon when you book — it will look at your brows and tell you honestly which it would use.",
  },
  {
    question: "How do I book?",
    answer:
      "To book, message the salon on WhatsApp at 0313 9333377 — say whether you want waxing or threading, and which area. Or call 091-5839119. The salon will confirm your slot and give you the price before your appointment, so there are no surprises on the day.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-facial-treatment-room",
)!;

export default function WaxingPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Waxing & Threading" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Waxing &amp; Threading in Peshawar — Arms, Legs, Face &amp;
              Underarms
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Waxing and threading in Phase 2, Hayatabad — with gentle
              care. Call or WhatsApp to book.
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
          <h2>Waxing</h2>
          <p>
            The salon waxes arms, legs, face and underarms, and offers
            full-body waxing too. Tell the salon which area you want done
            when you book, and it will confirm it and give you the price.
          </p>

          <h2>Threading &amp; eyebrows</h2>
          <p>
            Threading is available for eyebrows and facial hair, and the
            salon also does plucking. Threading shapes with a thread,
            while waxing removes the hair with wax — the better one
            depends on your skin and the shape you want, so ask the
            salon when you book.
          </p>

          <h2>Gentle care</h2>
          <p>
            Our clients describe waxing at the salon as gentle and
            quick. The words below are their words, from verbatim Google
            reviews — not a claim by the salon. Waxing is uncomfortable
            for a moment, and every person feels it differently, so if
            you are worried, message the salon first and ask what to
            expect for the area you want done.
          </p>

          <h2>Prices</h2>
          <p>
            Waxing and threading are priced by the area, so the salon
            gives you the price when you book — there is no price list
            on this site. WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> or call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> with the
            area you want done and ask for the price.
          </p>

          <h2>Real clients</h2>
          <p>
            The two reviews below are from Google — clients writing
            about their waxing, word for word. More are on the{" "}
            <Link href="/reviews/">reviews page</Link>.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “I had my waxing session with Lubna at Sansha yesterday
              and had a wonderful experience. She was extremely hygienic,
              gentle, and took the time to explain each step. The entire
              process was comfortable with no pain or rashes. The salon
              itself is very clean and maintains professional standards. I
              highly recommend Lubna for anyone looking for a painless
              and hygienic wax. Will definitely be coming back!”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Aiman Hayat{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Lubna did my wax and this is my 8 wax session with her
              and she&apos;s so kind polite and well behaved. Am so
              satisfied with her.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Hania Abid{" "}
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
            heading="Book your waxing or threading"
            text="Message us on WhatsApp with the area you want done — we will give you the price and confirm your slot."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/facial-peshawar/", label: "Facials in Hayatabad" },
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
          { name: "Waxing & Threading" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Waxing & Threading in Peshawar",
          description:
            "Waxing and threading in Hayatabad, Peshawar — arms, legs, face and underarms.",
          url: `${SITE.url}/waxing-peshawar/`,
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
