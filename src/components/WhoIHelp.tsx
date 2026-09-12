import { whoIHelp } from "@/lib/content";

/**
 * STUB — wireframe only. Build this out yourself; it's part of the graded
 * "UI cloning accuracy" (25%).
 *
 * Original section: "Who we help" — a 3-card grid, equal-width, generous
 * padding inside each card, a short heading + 1-2 sentence body per card.
 * Open conejovalleycounseling.com in devtools and match:
 *   - the grid gap and card padding (use Tailwind `gap-*` / `p-*`, not
 *     per-card margin — see Reynolds Rebuild's own layout rule about that)
 *   - the breakpoint where it collapses from 3 columns to 1 on mobile
 *   - heading size/weight relative to the body text
 *
 * Content note: these three cards are Maya's real client segments (adults
 * only — see content.ts comment). Don't reintroduce Couples / Children.
 */
export default function WhoIHelp() {
  return (
    <section className="border border-dashed border-secondary-dark/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-2xl font-semibold text-ink">Who I help</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {whoIHelp.map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-base p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
