import type { Metadata } from "next";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroBackground from "@/components/HeroBackground";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | SanSha A Beauty Lounge, Hayatabad Peshawar",
  description:
    "Privacy policy for SanSha A Beauty Lounge in Hayatabad, Peshawar. What data this website collects, why, and how to contact us about your data.",
  alternates: { canonical: `${SITE.url}/privacy-policy/` },
  openGraph: {
    title: "Privacy Policy | SanSha A Beauty Lounge, Hayatabad Peshawar",
    description:
      "Privacy policy for SanSha A Beauty Lounge in Hayatabad, Peshawar. What data this website collects, why, and how to contact us about your data.",
    url: `${SITE.url}/privacy-policy/`,
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
    title: "Privacy Policy | SanSha A Beauty Lounge, Hayatabad Peshawar",
    description:
      "Privacy policy for SanSha A Beauty Lounge in Hayatabad, Peshawar. What data this website collects, why, and how to contact us about your data.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const HERO = PHOTOS.find((p) => p.slug === "sansha-beauty-lounge-entrance-floral-arch-night")!;

export default function PrivacyPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={HERO.caption}
      >
        <Breadcrumbs
          items={[{ name: "Home", path: "/" }, { name: "Privacy Policy" }]}
        />
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">
          Privacy Policy
        </h1>
      </HeroBackground>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="page-content">
          <p>
            SanSha A Beauty Lounge runs this website. This policy explains
            what information the website collects and what happens to it.
          </p>

          <h2>What this website collects</h2>
          <p>
            This website does not have a contact form and does not ask you
            for your name, address or any other personal information. It
            does not create accounts and it does not store anything you
            type.
          </p>
          <p>
            When you call us or message us on WhatsApp, your phone number
            is visible to the salon as part of that call or message — the
            same as calling any business. We use it only to answer you
            and to arrange your booking.
          </p>

          <h2>Analytics</h2>
          <p>
            This website uses Google Tag Manager, which may set cookies
            and collect usage information (such as which pages are
            visited) through Google&apos;s services. That information is
            used only to understand how the website is used. See our{" "}
            <a href="/cookies/">cookie policy</a> for details.
          </p>

          <h2>Reviews</h2>
          <p>
            The <a href="/reviews/">reviews page</a> shows a selection of verbatim Google reviews
            that clients have already published on Google, with the
            reviewer&apos;s first name and &ldquo;via Google&rdquo;. If
            you would like a review of yours removed from this page,
            please call or WhatsApp us and we will take it down.
          </p>

          <h2>Who to contact</h2>
          <p>
            If you have a question about your information, call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>.
          </p>

          <p>
            See also our <a href="/terms/">terms of service</a>.
          </p>

          <p>
            Last updated: {SITE.lastUpdated}.
          </p>
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy" },
        ])}
      />
    </div>
  );
}
