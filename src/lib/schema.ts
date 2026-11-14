import { SITE } from "@/data/siteConfig";

/**
 * Typed JSON-LD helpers. Schema must match visible content exactly —
 * nothing is output here that the page does not also show.
 *
 * Deliberately OMITTED: Review / AggregateRating (the honest Google
 * figure 3.9★ / 92 reviews is visible TEXT only — never schema),
 * priceRange (no prices confirmed — G2), geo (coordinates
 * unconfirmed — G11). openingHoursSpecification is Open 24 hours,
 * 7 days a week (owner-confirmed 2026-11-14, G1 closed).
 */

export interface BreadcrumbItem {
  name: string;
  /** Path with trailing slash. Omit for the current page. */
  path?: string;
}

export function scriptJson(data: unknown): string {
  return JSON.stringify(data);
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.fullName,
    slogan: SITE.tagline,
    url: SITE.url,
    telephone: SITE.phoneHref.replace("tel:", ""),
    email: SITE.email,
    description: `SanSha A Beauty Lounge — beauty salon in Phase 2, Hayatabad, Peshawar. Bridal and party makeup, haircuts, blow-dry, hair colour and balayage, keratin and protein treatments, facials, waxing and threading, manicure and pedicure, and laser hair removal.`,
    logo: `${SITE.url}/images/logo-light.jpg`,
    image: `${SITE.url}/images/og-sansha-beauty-lounge-hayatabad-peshawar.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.streetAddress,
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      postalCode: SITE.postalCode,
      addressCountry: SITE.addressCountry,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: SITE.city,
      },
      {
        "@type": "AdministrativeArea",
        name: SITE.region,
      },
    ],
    sameAs: [SITE.instagram, SITE.facebook, SITE.tiktok],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.fullName,
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE.url}${item.path}` } : {}),
    })),
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@id": `${SITE.url}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: SITE.city,
    },
  };
}

export function imageObjectJsonLd(opts: {
  url: string;
  caption: string;
  width: number;
  height: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: opts.url,
    caption: opts.caption,
    width: opts.width,
    height: opts.height,
  };
}
