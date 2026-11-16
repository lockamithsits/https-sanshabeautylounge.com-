import type { Metadata } from "next";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE } from "@/data/photos";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cookie Policy | SanSha A Beauty Lounge, Hayatabad Peshawar",
  description:
    "Cookie policy for SanSha A Beauty Lounge in Hayatabad, Peshawar. What cookies this website uses, why it uses them, and how to control them in your browser.",
  alternates: { canonical: `${SITE.url}/cookies/` },
  openGraph: {
    title: "Cookie Policy | SanSha A Beauty Lounge, Hayatabad Peshawar",
    description:
      "Cookie policy for SanSha A Beauty Lounge in Hayatabad, Peshawar. What cookies this website uses, why it uses them, and how to control them in your browser.",
    url: `${SITE.url}/cookies/`,
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
    title: "Cookie Policy | SanSha A Beauty Lounge, Hayatabad Peshawar",
    description:
      "Cookie policy for SanSha A Beauty Lounge in Hayatabad, Peshawar. What cookies this website uses, why it uses them, and how to control them in your browser.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

export default function CookiesPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Breadcrumbs
            items={[{ name: "Home", path: "/" }, { name: "Cookies" }]}
          />
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">
            Cookie Policy
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="page-content">
          <p>
            This website uses a small number of cookies. This page
            explains what they are and how to control them.
          </p>

          <h2>What cookies are used</h2>
          <p>
            This website uses Google Tag Manager (container{" "}
            <strong>GTM-TNQJ5FLL</strong>), which may set cookies and
            collect usage information through Google&apos;s services —
            for example, which pages are visited. That information is
            used only to understand how the website is used. This
            website does not set any other cookies of its own: there is
            no login, no shopping basket and no contact form.
          </p>

          <h2>How to control cookies</h2>
          <p>
            You can block or delete cookies in your browser settings —
            look for &ldquo;cookies&rdquo; or &ldquo;site data&rdquo; in
            your browser&apos;s settings or help pages. Blocking cookies
            will not stop this website from working: the pages, phone
            number and WhatsApp links all work without cookies.
          </p>

          <h2>Questions</h2>
          <p>
            If you have a question about cookies on this website, call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>.
          </p>

          <p>
            See also our <a href="/privacy-policy/">privacy policy</a>{" "}
            and <a href="/terms/">terms of service</a>.
          </p>

          <p>
            Last updated: {SITE.lastUpdated}.
          </p>
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cookies" },
        ])}
      />
    </div>
  );
}
