"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Item = { src: string; alt: string; caption: string };

/**
 * Tap-to-zoom lightbox for every lazy photo on the site — home grids,
 * gallery groups and the "Recent work" strips on service pages.
 *
 * Zero changes to the pages: one delegated click listener finds the
 * lazy <img> that was tapped (linked photos navigate instead, the
 * hero and the header logo are excluded), gathers the other photos
 * in the same section for prev/next, and shows the tapped one in a
 * native <dialog> (Esc/backdrop close free). The <img> inside the
 * dialog only renders while it is open, so the built HTML never
 * carries an empty-src image. Without JS nothing happens — the
 * photos still render exactly as before.
 */
export default function PhotoLightbox() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const collect = useCallback((img: HTMLImageElement): Item[] => {
    const scope =
      img.closest("section") ?? document.querySelector("main") ?? document.body;
    const seen = new Set<string>();
    return [...scope.querySelectorAll("img[loading='lazy']")]
      .filter(
        (el) =>
          el instanceof HTMLImageElement &&
          !el.closest("a") &&
          !el.closest("header"),
      )
      .map((el) => {
        const im = el as HTMLImageElement;
        const fig = im.closest("figure");
        const caption =
          fig?.querySelector("figcaption")?.textContent?.trim() ?? "";
        return { src: im.currentSrc || im.src, alt: im.alt, caption };
      })
      .filter((item) => {
        if (!item.src || seen.has(item.src)) return false;
        seen.add(item.src);
        return true;
      });
  }, []);

  const show = useCallback(
    (img: HTMLImageElement) => {
      const list = collect(img);
      const at = list.findIndex(
        (item) => item.src === (img.currentSrc || img.src),
      );
      if (list.length === 0 || at === -1) return;
      setItems(list);
      setIndex(at);
      setOpen(true);
    },
    [collect],
  );

  // Open the dialog once state is set; close it when state clears.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open ]);

  // One delegated listener for every photo on every page.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("dialog")) return;
      const img = target.closest("img[loading='lazy']");
      if (!(img instanceof HTMLImageElement)) return;
      if (img.closest("a") || img.closest("header")) return;
      show(img);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [show]);

  // Arrow keys step through the set; Escape is native to <dialog>.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, items.length]);

  const current = items[index];

  return (
    <dialog
      ref={dialogRef}
      onClose={() => setOpen(false)}
      onClick={(e) => {
        // Backdrop click (the dialog element itself) closes.
        if (e.target === dialogRef.current) setOpen(false);
      }}
      aria-label="Photo viewer"
      className="max-h-[92vh] w-[min(92vw,64rem)] rounded-2xl bg-brand-950 p-0 text-white backdrop:bg-black/80"
    >
      {open && current && (
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2 px-4 pt-3">
            <span className="text-sm font-medium text-white/70">
              {index + 1} of {items.length}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close photo viewer"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/30 text-lg font-bold hover:bg-white/10"
            >
              ✕
            </button>
          </div>
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[72vh] w-full object-contain"
          />
          {current.caption && (
            <p className="px-4 pb-4 pt-2 text-sm leading-relaxed text-white/80">
              {current.caption}
            </p>
          )}
          {items.length > 1 && (
            <div className="flex gap-2 px-4 pb-4">
              <button
                type="button"
                onClick={() =>
                  setIndex((i) => (i - 1 + items.length) % items.length)
                }
                aria-label="Previous photo"
                className="flex min-h-11 flex-1 items-center justify-center rounded-lg border border-white/30 font-semibold hover:bg-white/10"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % items.length)}
                aria-label="Next photo"
                className="flex min-h-11 flex-1 items-center justify-center rounded-lg border border-white/30 font-semibold hover:bg-white/10"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
