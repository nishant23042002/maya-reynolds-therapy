import Image from "next/image";
import { mission } from "@/lib/content";

/**
 * Real measurements, pulled from conejovalleycounseling.com's live DOM at
 * two viewport widths (1425px and 1920px) — and confirmed as true `vmax`
 * (max of viewport width/height), not `vw`: swapping width and height at
 * the same magnitude (1425×900 vs 900×1425) left the section's own padding
 * pixel-for-pixel identical, which only happens if it's keyed to
 * `max(vw, vh)` rather than width alone. Same Fluid Engine full-bleed
 * pattern as Hero/Navbar (no max-width cap), just with its own numbers:
 *   - Section padding: 7vmax top/bottom (`calc(70vmax / 10)` in their CSS)
 *   - Text block starts at 8.75vmax from the left; the H2 itself wraps at
 *     ~47.7vmax; the two paragraphs below it sit in a 2-column row, each
 *     25.1vmax wide, with a FIXED 20px gap between them (confirmed fixed,
 *     not vmax — identical in raw px at both widths tested, unlike
 *     everything else here) — `gap-x-5` is exactly 20px, no arbitrary value
 *     needed
 *   - Gap between the H2 and the paragraph row: ~3.3vmax (`gap-y-[3.3vmax]`
 *     on the grid, rather than a margin on either row)
 *   - Portrait: bled to the right edge, 30.1vmax wide
 *   - Mobile (≤767px, same breakpoint as Hero): everything full width with
 *     a 6vw inset, but the ORIGINAL REORDERS content — heading, then the
 *     first paragraph, then the photo, THEN the second paragraph
 *     (`order-2`/`order-4` on the two paragraphs specifically, not both the
 *     same, so the `order-3` photo lands between them)
 *
 * Two departures from a literal copy of those measurements, both fixes for
 * real problems rather than reference-matching:
 *   - The reference stretches its photo to match the TEXT block's own
 *     height exactly (confirmed: top aligns with the H2, bottom sits a
 *     fixed gap above the text's own bottom). That works for their landscape
 *     beach photo at any crop ratio, but Maya's photo is a portrait
 *     headshot — with her short bio, the text block is barely a few hundred
 *     pixels tall, and stretching a headshot into that wide/short frame
 *     with `object-top` cropped down to just hair. Fixed with a
 *     `md:min-h-[40vmax]` floor on the shared wrapper (≈ a 3:4 ratio at the
 *     photo's own 30.1vmax width) — the photo still stretches to match
 *     whatever the wrapper resolves to via `inset-y-0`, but now that's
 *     never shorter than a normal portrait crop. The text grid is
 *     vertically centered against that same floor via `flex items-center`
 *     on the wrapper — NOT `h-full` + `content-center` on the grid itself,
 *     which was the first attempt and silently failed: percentage heights
 *     don't reliably resolve against a parent whose height comes only from
 *     `min-height` (no explicit `height`), so the grid stayed pinned to the
 *     top at its own natural height with all the slack space left below it
 *     (confirmed via devtools — 0px gap above the text, 500px+ below at a
 *     1920×1080 test). Flexbox `align-items` centers a child by its actual
 *     box regardless of that limitation, which is why it's used instead.
 *   - Section fills the full remaining viewport height below the header
 *     (`min-h-[calc(100vh-115px)]`, matching Hero's treatment — see
 *     Hero.tsx), content centered. `md:` only, same as Hero, so mobile
 *     keeps its natural content height.
 *
 * This doubles as the "About" section — the nav's #about anchor points
 * here, so Maya's headshot is the portrait.
 */
export default function MissionIntro() {
  return (
    <section id="about" className="bg-surface">
      <div className="px-6 py-16 md:flex md:min-h-[calc(100vh-115px)] md:flex-col md:justify-center md:px-0 md:py-[7vmax]">
        <div className="md:relative md:flex md:min-h-[40vmax] md:items-center">
          {/* Portrait — desktop only, bled to the right edge, stretches to
              match the wrapper's height (floor of 40vmax, or the text
              block's own height if that ends up taller) */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[30.1vmax] md:block">
            <Image
              src={mission.portrait.src}
              alt={mission.portrait.alt}
              fill
              sizes="31vmax"
              className="object-cover object-top"
            />
          </div>

          {/* Text block — normal flow, defines the wrapper's height above
              its min-height floor. Grid + `order` so mobile can stack in
              the original's actual order (heading, para 1, photo, para 2)
              while desktop lays the two paragraphs side by side under a
              full-width heading, vertically centered against the photo. */}
          <div className="grid grid-cols-1 gap-8 md:ml-[8.75vmax] md:mr-[33vmax] md:grid-cols-2 md:gap-x-5 md:gap-y-[3.3vmax]">
            <h2 className="order-1 max-w-md font-display text-3xl font-light leading-tight text-ink md:order-none md:col-span-2 md:max-w-[47.7vmax] md:text-4xl">
              {mission.introLine}
            </h2>
            {mission.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`${i === 0 ? "order-2" : "order-4"} text-[15px] leading-[1.8] text-ink-muted md:order-none`}
              >
                {p.lead && (
                  <strong className="mb-2 block text-xs uppercase tracking-wide text-ink">
                    {p.lead}
                  </strong>
                )}
                {p.rest}
              </p>
            ))}

            {/* Portrait — mobile only, sits between the two paragraphs to
                match the original's actual content order */}
            <div className="relative order-3 aspect-[3/4] w-full overflow-hidden rounded-lg md:hidden">
              <Image
                src={mission.portrait.src}
                alt={mission.portrait.alt}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
