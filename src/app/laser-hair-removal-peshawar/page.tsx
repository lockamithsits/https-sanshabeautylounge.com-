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
  title: "Laser Hair Removal Peshawar | SanSha A Beauty Lounge",
  description:
    "Laser hair removal in Hayatabad, Peshawar — face, arms, legs and full body. Book a consultation on call or WhatsApp: 091-5839119 / 0313 9333377.",
  alternates: { canonical: `${SITE.url}/laser-hair-removal-peshawar/` },
  openGraph: {
    title: "Laser Hair Removal Peshawar | SanSha A Beauty Lounge",
    description:
      "Laser hair removal in Hayatabad, Peshawar — face, arms, legs and full body. Book a consultation on call or WhatsApp: 091-5839119 / 0313 9333377.",
    url: `${SITE.url}/laser-hair-removal-peshawar/`,
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
    title: "Laser Hair Removal Peshawar | SanSha A Beauty Lounge",
    description:
      "Laser hair removal in Hayatabad, Peshawar — face, arms, legs and full body. Book a consultation on call or WhatsApp: 091-5839119 / 0313 9333377.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Is laser hair removal safe?",
    answer:
      "Laser hair removal is a treatment to talk through in person, because it depends on your skin and hair. Book a consultation on call or WhatsApp and the salon will explain what the treatment involves for you, and answer your questions before you decide anything.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "That depends on the area and your hair, so the salon does not publish a session count. After a consultation the salon will say how many sessions it expects for the area you want treated, and what each one will cost before you start.",
  },
  {
    question: "Laser or waxing — which is right for me?",
    answer:
      "Laser is a course of sessions for longer-term hair reduction, while waxing is a per-visit treatment you repeat when the hair grows back. Which suits you depends on the area, your hair and your budget — ask the salon when you book and it will explain both honestly.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Call 091-5839119 or message the salon on WhatsApp at 0313 9333377 and ask for a laser consultation. The salon will arrange a time to talk through the areas you want treated, explain the treatment, and give you the price before anything is booked.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-laser-hair-removal-room",
)!;

export default function LaserPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Laser Hair Removal" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Laser Hair Removal in Peshawar — Face, Arms, Legs &amp; Full
              Body
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Laser hair removal in Phase 2, Hayatabad. Book a
              consultation on call or WhatsApp and the salon will explain
              the treatment for your skin and hair.
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
          <h2>What is laser hair removal?</h2>
          <p>
            Laser hair removal is a treatment the salon offers for
            longer-term hair reduction. It is done at the salon in Phase
            2, Hayatabad, and it starts with a consultation — the salon
            explains what the treatment involves for your skin and hair
            before anything is booked.
          </p>

          <h2>Areas treated</h2>
          <p>
            The salon treats face, arms, legs and full body. When you
            book a consultation, tell the salon which areas you want
            treated, and it will say how many sessions it expects for
            each area and what each one will cost before you start.
          </p>

          <h2>Laser vs waxing</h2>
          <p>
            Laser and waxing are two different methods of hair removal,
            and they suit different people. Laser is a course of sessions
            for longer-term hair reduction, while waxing is a per-visit
            treatment you repeat when the hair grows back. Which suits
            you depends on the area, your hair and your budget — ask the
            salon when you book and it will explain both honestly. For
            waxing, see{" "}
            <Link href="/waxing-peshawar/">
              waxing and threading in Peshawar
            </Link>
            .
          </p>

          <h2>Consultation</h2>
          <p>
            Before your first session, book a consultation — call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> and
            the salon will arrange a time to talk through the areas you
            want treated, explain the treatment, and give you the price
            before anything is booked.
          </p>

          <h2>Prices</h2>
          <p>
            Laser is priced by the area and the number of sessions, so
            the salon gives you the price after your consultation — no
            prices are listed on this site. Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> with
            the area you want treated and ask for the price.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book a laser consultation"
            text="Call or WhatsApp us and ask for a laser consultation — we will talk through the areas you want treated and give you the price."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/waxing-peshawar/", label: "Waxing and threading in Peshawar" },
              { href: "/facial-peshawar/", label: "Facials in Hayatabad" },
              { href: "/reviews/", label: "Customer reviews" },
              { href: "/contact/", label: "Contact the salon" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Laser Hair Removal" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Laser Hair Removal in Peshawar",
          description:
            "Laser hair removal in Hayatabad, Peshawar — face, arms, legs and full body.",
          url: `${SITE.url}/laser-hair-removal-peshawar/`,
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
