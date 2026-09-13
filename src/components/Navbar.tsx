"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base/95 backdrop-blur">
      <div className="relative px-6 py-5 lg:px-[5vw] lg:py-[1.4vw]">
        <div className="flex min-h-[75px] items-center lg:gap-[2.5vw]">
          <div className="flex flex-1 items-center justify-between lg:justify-normal">
            <Link href="/" className="relative z-50 flex flex-col justify-center">
              <span className="whitespace-nowrap font-display text-[clamp(15px,4.8vw,24px)] font-semibold leading-tight text-primary">
                {site.name}
              </span>
              <span className="mt-1 whitespace-nowrap text-[clamp(8px,2.2vw,11px)] font-normal uppercase tracking-widest text-ink-muted">
                Licensed Clinical Psychologist
              </span>
            </Link>

            <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-[2.5vw]">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] uppercase tracking-widest text-ink-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu-panel"
              className="relative z-50 flex h-9 w-9 cursor-pointer items-center justify-center lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <span className="relative block h-5 w-5">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  aria-hidden="true"
                  className={`absolute inset-0 m-auto transition-[opacity,rotate] duration-300 ease-in-out ${menuOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"}`}
                >
                  <path d="M0 1H20" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0 7H20" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0 13H20" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className={`absolute inset-0 m-auto transition-[opacity,rotate] duration-300 ease-in-out ${menuOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"}`}
                >
                  <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
            <div
              id="mobile-menu-panel"
              className={`absolute inset-x-0 top-full z-40 min-h-[calc(100vh-115px)] bg-base px-6 pb-16 pt-10 shadow-lg transition-[opacity,translate] duration-300 ease-in-out lg:hidden ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none"}`}
            >
              <nav className="flex flex-col">
                {nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="py-[19px] text-[32px] uppercase leading-none tracking-[0.03em] text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href="#book"
                className="mt-8 inline-block rounded-full border border-primary px-[19.5px] py-[15px] text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white"
              >
                {nav.cta}
              </a>
            </div>
          </div>

          <a
            href="#book"
            className="hidden shrink-0 rounded-full border border-primary px-[19.5px] py-[15px] text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white lg:inline-block"
          >
            {nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
