import type { Metadata } from "next";
import { SITE } from "@/data/siteConfig";
import {OG_IMAGE} from "@/data/photos";
import { SITE_HERO } from "@/data/serviceGallery";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroBackground from "@/components/HeroBackground";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms | SanSha A Beauty Lounge, Hayatabad Peshawar",
  description:
    "Terms of service for SanSha A Beauty Lounge in Hayatabad, Peshawar. How bookings, prices, visits, changes and cancellations at the salon work.",
  alternates: { canonical: `${SITE.url}/terms/` },
  openGraph: {
    title: "Terms | SanSha A Beauty Lounge, Hayatabad Peshawar",
    description:
      "Terms of service for SanSha A Beauty Lounge in Hayatabad, Peshawar. How bookings, prices, visits, changes and cancellations at the salon work.",
    url: `${SITE.url}/terms/`,
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
    title: "Terms | SanSha A Beauty Lounge, Hayatabad Peshawar",
    description:
      "Terms of service for SanSha A Beauty Lounge in Hayatabad, Peshawar. How bookings, prices, visits, changes and cancellations at the salon work.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const HERO = SITE_HERO;

export default function TermsPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={HERO.caption}
      >
        <Breadcrumbs
          items={[{ name: "Home", path: "/" }, { name: "Terms" }]}
        />
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">
          Terms of Service
        </h1>
      </HeroBackground>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="page-content">
          <p>
            These terms cover using this website and booking a service at
            SanSha A Beauty Lounge, Phase 2, Hayatabad, Peshawar.
          </p>

          <h2>Bookings</h2>
          <p>
            You can walk in to the salon, or book by calling{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or messaging
            us on WhatsApp at{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>. A
            booking is confirmed when the salon confirms your slot. For
            bridal makeup, book as soon as your event date is fixed —
            wedding season runs October to February and dates fill up.
          </p>

          <h2>Prices</h2>
          <p>
            No prices are published on this website. The salon will give
            you the price for your service before your appointment, when
            you call or message on WhatsApp. The price you are given
            before your appointment is the price for that booking.
          </p>

          <h2>Changes and cancellations</h2>
          <p>
            If you need to change or cancel your booking, please call or
            message us on WhatsApp as soon as you can, so the slot can
            be given to someone else.
          </p>

          <h2>At the salon</h2>
          <p>
            All services are done at the salon in Phase 2, Hayatabad.
            The salon does not offer home service. Please arrive on time
            for your booking — if you are running late, call or message
            us and we will tell you honestly whether your slot can still
            go ahead.
          </p>

          <h2>Reviews on this website</h2>
          <p>
            The <a href="/reviews/">reviews</a> on this website are verbatim Google reviews from
            our clients, shown with the reviewer&apos;s first name and
            &ldquo;via Google&rdquo;. They are the reviewers&apos; own
            words and their own opinions.
          </p>

          <h2>Website content</h2>
          <p>
            The content of this website — text, photos and the logo —
            belongs to SanSha A Beauty Lounge. Please do not copy or
            reuse it without asking us first.
          </p>

          <p>
            See also our <a href="/privacy-policy/">privacy policy</a>{" "}
            and <a href="/cookies/">cookie policy</a>.
          </p>

          <p>
            Last updated: {SITE.lastUpdated}.
          </p>
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms" },
        ])}
      />
    </div>
  );
}
