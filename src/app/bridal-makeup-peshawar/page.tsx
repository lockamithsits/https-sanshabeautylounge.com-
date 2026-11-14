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
  title: "Bridal Makeup in Peshawar | SanSha A Beauty Lounge",
  description:
    "Bridal makeup in Peshawar for barat, walima, nikah and mehndi — with hairdo, dupatta setting and trial on request. Call 091-5839119 or WhatsApp.",
  alternates: { canonical: `${SITE.url}/bridal-makeup-peshawar/` },
  openGraph: {
    title: "Bridal Makeup in Peshawar | SanSha A Beauty Lounge",
    description:
      "Bridal makeup in Peshawar for barat, walima, nikah and mehndi — with hairdo, dupatta setting and trial on request. Call 091-5839119 or WhatsApp.",
    url: `${SITE.url}/bridal-makeup-peshawar/`,
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
    title: "Bridal Makeup in Peshawar | SanSha A Beauty Lounge",
    description:
      "Bridal makeup in Peshawar for barat, walima, nikah and mehndi — with hairdo, dupatta setting and trial on request. Call 091-5839119 or WhatsApp.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "How far ahead should I book bridal makeup?",
    answer:
      "Message the salon on WhatsApp with your date and function as soon as your event date is fixed — the earlier, the better, because wedding season (October to February) fills up and dates go fast. If your date is close, ask anyway — the salon will tell you honestly what is still available.",
  },
  {
    question: "What is included in a bridal makeup package?",
    answer:
      "A bridal package is makeup with a hairdo for your function — barat, walima, nikah, mehndi or engagement. Prices depend on the function and the look you want, so call 091-5839119 or WhatsApp 0313 9333377 with your event date and the salon will give you your package.",
  },
  {
    question: "Do you offer a bridal trial?",
    answer:
      "Trials are arranged on request — message the salon on WhatsApp with your event date and ask what is possible for your look. The salon will tell you honestly whether a trial can be fitted in before your function, and what it would include.",
  },
  {
    question: "Can you do makeup for barat and walima on different days?",
    answer:
      "Yes — barat and walima are separate functions on different days, and the salon books each one separately. Message the salon with both dates and your look for each function, and it will arrange the two bookings so both days are covered.",
  },
  {
    question: "How do I book — call or WhatsApp?",
    answer:
      "Both work. Message the salon on WhatsApp at 0313 9333377 with your event date and function — barat, walima, nikah, mehndi or engagement — or call 091-5839119. The salon will confirm your slot and tell you what to bring, if anything, before the day.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-flower-arch-entrance-night",
)!;

export default function BridalMakeupPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Bridal Makeup" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Bridal Makeup in Peshawar — Barat, Walima, Nikah &amp; Mehndi
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Bridal makeup with a hairdo for every function of your
              wedding — at SanSha A Beauty Lounge in Phase 2, Hayatabad.
              Send your event date on WhatsApp and we will confirm your
              slot.
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
          <h2>Bridal looks for every function</h2>
          <p>
            A wedding in Peshawar is not one day — it is a week of
            functions, and each one needs its own look. The salon does
            bridal makeup for all of them:
          </p>
          <ul>
            <li>
              <strong>Barat</strong> — the fuller bridal look for the main
              day, with a hairdo.
            </li>
            <li>
              <strong>Walima</strong> — a fresh look for the reception,
              booked as a separate day.
            </li>
            <li>
              <strong>Nikah</strong> — a softer look for the ceremony.
            </li>
            <li>
              <strong>Mehndi</strong> — a colourful look for the henna
              night.
            </li>
            <li>
              <strong>Engagement</strong> — a lighter look for the
              engagement function.
            </li>
          </ul>
          <p>
            Each function is booked separately, so tell the salon your
            look for each day when you message. If you are also looking
            for a lighter look for a family event, see{" "}
            <Link href="/party-makeup-peshawar/">
              party makeup with hairdo
            </Link>
            .
          </p>

          <h2>What&apos;s included</h2>
          <p>
            A bridal package is makeup with a hairdo for your function.
            Ask about dupatta setting and a trial when you book — the
            salon will tell you what is possible for your date.
          </p>

          <h2>Bridal packages &amp; prices</h2>
          <p>
            Every bridal package is priced for the function and the look
            — there is no fixed list on this site. Message the salon on
            WhatsApp with your event date and function, or call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>, and it
            will give you your package.
          </p>

          <h2>Book ahead</h2>
          <p>
            Wedding season runs October to February and dates fill up.
            Book as soon as your event date is fixed — message the salon
            on WhatsApp with your date and function, and ask what is
            available.
          </p>

          <h2>Real brides</h2>
          <p>
            Our brides wrote the words below on Google — exactly as they
            wrote them. There are more on the{" "}
            <Link href="/reviews/">reviews page</Link>.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Our experience with miss eman and farah is out class..they
              did very gud makup of us as we asked they did da same..plus
              their behaviour is very outstanding they both are soft
              spoken plus da staff of hairdo is also very freindly sahar
              nd team..may Allah give much more barakah in ur work”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              anam usman{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “My review for eman I am very well satisfied and extremely
              happy with my makeup look..she very nice and do my makeup
              as i wanted”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Kiran Yousaf{" "}
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
            heading="Book your bridal makeup"
            text="Send your event date on WhatsApp — barat, walima, nikah, mehndi or engagement — and we will confirm your slot."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/party-makeup-peshawar/", label: "Party makeup with hairdo" },
              { href: "/hair-salon-peshawar/", label: "Hair salon — cuts, blow-dry & styling" },
              { href: "/reviews/", label: "Customer reviews" },
              { href: "/contact/", label: "Contact the salon" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Bridal Makeup" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Bridal Makeup in Peshawar",
          description:
            "Bridal makeup in Peshawar for barat, walima, nikah and mehndi — with hairdo, dupatta setting and trial on request.",
          url: `${SITE.url}/bridal-makeup-peshawar/`,
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
