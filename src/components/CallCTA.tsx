import Link from "next/link";
import { SITE } from "@/data/siteConfig";

/**
 * Standard call-to-action block used at the foot of service pages:
 * a short line + call + WhatsApp buttons. No form — CTA is call +
 * WhatsApp only.
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
      className="rounded-2xl bg-brand-900 p-6 text-center text-white sm:p-8"
    >
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mx-auto mt-2 max-w-xl leading-relaxed text-slate-200">{text}</p>
      <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
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
    <nav aria-label={heading} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
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
