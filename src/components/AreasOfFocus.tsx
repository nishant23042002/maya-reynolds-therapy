import { areasOfFocus } from "@/lib/content";

/**
 * Real measurements, pulled from conejovalleycounseling.com's live DOM at
 * 1425px and 1920px widths — "Our areas of expertise" section: heading
 * top-left, a two-column list of items to its right, each row divided by a
 * thin bottom border (not the pill/badge tags a first guess would reach
 * for). Both test widths were landscape (vw and vmax coincide there), and
 * the insets land on proportions this site already reuses elsewhere:
 * heading starts 8.75vmax from the left — identical to MissionIntro's text
 * column — and the list block runs from 34.9vmax to 5vmax-from-the-right
 * (86.25vmax total width), split into two 60.1vmax/2-wide columns with the
 * sitewide fixed 20px gutter (`gap-x-5`) between them. Mobile (≤767px, same
 * breakpoint as every other section): single column, 6vw inset, heading
 * then all 12 items stacked in natural order.
 *
 * The heading itself is one `<h3>` on the reference too ("Our areas of
 * <em>expertise</em>", same inline-accent-word structure used here) — it
 * only wraps to two lines because its own block is deliberately narrow
 * (308.7px measured at 1425px ≈ 21.7vmax), not a forced line break, so the
 * fix is a matching `max-w` on the heading rather than a `<br />`. Font
 * metrics measured directly off that `<h3>`: 38.94px, weight 300 (already
 * `font-light`), line-height exactly 1.322× the font size, letter-spacing
 * exactly -0.01em.
 *
 * "focus" is a much shorter word than "expertise", though, so the same
 * max-width alone broke it as "Our areas" / "of focus" instead of "Our
 * areas of" / "focus" — globals.css sets `text-wrap: balance` on every
 * heading sitewide, and balance actively re-splits a line rather than
 * wrapping greedily whenever the greedy split would leave one line this
 * much shorter than the other. `[text-wrap:wrap]` overrides that back to
 * normal (greedy) wrapping for this heading only, which reproduces the
 * reference's actual break point (that required moving globals.css's
 * h1–h4 rule into `@layer base` — Tailwind's utilities live in
 * `@layer utilities`, and an unlayered rule beats every layered one
 * regardless of specificity, so no utility class could ever have won
 * against it before that).
 *
 * The max-width is a fixed px, not vmax like everything else here — this
 * heading's font-size is also a fixed px (matching Mission/WhoIHelp's own
 * fixed `text-3xl`/`text-4xl` headings rather than the vw-scaled body), so
 * a vmax max-width would drift out of sync with it: wide enough to fit
 * "Our areas of focus" back onto one line at any viewport bigger than the
 * one this was tuned at. A fixed max-width tracks the fixed text at every
 * width instead.
 *
 * Two deliberate divergences from a literal copy:
 *   - This fills the full remaining viewport height below the header
 *     (`md:min-h-[calc(100vh-115px)]`, content vertically centered) —
 *     matching the pattern already applied to Hero/MissionIntro/WhoIHelp.
 *     The reference's own version is shorter than one screen and just sits
 *     in normal document flow; the standing direction for this rebuild has
 *     been to give every section that same one-screen treatment.
 *   - The reference's live text color for every single item, checked
 *     directly via computed styles rather than assumed, is one uniform
 *     dark ink — despite what an older capture of the page might suggest,
 *     there's no per-item color cycling to copy. Kept the uniform
 *     `text-ink-muted` treatment already used for list content elsewhere,
 *     which also matches globals.css's own "accent color sparingly" rule.
 */
export default function AreasOfFocus() {
  const mid = Math.ceil(areasOfFocus.length / 2);
  const columns = [areasOfFocus.slice(0, mid), areasOfFocus.slice(mid)];

  return (
    <section className="bg-surface">
      <div className="flex flex-col gap-10 px-6 py-20 md:min-h-[calc(100vh-115px)] md:flex-col md:justify-center md:px-0 md:py-0">
        <div className="md:grid md:ml-[8.75vmax] md:mr-[5vmax] md:grid-cols-[26.15vmax_60.1vmax]">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:max-w-[250px] md:[text-wrap:wrap] md:text-[38.94px] md:leading-[1.322] md:tracking-[-0.01em]">
            Our areas of <span className="italic text-primary">focus</span>
          </h2>
          <div className="mt-10 grid gap-x-5 gap-y-0 md:mt-0 md:grid-cols-2">
            {columns.map((col, i) => (
              <ul key={i}>
                {col.map((tag) => (
                  <li
                    key={tag}
                    className="border-b border-border py-4 text-xs font-semibold uppercase tracking-wide text-ink-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
