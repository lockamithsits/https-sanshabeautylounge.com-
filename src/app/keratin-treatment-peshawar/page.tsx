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
  title: "Keratin Treatment in Peshawar | SanSha A Beauty Lounge",
  description:
    "Keratin treatment in Peshawar for smooth, frizz-free hair — plus protein treatment and hair spa. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
  alternates: { canonical: `${SITE.url}/keratin-treatment-peshawar/` },
  openGraph: {
    title: "Keratin Treatment in Peshawar | SanSha A Beauty Lounge",
    description:
      "Keratin treatment in Peshawar for smooth, frizz-free hair — plus protein treatment and hair spa. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
    url: `${SITE.url}/keratin-treatment-peshawar/`,
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
    title: "Keratin Treatment in Peshawar | SanSha A Beauty Lounge",
    description:
      "Keratin treatment in Peshawar for smooth, frizz-free hair — plus protein treatment and hair spa. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is keratin treatment?",
    answer:
      "Keratin treatment is a hair treatment the salon applies to smooth the hair and calm frizz, leaving it easier to manage and style. It is done at the salon in Phase 2, Hayatabad. Call or WhatsApp the salon to book, and it will explain the treatment and the price for your hair length.",
  },
  {
    question: "Keratin or protein treatment — which is right for me?",
    answer:
      "Both are hair treatments for smoother, more manageable hair, and the right one depends on your hair — how frizzy or dry it is, and what you want from the result. The salon will look at your hair when you come in and tell you honestly which treatment suits it better.",
  },
  {
    question: "How long does keratin treatment last?",
    answer:
      "That depends on your hair and how it is cared for afterwards, so the salon does not publish a fixed duration. When you book, the salon will explain what to expect for your hair and how to look after it, so the smooth result lasts as long as it can.",
  },
  {
    question: "Can I wash my hair after keratin?",
    answer:
      "Ask the salon when you book — what you can do after the treatment depends on the treatment used and your hair. The salon will explain the aftercare for your appointment in plain words, so you know exactly what to do and what to avoid.",
  },
  {
    question: "How do I book?",
    answer:
      "Tell the salon the treatment you want and the day you would like to come — call 091-5839119 or message on WhatsApp at 0313 9333377. The salon will confirm your slot and give you the price for your hair length before the appointment, so there are no surprises.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-hair-wash-area",
)!;

export default function KeratinPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Keratin Treatment" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Keratin Treatment in Peshawar — Smooth, Frizz-Free Hair
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Keratin and protein treatments for smooth, frizz-free hair —
              at SanSha A Beauty Lounge in Phase 2, Hayatabad. Call or
              WhatsApp to book.
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
          <h2>What is keratin treatment?</h2>
          <p>
            Keratin treatment is a hair treatment the salon applies to
            smooth the hair and calm frizz, leaving it easier to manage
            and style. It is done at the salon in Phase 2, Hayatabad —
            call or WhatsApp to book, and the salon will explain the
            treatment and the price for your hair length.
          </p>

          <h2>Keratin vs protein treatment</h2>
          <p>
            The salon does both keratin and protein treatments. Both are
            for smoother, more manageable hair, and the right one depends
            on your hair — how frizzy or dry it is, and what you want
            from the result. The salon will look at your hair when you
            come in and tell you honestly which treatment suits it
            better.
          </p>

          <h2>Who it suits</h2>
          <p>
            Keratin treatment suits frizzy, unmanageable hair — the kind
            that is hard to style and hard to keep smooth. If your hair
            is frizzy after a wash, or it will not sit the way you want
            it to, ask the salon whether keratin or protein is the right
            choice for you.
          </p>

          <h2>What happens in the appointment</h2>
          <p>
            The treatment is done at the salon — the salon will explain
            the steps for your appointment when you book, and what it
            needs from you. Aftercare depends on the treatment used, so
            ask the salon when you book what to do afterwards.
          </p>

          <h2>Aftercare</h2>
          <p>
            What you can do after the treatment depends on the treatment
            used and your hair. The salon will explain the aftercare for
            your appointment in plain words, so you know exactly what to
            do and what to avoid.
          </p>

          <h2>Prices</h2>
          <p>
            Keratin and protein are priced by hair length and by the
            treatment, so the price is given when you book — it is not
            listed on this site. Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> with
            the treatment you want and ask for the price for your hair
            length.
          </p>

          <h2>Real clients</h2>
          <p>
            Below are two Google reviews from clients who had a keratin
            or protein treatment — their own words, exactly as written.
            See the full set on the{" "}
            <Link href="/reviews/">reviews page</Link>.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Today I got keratin treatment from Sansha beauty lounge.
              The girl Eeman did a wonderful job. She was very polite and
              professional. She was very patient and gave me absolute
              good time and care. I would highly recommend Eeman for hair
              treatments.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              farah n05{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Had a great experience at Sansha Beauty Salon with Ms.
              Eman. She was professional, kind, and soft-spoken. Loved
              the hair protein treatment and the results. Definitely
              recommend her.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Aqsa Qureshi{" "}
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
            heading="Book your keratin treatment"
            text="Message us on WhatsApp with the treatment you want — we will tell you the price for your hair length and keep a time for you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/hair-salon-peshawar/", label: "Hair salon — cuts, blow-dry & styling" },
              { href: "/hair-colour-peshawar/", label: "Hair colour, balayage and dye" },
              { href: "/reviews/", label: "Customer reviews" },
              { href: "/contact/", label: "Contact the salon" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Keratin Treatment" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Keratin Treatment in Peshawar",
          description:
            "Keratin treatment in Peshawar for smooth, frizz-free hair — plus protein treatment and hair spa.",
          url: `${SITE.url}/keratin-treatment-peshawar/`,
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
