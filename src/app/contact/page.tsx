import type { Metadata } from "next";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import { breadcrumbJsonLd, imageObjectJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact SanSha A Beauty Lounge | Hayatabad, Peshawar",
  description:
    "Contact SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — call 091-5839119 or WhatsApp 0313 9333377. Walk in, or book your slot.",
  alternates: { canonical: `${SITE.url}/contact/` },
  openGraph: {
    title: "Contact SanSha A Beauty Lounge | Hayatabad, Peshawar",
    description:
      "Contact SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — call 091-5839119 or WhatsApp 0313 9333377. Walk in, or book your slot.",
    url: `${SITE.url}/contact/`,
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
    title: "Contact SanSha A Beauty Lounge | Hayatabad, Peshawar",
    description:
      "Contact SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — call 091-5839119 or WhatsApp 0313 9333377. Walk in, or book your slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const photo = (slug: string) => PHOTOS.find((p) => p.slug === slug)!;
const EXTERIOR = photo("sansha-beauty-lounge-building-exterior-hayatabad");
const SIGN = photo("sansha-beauty-lounge-logo-sign-hayatabad");

export default function ContactPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Breadcrumbs
            items={[{ name: "Home", path: "/" }, { name: "Contact" }]}
          />
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">
            Contact {SITE.fullName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            Walk in, or call or WhatsApp to book. The salon is in Phase
            2, Hayatabad, Peshawar.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-900">
              Call or WhatsApp
            </h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
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
            <p className="mt-4 leading-relaxed text-slate-700">
              Send your service and the day you want to come, and the
              salon will confirm your slot. For bridal makeup, send your
              event date and function — barat, walima, nikah, mehndi or
              engagement.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Email
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              <a
                href={SITE.emailHref}
                className="font-medium text-brand-700 underline hover:text-brand-900"
              >
                {SITE.email}
              </a>
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Address
            </h2>
            <address className="mt-3 text-lg leading-relaxed not-italic text-slate-700">
              {SITE.streetAddress}, {SITE.addressLocality},{" "}
              {SITE.addressRegion} {SITE.postalCode}, {SITE.country}
            </address>
            <p className="mt-3 leading-relaxed text-slate-700">
              <a
                href={SITE.googleMaps}
                className="font-medium text-brand-700 underline hover:text-brand-900"
              >
                Find us on Google Maps
              </a>
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Opening hours
            </h2>
            <table className="mt-3 w-full max-w-md border-collapse text-left">
              <tbody>
                {SITE.hoursTable.map((row) => (
                  <tr
                    key={row.day}
                    className="border-b border-slate-200"
                  >
                    <th
                      scope="row"
                      className="py-2 pr-4 font-semibold text-slate-900"
                    >
                      {row.day}
                    </th>
                    <td className="py-2 text-slate-700">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              The salon is open 24 hours, 7 days a week — walk in any
              time, or call or WhatsApp to book.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-brand-900">
              Follow us
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-x-1 leading-relaxed text-slate-700">
              <a
                href={SITE.instagram}
                className="flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900"
                rel="me"
              >
                Instagram ({SITE.instagramFollowers})
              </a>
              <span aria-hidden="true"> · </span>
              <a
                href={SITE.facebook}
                className="flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900"
                rel="me"
              >
                Facebook ({SITE.facebookFollowers})
              </a>
              <span aria-hidden="true"> · </span>
              <a
                href={SITE.tiktok}
                className="flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900"
                rel="me"
              >
                TikTok ({SITE.tiktokFollowers})
              </a>
            </p>
          </div>

          <div>
            <iframe
              title="Map — SanSha A Beauty Lounge, Phase 2, Hayatabad, Peshawar"
              src="https://www.google.com/maps?q=SanSha+A+Beauty+Lounge+Hayatabad+Peshawar&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-2xl border border-slate-200"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Photo
                photo={EXTERIOR}
                sizes="(max-width: 640px) 100vw, 400px"
                className="w-full rounded-2xl object-cover"
                caption={EXTERIOR.caption}
              />
              <Photo
                photo={SIGN}
                sizes="(max-width: 640px) 100vw, 400px"
                className="w-full rounded-2xl object-cover"
                caption={SIGN.caption}
              />
            </div>
          </div>
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact" },
        ])}
      />
      <JsonLd
        data={imageObjectJsonLd({
          url: `${SITE.url}/images/${EXTERIOR.slug}-${EXTERIOR.nativeW}.jpg`,
          caption: EXTERIOR.caption,
          width: EXTERIOR.nativeW,
          height: EXTERIOR.nativeH,
        })}
      />
    </div>
  );
}
