import Link from "next/link";
import { SITE } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-brand-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 leading-relaxed text-slate-700">
        The page you are looking for does not exist or has moved. If you
        are looking for a beauty salon in Hayatabad, Peshawar, call or
        WhatsApp us — we are at Shop No. 4, Block A, Deans Hights,
        Phase 2, Hayatabad.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={SITE.phoneHref}
          className="flex min-h-12 items-center justify-center rounded-lg bg-accent-500 px-6 text-base font-bold text-brand-950"
        >
          Call {SITE.phoneDisplay}
        </a>
        <Link
          href="/"
          className="flex min-h-12 items-center justify-center rounded-lg border border-slate-300 px-6 text-base font-semibold text-brand-900"
        >
          Back to the home page
        </Link>
      </div>
    </div>
  );
}
