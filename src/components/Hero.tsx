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
 * TODO(you): swap the background for a real image once you've sourced one
 * (Reynolds Rebuild § Image sourcing — muted, warm-light, no literal
 * "therapy office" stock cliché) and confirm this matches the original's
 * hero structure: full-bleed background, eyebrow, H1, subtext, single CTA.
 */
export default function Hero() {
  return (
    <section className="bg-primary-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 md:py-32">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold text-ink md:text-6xl">
          {hero.headline}
        </h1>
        <p className="max-w-xl text-lg text-ink-muted">{hero.subtext}</p>
        <a
          href="#book"
          className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-strong"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  );
}
