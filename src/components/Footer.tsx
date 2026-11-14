import Link from "next/link";
import { SITE } from "@/data/siteConfig";

const SERVICE_LINKS = [
  { href: "/bridal-makeup-peshawar/", label: "Bridal makeup" },
  { href: "/bridal-mehndi-peshawar/", label: "Bridal mehndi" },
  { href: "/party-makeup-peshawar/", label: "Party makeup" },
  { href: "/hair-salon-peshawar/", label: "Hair salon" },
  { href: "/keratin-treatment-peshawar/", label: "Keratin treatment" },
  { href: "/hair-colour-peshawar/", label: "Hair colour & balayage" },
  { href: "/laser-hair-removal-peshawar/", label: "Laser hair removal" },
  { href: "/facial-peshawar/", label: "Facials" },
  { href: "/waxing-peshawar/", label: "Waxing & threading" },
  { href: "/mani-pedi-peshawar/", label: "Manicure & pedicure" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{SITE.fullName}</p>
          <p className="mt-1 text-sm text-amber-200">{SITE.tagline}</p>
          <p className="mt-2 text-sm leading-relaxed">
            Beauty salon in Phase 2, Hayatabad, Peshawar — bridal and party
            makeup, hair, keratin, facials, waxing, mani-pedi and laser hair
            removal. Walk in, or call or WhatsApp to book.
          </p>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            {SITE.streetAddress}, {SITE.addressLocality},{" "}
            {SITE.addressRegion} {SITE.postalCode}, {SITE.country}
          </address>
          <p className="mt-3 text-sm">
            <a href={SITE.phoneHref} className="flex min-h-11 items-center font-semibold text-amber-300 underline">
              Call {SITE.phoneDisplay}
            </a>
            <a href={SITE.whatsappHref} className="flex min-h-11 items-center font-semibold text-amber-300 underline">
              WhatsApp {SITE.whatsappDisplay}
            </a>
            <a href={SITE.emailHref} className="flex min-h-11 items-center font-semibold text-amber-300 underline">
              Email {SITE.email}
            </a>
          </p>
          <p className="mt-1 text-sm">{SITE.hoursLong}.</p>
          <p className="mt-3 flex flex-wrap items-center gap-x-1 text-sm">
            <a href={SITE.instagram} className="flex min-h-11 items-center font-semibold text-amber-300 underline" rel="me">Instagram ({SITE.instagramFollowers})</a>
            <span aria-hidden="true"> · </span>
            <a href={SITE.facebook} className="flex min-h-11 items-center font-semibold text-amber-300 underline" rel="me">Facebook ({SITE.facebookFollowers})</a>
            <span aria-hidden="true"> · </span>
            <a href={SITE.tiktok} className="flex min-h-11 items-center font-semibold text-amber-300 underline" rel="me">TikTok ({SITE.tiktokFollowers})</a>
          </p>
        </div>
        <nav aria-label="Footer services">
          <p className="text-base font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="flex min-h-11 items-center px-2 underline hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer information">
          <p className="text-base font-semibold text-white">Information</p>
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
