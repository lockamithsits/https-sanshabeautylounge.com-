"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";

const NAV_LINKS = [
  { href: "/bridal-makeup-peshawar/", label: "Bridal Makeup" },
  { href: "/party-makeup-peshawar/", label: "Party Makeup" },
  { href: "/hair-salon-peshawar/", label: "Hair Salon" },
  { href: "/keratin-treatment-peshawar/", label: "Keratin" },
  { href: "/hair-colour-peshawar/", label: "Hair Colour" },
  { href: "/laser-hair-removal-peshawar/", label: "Laser" },
  { href: "/facial-peshawar/", label: "Facials" },
  { href: "/waxing-peshawar/", label: "Waxing" },
  { href: "/mani-pedi-peshawar/", label: "Mani-Pedi" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-brand-950 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-2.5" aria-label="SanSha A Beauty Lounge — home">
          {/* Dark logo variant (supplied, black background) on the dark header. */}
          <img
            src="/images/logo-dark.jpg"
            alt="SanSha A Beauty Lounge logo"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-lg object-cover"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold sm:text-lg">SanSha A Beauty Lounge</span>
            <span className="block text-xs font-medium text-amber-200 sm:text-sm">Hayatabad, Peshawar · Walk-in salon</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden min-h-11 items-center rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-bold text-brand-950 hover:bg-accent-400 sm:flex"
          >
            Call {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/30 px-3 text-sm font-semibold md:hidden"
          >
            {open ? "✕ Close" : "☰ Menu"}
          </button>
        </div>
      </div>
      <nav aria-label="Main navigation" className="hidden border-t border-white/10 md:block">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-1 px-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 md:hidden">
          <ul className="space-y-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-md bg-white/5 px-3 py-2 text-base font-medium text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-2 pt-2">
              <a
                href={SITE.phoneHref}
                className="flex min-h-11 flex-1 items-center justify-center rounded-lg bg-accent-500 px-4 py-2.5 text-base font-bold text-brand-950"
              >
                Call {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.whatsappHref}
                className="flex min-h-11 flex-1 items-center justify-center rounded-lg bg-[#25d366] px-4 py-2.5 text-base font-bold text-white"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
