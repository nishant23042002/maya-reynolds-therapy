import Image from "next/image";
import { hero } from "@/lib/content";

/**
 * WORKED EXAMPLE #2 — the copy → SEO pattern.
 *
 * The eyebrow line above the headline carries the SEO keywords
 * ("Anxiety, Trauma & Burnout Therapy in Santa Monica, CA") so the emotional
 * H1 doesn't have to be stuffed with them. That's the pattern the assignment
 * wants: "SEO optimized ... natural keyword integration," not a keyword list
 * pretending to be a headline.
 *
 * Layout: original has a text column beside real photography, not a plain
 * color field — `priority` on the image since it's the largest above-fold
 * element (LCP).
 */
export default function Hero() {
  return (
    <section className="bg-primary-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold text-ink md:text-5xl">
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
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg md:aspect-[3/4]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
