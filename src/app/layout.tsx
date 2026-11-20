import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import PhotoLightbox from "@/components/PhotoLightbox";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Beauty Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "SanSha A Beauty Lounge in Hayatabad, Peshawar — bridal & party makeup, hair, keratin, facials, waxing and laser. Call 091-5839119 or WhatsApp 0313 9333377.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect so the tag manager loads sooner once it starts. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* GTM-TNQJ5FLL — owner-supplied container, installed manually.
            NO GA4 measurement ID supplied — nothing hardcoded; GA4 config +
            tags are GTM-console work, NOT in code.
            strategy="afterInteractive" (was beforeInteractive): GTM no
            longer blocks first paint / hydration — it loads right after
            instead. Tracking still fires; PageSpeed render-blocking
            drops. */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${SITE.gtmId}`}
          async
        />
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());`}
        </Script>
        {/* Google Search Console verification — owner-supplied 2026-11-14. */}
        <meta name="google-site-verification" content={SITE.gscMetaTag} />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Sitewide JSON-LD: Organization (BeautySalon) + WebSite.
            Hours are the WORKING DEFAULT (G1 — owner must confirm);
            no geo (G11), no priceRange (G2), no aggregateRating. */}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Header />
        {/* pb-24 on mobile so the sticky call bar never covers content. */}
        <main className="min-h-[60vh] pb-24 md:pb-0">{children}</main>
        <Footer />
        <StickyCTA />
        {/* Tap-to-zoom lightbox for every lazy photo on every page. */}
        <PhotoLightbox />
      </body>
    </html>
  );
}
