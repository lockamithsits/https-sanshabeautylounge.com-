import { SITE } from "@/data/siteConfig";

/**
 * Fixed mobile call bar — phones only (hidden on sm+ where the header
 * Book button is visible). Dark bar to match the header/footer; Call
 * is the primary action, WhatsApp the quieter secondary. The layout
 * adds bottom padding on mobile so this bar never covers page content.
 */
export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-950/95 px-3 py-2 backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={SITE.phoneHref}
          className="btn-lux flex-1 px-4"
        >
          Call {SITE.phoneDisplay}
        </a>
        <a
          href={SITE.whatsappHref}
          className="btn-whatsapp flex-1 px-3 text-sm"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
