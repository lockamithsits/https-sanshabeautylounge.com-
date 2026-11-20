import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { SERVICE_NAV_LINKS } from "@/data/services";
import { FooterSocialButtons } from "@/components/SocialLinks";

/** Hours are the same every day — show one grouped line instead of
 *  seven identical rows. Falls back to per-day rows if that ever
 *  changes in siteConfig. */
function HoursBlock() {
  const uniqueHours = [...new Set(SITE.hoursTable.map((d) => d.hours))];
  if (uniqueHours.length === 1) {
    return (
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        <span className="font-semibold text-white">Monday – Sunday</span>
        <br />
        {uniqueHours[0]}
      </p>
    );
  }
  return (
    <dl className="mt-2 space-y-1 text-sm text-slate-300">
      {SITE.hoursTable.map((d) => (
        <div key={d.day} className="flex justify-between gap-4">
          <dt>{d.day}</dt>
          <dd className="font-semibold text-white">{d.hours}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            {/* Gold-on-black logo, same asset as the header — it only
                works on dark, and the footer is dark. */}
            <img
              src="/images/logo-dark.jpg"
              alt="SanSha A Beauty Lounge logo"
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-lg object-cover"
            />
            <p className="leading-tight">
              <span className="block text-lg font-bold text-white">{SITE.fullName}</span>
              <span className="mt-0.5 block text-sm text-amber-200">{SITE.tagline}</span>
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Beauty salon in Phase 2, Hayatabad, Peshawar — bridal and party
            makeup, hair, keratin, facials, waxing, mani-pedi and laser hair
            removal. Walk in, or call or WhatsApp to book.
          </p>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            {SITE.streetAddress}, {SITE.addressLocality},{" "}
            {SITE.addressRegion} {SITE.postalCode}, {SITE.country}
          </address>
          <p className="mt-3 text-sm">
            <a href={SITE.emailHref} className="flex min-h-11 items-center font-semibold text-amber-300 underline">
              Email {SITE.email}
            </a>
          </p>
          <div className="mt-4">
            <p className="lux-eyebrow-on-dark">Follow us</p>
            <div className="mt-3">
              <FooterSocialButtons />
            </div>
          </div>
        </div>
        <div>
          <p className="lux-eyebrow-on-dark">Book a visit</p>
          <p className="mt-3 text-sm leading-relaxed">
            Walk in, or call or WhatsApp to book — no appointment needed.
          </p>
          <div className="mt-4 flex flex-col items-start gap-2">
            <a href={SITE.phoneHref} className="btn-lux px-5 text-sm">
              Call {SITE.phoneDisplay}
            </a>
            <a href={SITE.whatsappHref} className="btn-whatsapp px-4 text-sm">
              WhatsApp {SITE.whatsappDisplay}
            </a>
          </div>
          <p className="lux-eyebrow-on-dark mt-6">Hours</p>
          <HoursBlock />
          <p className="mt-2 text-sm">{SITE.hoursLong}.</p>
        </div>
        <nav aria-label="Footer services">
          <p className="lux-eyebrow-on-dark">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICE_NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="flex min-h-11 items-center px-2 underline hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer information">
          <p className="lux-eyebrow-on-dark">Information</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/gallery/" className="flex min-h-11 items-center px-2 underline hover:text-white">
                Salon gallery — see inside the salon
              </Link>
            </li>
            <li>
              <Link href="/reviews/" className="flex min-h-11 items-center px-2 underline hover:text-white">
                Customer reviews — {SITE.ratingValue}★ on Google ({SITE.reviewCount} reviews)
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="flex min-h-11 items-center px-2 underline hover:text-white">
                Contact us
              </Link>
            </li>
            <li>
              <a href={SITE.googleMaps} className="flex min-h-11 items-center px-2 underline hover:text-white">
                Find us on Google Maps
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/privacy-policy/" className="flex min-h-11 items-center px-2 underline hover:text-white">Privacy policy</Link>
            <Link href="/terms/" className="flex min-h-11 items-center px-2 underline hover:text-white">Terms</Link>
            <Link href="/cookies/" className="flex min-h-11 items-center px-2 underline hover:text-white">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
