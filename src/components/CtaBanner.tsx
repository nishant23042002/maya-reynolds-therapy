import Image from "next/image";
import { ctaBanner } from "@/lib/content";

/**
 * Real layout, verified via devtools: tinted band, eyebrow + H2 + paragraph
 * next to a supporting photo, and an OUTLINED button — the only outlined
 * (non solid-fill) button on the original homepage. Simplified from the
 * original's three-image edge-bleed treatment to a single photo; that
 * specific Squarespace canvas trick doesn't translate cleanly to a
 * responsive Tailwind grid and isn't worth chasing pixel-for-pixel here.
 */
export default function CtaBanner() {
  return (
    <section id="book" className="bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
            {ctaBanner.eyebrow}
          </p>
          <h2 className="mb-4 max-w-md font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            {ctaBanner.heading}
          </h2>
          <p className="mb-8 max-w-sm text-ink-muted">{ctaBanner.body}</p>
          <a
            href="#"
            className="inline-block rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {ctaBanner.cta}
          </a>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={ctaBanner.image.src}
            alt={ctaBanner.image.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
