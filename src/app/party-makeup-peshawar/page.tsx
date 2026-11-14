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
  title: "Party Makeup in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Party makeup in Peshawar with hairdo for engagements, dinners and family events. Book your slot on call or WhatsApp — SanSha A Beauty Lounge.",
  alternates: { canonical: `${SITE.url}/party-makeup-peshawar/` },
  openGraph: {
    title: "Party Makeup in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Party makeup in Peshawar with hairdo for engagements, dinners and family events. Book your slot on call or WhatsApp — SanSha A Beauty Lounge.",
    url: `${SITE.url}/party-makeup-peshawar/`,
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
    title: "Party Makeup in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Party makeup in Peshawar with hairdo for engagements, dinners and family events. Book your slot on call or WhatsApp — SanSha A Beauty Lounge.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is the difference between party and bridal makeup?",
    answer:
      "Party makeup is a lighter look for engagements, dinners and family events, while bridal makeup is a fuller look built for the whole wedding day — barat, walima, nikah or mehndi. Both include a hairdo, and both are done at the salon in Phase 2, Hayatabad.",
  },
  {
    question: "Does party makeup include a hairdo?",
    answer:
      "Yes — party makeup at SanSha includes a hairdo with the makeup, so you leave ready for your event. If you have a particular hairstyle in mind, mention it when you book on WhatsApp, and the salon will tell you whether it suits your hair and the look.",
  },
  {
    question: "How long does party makeup take?",
    answer:
      "That depends on the look and whether a hairdo is included, so the salon does not publish a fixed time. When you book on WhatsApp, ask how long your look will take and the salon will give you the time for your booking, so you can plan your event around it.",
  },
  {
    question: "How do I book?",
    answer:
      "Message the salon on WhatsApp at 0313 9333377 with your event and the date, or call 091-5839119. The salon will confirm your slot and tell you what time to arrive. Weekends and wedding season fill up fastest, so book ahead for your event.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-floral-entrance-night",
)!;

export default function PartyMakeupPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Party Makeup" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Party Makeup in Peshawar — With Hairdo
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Party makeup with a hairdo for engagements, dinners and
              family events — at SanSha A Beauty Lounge in Phase 2,
              Hayatabad. Book your slot on call or WhatsApp.
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
          <h2>Party looks</h2>
          <p>
            Party makeup is for the events around the wedding — and for
            the evenings in between. The salon does party looks for:
          </p>
          <ul>
            <li>
              <strong>Engagements</strong> — a polished look for the
              engagement function.
            </li>
            <li>
              <strong>Dinners</strong> — a lighter look for a dinner or
              a family gathering.
            </li>
            <li>
              <strong>Family events</strong> — a fresh look for Eid,
              birthdays and get-togethers.
            </li>
          </ul>

          <h2>Party vs bridal — what&apos;s different</h2>
          <p>
            Party makeup is a lighter, shorter look than bridal makeup —
            the same care, without the full wedding-day build. Bridal
            makeup is fuller and made to last the whole day, for barat,
            walima, nikah or mehndi. If your event is a wedding function,
            see{" "}
            <Link href="/bridal-makeup-peshawar/">
              bridal makeup in Peshawar
            </Link>
            .
          </p>

          <h2>What&apos;s included</h2>
          <p>
            Party makeup includes a hairdo with the makeup, so you leave
            ready for your event. If you have a particular hairstyle in
            mind, mention it when you book on WhatsApp.
          </p>

          <h2>Prices</h2>
          <p>
            The price of a party look depends on the look itself, so the
            salon gives it to you when you book — not on this site. Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> with
            your event and date and ask for the price of your look.
          </p>

          <h2>Real clients</h2>
          <p>
            Two of our clients wrote the words below on Google. You can
            read the rest on the{" "}
            <Link href="/reviews/">reviews page</Link>.
          </p>
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
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your party makeup"
            text="Send your event and date on WhatsApp and we will confirm your slot — with hairdo."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup for barat and walima" },
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
          { name: "Party Makeup" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Party Makeup in Peshawar",
          description:
            "Party makeup in Peshawar with hairdo for engagements, dinners and family events.",
          url: `${SITE.url}/party-makeup-peshawar/`,
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
