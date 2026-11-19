import type { ReactNode } from "react";
import Photo from "@/components/Photo";
import type { Photo as PhotoType } from "@/data/photos";

/**
 * Hero with the page's own photo as a full-bleed background.
 *
 * The photo is rendered with the <Photo> component (same srcset as a
 * foreground hero, so responsive sizes still work) — never as a CSS
 * background-image, which cannot use srcset. The <figure> is
 * absolutely positioned to fill the section; the [&_picture] rules
 * make the <picture> a full-height block so the <img>'s h-full
 * resolves (an <img> inside an inline <picture> would otherwise
 * fall back to its intrinsic height).
 *
 * A dark gradient overlay sits on top so the white text and CTAs
 * stay readable over the brightest part of any image. The overlay
 * also mutes low-resolution sources (the 199–330px gallery
 * illustrations) — they read as texture behind the overlay, not as
 * a sharp photo. If the owner later sends a larger version of a
 * hero image, swap the file the same way the Face Laser card was
 * swapped (2026-11-16) — no markup change needed.
 *
 * Since 2026-11-18 every page's hero uses the same photo — the
 * fresh short haircut (SITE_HERO in src/data/serviceGallery.ts),
 * the owner's pick. The caption below still carries the honest
 * "illustration" labelling, so the framing is not lost.
 *
 * The hero caption (the honest "illustration" labelling) is kept as
 * a small line under the CTAs, so the framing is not lost when the
 * foreground photo goes away.
 */
export default function HeroBackground({
  photo,
  caption,
  children,
}: {
  photo: PhotoType;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <Photo
        photo={photo}
        eager
        sizes="100vw"
        figureClassName="absolute inset-0 [&_picture]:block [&_picture]:h-full"
        className="h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-950/70 to-brand-950/90"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="max-w-3xl">
          {children}
          {caption && (
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-slate-300">
              {caption}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
