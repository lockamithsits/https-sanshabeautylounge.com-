import type { Photo } from "@/data/photos";

/**
 * Responsive photo: AVIF → WebP → JPG, srcset capped at the native
 * width — never upscaled. width/height are always set (zero CLS).
 *
 * - `eager`: hero/LCP image — fetchPriority high + preload link
 *   (React hoists the <link> into <head>). Everything else lazy.
 * - `sizes`: CSS width the image renders at, per viewport. Defaults
 *   to the native width (the largest slot the photo is shown in).
 */
export default function Photo({
  photo,
  sizes,
  eager = false,
  className,
  figureClassName,
  caption,
  captionClassName = "mt-2 text-sm leading-relaxed text-slate-600",
}: {
  photo: Photo;
  sizes?: string;
  eager?: boolean;
  className?: string;
  figureClassName?: string;
  caption?: string;
  captionClassName?: string;
}) {
  const srcset = (ext: string) =>
    photo.widths
      .map((w) => `/images/${photo.slug}-${w}.${ext} ${w}w`)
      .join(", ");
  const fallback = `/images/${photo.slug}-${photo.nativeW}.jpg`;
  const sizesAttr = sizes ?? `${photo.nativeW}px`;

  return (
    <figure className={figureClassName}>
      {eager && (
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href={`/images/${photo.slug}-${photo.nativeW}.avif`}
        />
      )}
      <picture>
        <source type="image/avif" srcSet={srcset("avif")} sizes={sizesAttr} />
        <source type="image/webp" srcSet={srcset("webp")} sizes={sizesAttr} />
        <source type="image/jpeg" srcSet={srcset("jpg")} sizes={sizesAttr} />
        <img
          src={fallback}
          width={photo.nativeW}
          height={photo.nativeH}
          alt={photo.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "low"}
          className={className}
        />
      </picture>
      {caption && (
        <figcaption className={captionClassName}>{caption}</figcaption>
      )}
    </figure>
  );
}
