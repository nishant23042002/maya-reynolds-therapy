"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/content";

/**
 * Real measurements, pulled from conejovalleycounseling.com's live DOM —
 * including the actual flex structure and the mobile menu overlay, not just
 * desktop spacing numbers:
 *   - Header side padding: exactly 5vw at both 1425px and 1920px widths —
 *     confirmed fluid. Header vertical padding: exactly 1.4vw at both
 *     widths. Nav item gap: exactly 2.5vw at both widths. No max-width —
 *     it's `container--fluid`.
 *   - Structure is NOT a flat 3-way `justify-between` [logo, nav, button].
 *     `.header-title-nav-wrapper` (flex, grows to fill the space before the
 *     button) contains `.header-title` (logo, natural width) and
 *     `.header-nav` (itself flex-grows to fill what's left after the logo,
 *     then right-aligns its own links with `justify-content: flex-end`).
 *   - Content row is a fixed 75px tall at EVERY width, including their own
 *     mobile breakpoint (measured 116.9px total header height at 390px
 *     viewport vs 115.3px at desktop — same design intent). That's why
 *     `min-h-[75px]` here has no breakpoint prefix — it applies at every
 *     size so the header can't grow taller if text wraps.
 *   - Their logo is an image, so it can never wrap. Maya's is text ("Dr.
 *     Maya Reynolds, PsyD"), which was overflowing to a 2nd/3rd line at
 *     narrow widths and pushing the header taller. Fixed with a fluid
 *     clamp() on the name's font-size (shrinks smoothly down to small
 *     phones) plus `whitespace-nowrap` as a hard guarantee against wrapping.
 *   - Mobile menu: their overlay is full-screen, not a small dropdown —
 *     measured directly on the open menu at 390px width: nav links at
 *     33.2px, uppercase, ~72px per row (padding, not a divider — confirmed
 *     no border on the item), a big gap before the first item, and the same
 *     outlined pill button at the bottom.
 *   - The overlay panel's `relative` anchor is the outermost padded div
 *     (not the `<details>` itself) — `<details>` only wraps the small
 *     hamburger button, so anchoring `inset-x-0`/`top-full` to it made the
 *     panel exactly button-width instead of full-bleed. Anchoring to the
 *     full-width row makes the panel span edge-to-edge and start exactly at
 *     the header's bottom, while the logo gets `z-50` so the panel (`z-40`)
 *     never paints over it.
 *   - Breakpoint: the desktop nav/button switch over at `lg` (1024px), not
 *     `md` (768px) — confirmed against the reference's own mobile-menu
 *     breakpoint, which is 1024px. Below 1024px this shows the hamburger +
 *     full-screen overlay, not the inline nav.
 *
 * The open/close is animated with plain CSS, no JS library — but it isn't
 * built on `<details>`/`<summary>` anymore, after that was tried first and
 * failed. Native `<details>` hides everything but `<summary>` via a
 * UA-stylesheet `display: none` while closed, which gives nothing for a
 * transition to animate from; overriding that (an explicit `display`
 * of our own — author styles beat UA styles regardless of specificity)
 * is enough to make OPENING animate. But closing one doesn't, verified
 * frame-by-frame rather than assumed: it skips the transition entirely
 * and snaps straight to hidden, for any element that needed that display
 * override, no matter which CSS property was changing. This turned out
 * to be tied to the `<details>` element's own `[open]` attribute being
 * removed, not to what triggered the removal — driving the same class
 * change from React state instead of the native toggle still hit it,
 * because the parent's `[open]` attribute was still what flipped.
 *
 * The fix: a plain `<button>` (with `aria-expanded`/`aria-controls`
 * standing in for the semantics `<details>` gave up for free) and a
 * plain `<div>` whose classes come from `menuOpen` React state. An
 * ordinary element with an ordinary class change has none of
 * `<details>`'s special-cased native behavior, so it transitions
 * normally in both directions — same as everything else on this page.
 * Both icons are always rendered, stacked via `absolute inset-0`,
 * cross-fading opacity/rotate on the same state instead of a `hidden`/
 * `block` swap.
 *
 * `transition-[opacity,transform]` was the first attempt at the icon
 * swap and silently did nothing for the rotation — Tailwind v4 backs
 * `rotate-*`/`translate-*` with the standalone CSS `rotate`/`translate`
 * properties now, not the legacy `transform` shorthand, so a transition
 * list naming `transform` only ever animated the opacity half. Naming
 * `rotate`/`translate` directly is what actually makes the icon spin and
 * the panel slide instead of snapping.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base/95 backdrop-blur">
      <div className="relative px-6 py-5 lg:px-[5vw] lg:py-[1.4vw]">
        <div className="flex min-h-[75px] items-center lg:gap-[2.5vw]">
          {/* title-nav-wrapper: grows to fill the space before the button */}
          <div className="flex flex-1 items-center justify-between lg:justify-normal">
            <Link href="/" className="relative z-50 flex flex-col justify-center">
              <span className="whitespace-nowrap font-display text-[clamp(15px,4.8vw,24px)] font-semibold leading-tight text-primary">
                {site.name}
              </span>
              <span className="mt-1 whitespace-nowrap text-[clamp(8px,2.2vw,11px)] font-normal uppercase tracking-widest text-ink-muted">
                Licensed Clinical Psychologist
              </span>
            </Link>

            {/* nav itself grows to fill what's left after the logo, then
                right-aligns its links — this is what pulls the links over
                to sit right before the button instead of floating centered */}
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

            {/* Mobile menu — plain button + div, not <details>/<summary>
                (see the doc comment above for why). The original collapses
                both its nav links and CTA behind a single hamburger below
                1024px, expanding to a full-screen overlay (measured
                directly, not a small corner dropdown). */}
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

          {/* actions wrapper: natural width, sits right after nav's own
              right edge with no gap between them */}
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
