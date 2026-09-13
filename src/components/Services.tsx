import { services } from "@/lib/content";

/**
 * Real measurements, pulled from conejovalleycounseling.com's live DOM at
 * 1425px and 1920px widths — "Our specialties include…": heading top-left,
 * beside a grid of specialty cards to its right (title, body, "Learn more"
 * link), not the heading-above-a-row layout this section had before.
 * Confirmed vw-consistent: heading left inset is the sitewide 8.75vw, and
 * the reference reuses ONE column width for everything in this row — the
 * heading's own block, and each of its two card columns, are all the exact
 * same 25.4vw wide, separated by the exact same ~4.4vw gutter throughout
 * (heading-to-card1, card1-to-card2). Row-to-row gap is generous — about
 * 6vw between one row's content and the next — which is what makes the
 * reference read as clearly-divided cards rather than a dense block; the
 * first pass at this section reused that gutter for the small gaps but
 * missed this larger one, which is what actually made it feel cluttered
 * next to the reference.
 *
 * The reference has four specialties in a 2×2 grid; this keeps exactly
 * three (assignment checklist requirement, not a layout choice — see the
 * `services` export). Rather than force 3 columns into the same width the
 * reference gives 2 (which is what the first pass did, and why every card
 * read as cramped and text wrapped awkwardly), this keeps the reference's
 * real 2-column width: the first two specialties sit side by side, and the
 * third sits on its own row below at that same single-column width — kept
 * narrow to match the other two rather than stretched wide, so all three
 * wrap text at the same line length.
 *
 * The first row's two cards are `md:contents` so their title/body/link
 * become direct items of that row's own grid (`md:grid-flow-col`) instead
 * of two independently-sized columns — the same fix WhoIHelp and this
 * section's first pass both needed: without it, whichever card's body
 * happens to wrap a line shorter throws its own "Learn more" out of line
 * with the other. `grid-auto-flow: column` also needs an explicit row
 * count (`md:grid-rows-[auto_auto_auto]`) to know when to wrap into the
 * next column — omit it and all 6 flattened items (2 cards ×
 * title/body/link) each claim their own column instead of grouping
 * 2-per-card. The third card has nothing to align against, so it's left
 * as a plain block.
 *
 * "Learn more" is styled as the same solid pill button used in Hero and
 * HowIWork (`rounded-full bg-accent-strong ... text-white`), not the
 * reference's plain underlined text — continuing the one-button-style
 * pattern already applied there rather than introducing a second,
 * text-link CTA style. Still a `<span>`, not an `<a>`, though: the
 * assignment is homepage-only, so there's no per-service page for it to
 * actually link to — a real `href` here would just be a dead link wearing
 * a button's clothes. The visual language changed; the "no destination
 * page, so no real link" reasoning from the original version didn't.
 *
 * Fills the full remaining viewport height below the header
 * (`md:min-h-[calc(100vh-115px)]`, content vertically centered), continuing
 * the pattern already applied to every other section on this rebuild.
 */
function ServiceCard({ title, body }: { title: string; body: string }) {
  return (
    <>
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
      <span className="w-fit rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent">
        Learn more
      </span>
    </>
  );
}

export default function Services() {
  const [first, second, third] = services;

  return (
    <section id="services" className="bg-surface">
      <div className="flex flex-col gap-10 px-6 py-20 md:min-h-[calc(100vh-115px)] md:flex-col md:justify-center md:px-0 md:py-0">
        <div className="md:grid md:ml-[8.75vmax] md:mr-[5vmax] md:grid-cols-[25.4vmax_1fr] md:gap-x-[4.4vmax]">
          <h2 className="font-display text-3xl font-light text-ink md:text-4xl">
            My <span className="italic text-primary">specialties</span>
          </h2>

          <div className="mt-10 flex flex-col gap-16 md:mt-0 md:gap-[6vmax]">
            <div className="grid gap-10 md:grid-flow-col md:grid-cols-2 md:grid-rows-[auto_auto_auto] md:gap-x-[4.4vmax] md:gap-y-5">
              <div className="flex flex-col gap-4 md:contents">
                <ServiceCard title={first.title} body={first.body} />
              </div>
              <div className="flex flex-col gap-4 md:contents">
                <ServiceCard title={second.title} body={second.body} />
              </div>
            </div>

            <div className="flex flex-col gap-4 md:max-w-[25.4vmax]">
              <ServiceCard title={third.title} body={third.body} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
