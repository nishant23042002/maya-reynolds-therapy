import Image from "next/image";
import { whoIHelp } from "@/lib/content";

/**
 * Real measurements, pulled from conejovalleycounseling.com's live DOM at
 * 1425px and 1920px — same full-bleed Fluid Engine pattern as every other
 * section (no max-width cap), with its own numbers:
 *   - Heading sits at 5vmax from the left
 *   - The 3-card row is inset further than the heading — starts at 16.3vmax,
 *     not 5vmax — and its right edge lands at exactly 5vmax from the right
 *     (same margin as the heading's left, confirmed at both widths: the
 *     card row's combined width + 2 fixed 20px gaps always lands there)
 *   - Each photo: 25.1vmax wide (same cell width MissionIntro's paragraphs
 *     use — this site reuses one grid-column proportion everywhere), aspect
 *     ratio ≈355.6/413.2 ≈ 0.861 (close to 6/7)
 *   - Gap between cards: fixed 20px (confirmed identical in raw px at both
 *     widths — this is the sitewide grid gutter, same constant found in
 *     Header/MissionIntro) — `gap-x-5`
 *   - Gap from heading to the card row, AND from each photo down to its own
 *     heading+body: both ~3.3vmax — the same rhythm value MissionIntro
 *     uses between its H2 and paragraph row, reused here at two levels
 *   - Mobile (≤767px, same breakpoint as every other section): stacks
 *     straight down (heading, photo, text, photo, text, photo, text) in
 *     natural DOM order — no reordering trick this time. Photo height is a
 *     fixed 304px, identical to Hero's mobile photo height — a second
 *     confirmation that's a sitewide mobile image-height constant, not a
 *     coincidence specific to one section.
 *
 * Two departures from those measurements, both fixes rather than a literal
 * copy:
 *   - At the column widths this row actually has (viewport minus the
 *     16.3vmax + 5vmax insets, split three ways), a fixed 6:7 aspect ratio
 *     makes each photo taller than most laptop viewports have room for below
 *     the heading and caption text — the section ran past the fold and
 *     forced a scroll to see card three. Fixed the same way Hero/MissionIntro
 *     fill their viewport (`md:` only — mobile keeps the fixed aspect ratio
 *     since it's already scrolling through the whole page anyway): the
 *     section is pinned to exactly the remaining viewport height
 *     (`md:h-[calc(100vh-115px)]`, not `min-h` — this one should never
 *     exceed one screen), heading keeps its natural size (`shrink-0`), and
 *     the photo row fills whatever's left (`md:flex-1`) instead of deriving
 *     its height from its own width.
 *   - First attempt at that made each card its own independent flex column
 *     (photo `flex-1` inside a per-card `flex flex-col`), which fixed the
 *     overflow but broke something else: the three captions aren't the same
 *     length, so whichever one happens to wrap a line shorter left its own
 *     photo taller than the other two — an obvious height mismatch across
 *     the row. Fixed by making the photos share a single grid row instead of
 *     sizing independently: the card wrapper becomes `md:contents` (its box
 *     disappears at that breakpoint, so its photo/caption children join the
 *     outer grid directly), which — combined with `md:grid-flow-col` — lets
 *     `md:grid-rows-[1fr_auto]` place all three photos in row 1 (one shared
 *     height, since a grid row's size is one value shared by every cell in
 *     it) and all three captions in row 2 (sized to the tallest caption).
 *     `min-h-0` at every level is still required — the flex/grid default of
 *     `min-height: auto` would otherwise refuse to shrink the photo row
 *     below its intrinsic size and silently bring back the overflow.
 */
export default function WhoIHelp() {
  return (
    <section className="bg-secondary/60">
      <div className="flex flex-col gap-8 px-6 py-16 md:h-[calc(100vh-115px)] md:gap-[3.3vmax] md:px-0 md:py-[7vmax]">
        <h2 className="shrink-0 font-display text-3xl font-light text-ink md:ml-[5vmax] md:text-4xl">
          Who I <span className="italic text-primary">help</span>
        </h2>
        <div className="grid min-h-0 gap-10 md:ml-[16.3vmax] md:mr-[5vmax] md:flex-1 md:grid-flow-col md:grid-cols-3 md:grid-rows-[1fr_auto] md:gap-x-5 md:gap-y-[3.3vmax]">
          {whoIHelp.map((item) => (
            <div key={item.title} className="flex flex-col gap-6 md:contents">
              <div className="relative aspect-[6/7] w-full min-h-0 overflow-hidden rounded-lg md:aspect-auto">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 26vmax, 90vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-2 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
