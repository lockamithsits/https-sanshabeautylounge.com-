"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { SERVICE_NAV_LINKS } from "@/data/services";
import { HeaderSocialButtons } from "@/components/SocialLinks";

/** Top-level nav items that are not services. */
const TOP_LINKS = [
  { href: "/", label: "Home" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  /** Desktop Services dropdown. */
  const [servicesOpen, setServicesOpen] = useState(false);
  /** Mobile Services accordion. */
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  const closeServices = () => setServicesOpen(false);

  // Close the desktop dropdown on Escape (and return focus to the
  // Services button) and on any click outside the dropdown.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeServices();
        servicesButtonRef.current?.focus();
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        closeServices();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [servicesOpen]);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

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
          {/* Socials in the top bar on desktop. On phones they live
              in the row below so the header stays compact. */}
          <HeaderSocialButtons className="hidden md:flex" />
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
      {/* Mobile social row — all three profiles visible in the header
          on phones, without opening the menu. */}
      <div className="flex items-center gap-3 border-t border-white/10 px-4 py-2 md:hidden">
        <span className="text-xs font-semibold text-white/80">Follow us</span>
        <HeaderSocialButtons />
      </div>
      <nav aria-label="Main navigation" className="hidden border-t border-white/10 md:block">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-1 px-4">
          <li>
            <Link
              href="/"
              className="flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
            >
              Home
            </Link>
          </li>
          {/* Services dropdown — opens on click (touch-friendly);
              hover opens it too on desktop. Closes on Escape, on
              outside click, and after a link is tapped. */}
          <li
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              ref={servicesButtonRef}
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className="flex min-h-11 items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-amber-300"
            >
              Services
              <span aria-hidden="true" className={`inline-block transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-[30rem] max-w-[calc(100vw-2rem)] rounded-xl bg-brand-950 p-2 shadow-xl ring-1 ring-white/15">
                <ul className="grid grid-cols-2 gap-x-1">
                  {SERVICE_NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={closeServices}
                        className="flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          {TOP_LINKS.slice(1).map((link) => (
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
            <li>
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="flex min-h-11 items-center rounded-md bg-white/5 px-3 py-2 text-base font-medium text-white hover:bg-white/10"
              >
                Home
              </Link>
            </li>
            {/* Mobile Services accordion — tap to expand/collapse. */}
            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                className="flex min-h-11 w-full items-center justify-between rounded-md bg-white/5 px-3 py-2 text-base font-medium text-white hover:bg-white/10"
              >
                Services
                <span aria-hidden="true" className={`inline-block transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
              {mobileServicesOpen && (
                <ul className="mt-1 space-y-1 border-l-2 border-amber-300/60 pl-3">
                  {SERVICE_NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="flex min-h-11 items-center rounded-md bg-white/5 px-3 py-2 text-base font-medium text-white hover:bg-white/10"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {TOP_LINKS.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
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
