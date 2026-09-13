import Image from "next/image";
import { hero } from "@/lib/content";

/**
 * Structure started from real measurements of conejovalleycounseling.com's
 * own Fluid Engine hero (confirmed vw-based sizing, a 767→768px breakpoint
 * independent of the header's 1024px one, full-bleed left photo stretching
 * to match the text column's height) — see git history for those exact
 * numbers. Two deliberate departures from that reference, both by request:
 *
 *   1. No right-edge sliver image. The original frames its text with a
 *      photo on both sides; this only uses the left one — a second photo
 *      (even reusing the same file) read as unnecessary clutter for this
 *      hero, so the text column now simply extends into that freed space
 *      instead (`md:mr-[8vw]` instead of the `12.5vw` that used to reserve
 *      room for the sliver + its gap). H1/subtext got a `max-w` added since
 *      the column is now wide enough that unconstrained lines would run too
 *      long to read comfortably at large viewports.
 *   2. The section fills the full remaining viewport height below the
 *      header (`min-h-[calc(100vh-115px)]`, 115px being the header's own
 *      constant height at every breakpoint — see Navbar.tsx) with content
 *      vertically centered, rather than the reference's shorter,
 *      content-driven height. Scoped to `md:` only — mobile keeps its
 *      natural content height since forcing full-viewport there would cramp
 *      the stacked text+photo layout.
 *
 * Mobile (≤767px) still stacks text first, photo below — text gets a 6vw
 * side inset (matches the original's own ratio), the photo is full-bleed
 * both edges like the desktop one, which is why the inset lives on the text
 * block itself rather than a shared wrapper around both.
 */
export default function Hero() {
  return (
    <section className="bg-primary-soft">
      <div className="py-16 md:flex md:min-h-[calc(100vh-115px)] md:flex-col md:justify-center md:py-0">
        <div className="md:relative">
          {/* Left photo — desktop only, full-bleed to the viewport edge,
              stretches to match the text column's full height */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[34.2vw] md:block">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              sizes="35vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Text column — the only element with a side inset; the photo
              below is full-bleed on both sides, same as desktop */}
          <div className="flex flex-col items-start gap-6 px-[6vw] md:ml-[42.4vw] md:mr-[8vw] md:px-0 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {hero.eyebrow}
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold text-ink md:text-5xl">
              {hero.headline}
            </h1>
            <p className="max-w-xl text-lg text-ink-muted">{hero.subtext}</p>
            <a
              href="#book"
              className="rounded-full bg-accent-strong px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent"
            >
              {hero.cta}
            </a>
          </div>
        </div>

        {/* Mobile photo — full-bleed both edges, same as desktop */}
        <div className="mt-10 md:hidden">
          <div className="relative h-[360px] w-full">
            <Image src={hero.image.src} alt={hero.image.alt} fill sizes="100vw" className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
