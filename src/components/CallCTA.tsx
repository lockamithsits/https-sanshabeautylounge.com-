import Link from "next/link";
import { SITE } from "@/data/siteConfig";

/**
 * Standard call-to-action block used at the foot of service pages:
 * a short line + call + WhatsApp buttons. No form — CTA is call +
 * WhatsApp only. Call is the primary action (gold); WhatsApp is the
 * quieter secondary (smaller, tokenised green).
 */
export default function CallCTA({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  return (
    <section
      aria-label="Call or WhatsApp us"
      className="lux-feature bg-brand-900 p-6 text-center text-white sm:p-8"
    >
      <p className="lux-eyebrow-on-dark">Book a visit</p>
      <h2 className="mt-2 text-2xl font-bold">{heading}</h2>
      <p className="mx-auto mt-2 max-w-xl leading-relaxed text-slate-200">{text}</p>
      <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={SITE.phoneHref}
          className="btn-lux w-full sm:w-auto"
        >
          Call {SITE.phoneDisplay}
        </a>
        <a
          href={SITE.whatsappHref}
          className="btn-whatsapp w-full px-4 text-sm sm:w-auto"
        >
          WhatsApp {SITE.whatsappDisplay}
        </a>
      </div>
    </section>
  );
}

export function RelatedLinks({
  heading = "Related pages",
  links,
}: {
  heading?: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={heading} className="lux-card bg-slate-50 p-6">
      <h2 className="text-xl font-bold text-brand-900">{heading}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex min-h-11 items-center font-medium text-brand-700 underline hover:text-brand-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
