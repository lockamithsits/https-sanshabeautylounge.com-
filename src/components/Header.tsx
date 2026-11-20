"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

/** Compare a nav href with the current path, ignoring a trailing slash. */
function isCurrent(href: string, pathname: string): boolean {
  const norm = (p: string) => (p === "/" ? "/" : p.replace(/\/$/, ""));
  return norm(href) === norm(pathname);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  /** Desktop Services dropdown. */
  const [servicesOpen, setServicesOpen] = useState(false);
  /** Mobile Services accordion. */
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  /** Shrink-on-scroll: the logo row compacts once the page scrolls. */
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLLIElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  const closeServices = () => setServicesOpen(false);

  // Shrink the header on scroll: logo 80px -> 56px, tighter row padding.
  // The at-top size stays 80px — the owner asked twice for a bigger logo.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  /** Current page is one of the service pages — highlight Services. */
  const onServicePage = SERVICE_NAV_LINKS.some((link) =>
    isCurrent(link.href, pathname),
  );

  const desktopLink = (href: string) =>
    `flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white ${
      isCurrent(href, pathname)
        ? "bg-white/10 text-white shadow-[inset_0_-2px_0_0_#cdb169]"
        : "text-white/90"
    }`;

  const mobileLink = (href: string) =>
    `flex min-h-11 items-center rounded-md px-3 py-2 text-base font-medium text-white transition-colors hover:bg-white/10 ${
      isCurrent(href, pathname) ? "bg-white/10 shadow-[inset_0_-2px_0_0_#cdb169]" : "bg-white/5"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-brand-950 text-white shadow-md">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link href="/" className="flex min-h-11 items-center gap-2.5" aria-label="SanSha A Beauty Lounge — home">
          {/* Dark logo variant (supplied, black background) on the dark header.
              80px at the top (was 40px, then 56px) — the owner asked twice
              for a bigger logo; it shrinks to 56px only once the page
              scrolls, so the sticky header eats less of the screen.
              Source file stays the full 814x821 (HD): at 80px display
              it downscales 10x, so it stays razor-sharp incl. retina. */}
          <img
            src="/images/logo-dark.jpg"
            alt="SanSha A Beauty Lounge logo"
            width={80}
            height={80}
            className={`shrink-0 rounded-lg object-cover transition-all duration-300 ${
              scrolled ? "h-14 w-14" : "h-20 w-20"
            }`}
          />
          <span className="leading-tight">
            <span className="block text-base font-bold sm:text-lg">SanSha A Beauty Lounge</span>
            <span className="block text-xs font-medium text-amber-200 sm:text-sm">Hayatabad, Peshawar · Walk-in salon</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {/* Socials in the top bar on desktop. On phones they live
              inside the menu, so the closed header stays compact. */}
          <HeaderSocialButtons className="hidden md:flex" />
          {/* One elegant Book action — call only (no form, no new
              integration). WhatsApp stays one tap away in the menu,
              the sticky bar, the footer and every CallCTA. */}
          <a
            href={SITE.phoneHref}
            aria-label={`Book an appointment — call ${SITE.phoneDisplay}`}
            className="btn-lux hidden px-5 text-sm sm:flex"
          >
            Book
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
          <li>
            <Link
              href="/"
              aria-current={isCurrent("/", pathname) ? "page" : undefined}
              className={desktopLink("/")}
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
              className={`flex min-h-11 items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-amber-300 ${
                onServicePage
                  ? "bg-white/10 text-white shadow-[inset_0_-2px_0_0_#cdb169]"
                  : "text-white/90"
              }`}
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
                        aria-current={isCurrent(link.href, pathname) ? "page" : undefined}
                        className={desktopLink(link.href)}
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
                aria-current={isCurrent(link.href, pathname) ? "page" : undefined}
                className={desktopLink(link.href)}
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
                aria-current={isCurrent("/", pathname) ? "page" : undefined}
                className={mobileLink("/")}
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
                className={`flex min-h-11 w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10 ${
                  onServicePage ? "bg-white/10 shadow-[inset_0_-2px_0_0_#cdb169]" : "bg-white/5"
                }`}
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
                        aria-current={isCurrent(link.href, pathname) ? "page" : undefined}
                        className={mobileLink(link.href)}
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
                  aria-current={isCurrent(link.href, pathname) ? "page" : undefined}
                  className={mobileLink(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-2 pt-2">
              <a
                href={SITE.phoneHref}
                className="btn-lux flex-1 px-4"
              >
                Call {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.whatsappHref}
                className="btn-whatsapp flex-1 px-4 text-sm"
              >
                WhatsApp
              </a>
            </li>
            {/* Socials live inside the menu now — the closed header
                on phones is just the logo row, ~41px shorter. */}
            <li className="flex items-center gap-3 border-t border-white/10 px-1 pt-3">
              <span className="text-xs font-semibold text-white/80">Follow us</span>
              <HeaderSocialButtons />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
