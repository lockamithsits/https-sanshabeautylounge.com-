import { SITE } from "@/data/siteConfig";

/**
 * Fixed mobile call bar — phones only (hidden on sm+ where the header
 * call button is visible). Single 48px "Call" button. The layout adds
 * bottom padding on mobile so this bar never covers page content.
 */
export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={SITE.phoneHref}
          className="flex min-h-12 flex-1 items-center justify-center rounded-lg bg-accent-500 px-4 text-base font-bold text-brand-950"
        >
          Call {SITE.phoneDisplay}
        </a>
        <a
          href={SITE.whatsappHref}
          className="flex min-h-12 flex-1 items-center justify-center rounded-lg bg-[#25d366] px-4 text-base font-bold text-white"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
