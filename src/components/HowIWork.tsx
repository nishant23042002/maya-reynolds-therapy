import Image from "next/image";
import { howIWork } from "@/lib/content";

/**
 * Real measurements, pulled from conejovalleycounseling.com's live DOM at
 * 1425px and 1920px widths — "How We Work": eyebrow + H2 top-left, a
 * two-column paragraph block below (first column leads with a distinct
 * sentence, same lead/rest shape as MissionIntro), a text link, and a tall
 * portrait bled to the right edge. Confirmed vw-consistent:
 * text content starts 8.75vw from the left — identical to every other
 * section's left inset — and the portrait's own left edge sits at a very
 * consistent 76.5vw regardless of viewport width, bleeding from there to
 * the section's right edge. The two text columns are fixed-equal-width
 * with the sitewide fixed 20px gutter between them (`gap-x-5`), and the
 * second column's paragraph starts level with the FIRST column's top line,
 * not the first column's second paragraph — i.e. it's a 2-column grid row,
 * not two independently-flowing blocks. Mobile (≤767px) DOM order, checked
 * directly rather than assumed: eyebrow, H2, the photo (full-width,
 * `aspect-[3/2]` — a wide landscape crop, not the desktop bleed's tall
 * portrait one), then both paragraphs, then the link — the photo sits
 * between the heading and the text, not after everything.
 *
 * The reference renders its lead sentence as its own smaller, bold,
 * separate paragraph rather than an inline run — but reusing that literally
 * (a long sentence in tiny bold body-copy) would be a one-off treatment
 * found nowhere else on this site. MissionIntro already established the
 * house convention for this exact lead/rest shape (`text-xs uppercase
 * tracking-wide`, its own block, `mb-2`), so this uses that instead of the
 * reference's specific styling, matching HowIWork to its own sibling
 * sections rather than to the reference in isolation.
 *
 * Three deliberate divergences from a literal copy, all continuing patterns
 * already applied elsewhere on this rebuild:
 *   - Fills the full remaining viewport height below the header
 *     (`md:min-h-[calc(100vh-115px)]`, content vertically centered). The
 *     reference's own version is content-driven and taller than one screen
 *     at both widths tested.
 *   - The portrait bleeds to the right edge and stretches to match the
 *     text column's height via the same `absolute inset-y-0` /
 *     `position:relative`-wrapper technique used for Hero's and
 *     MissionIntro's images, rather than the reference's own fixed-aspect
 *     contained image.
 *   - The closing link is styled as the same solid pill button used in
 *     Hero (`rounded-full bg-accent-strong ... text-white`), not the
 *     reference's underlined text link — this section sits on the same
 *     mint (`bg-primary-soft`) background as Hero, so the identical
 *     treatment reads as one consistent button style rather than a
 *     mismatched one-off.
 */
export default function HowIWork() {
  return (
    <section className="bg-primary-soft">
      <div className="px-6 py-16 md:min-h-[calc(100vh-115px)] md:flex md:flex-col md:justify-center md:px-0 md:py-[7vmax]">
        <div className="md:relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[23.5vmax] md:block">
            <Image
              src={howIWork.image.src}
              alt={howIWork.image.alt}
              fill
              sizes="24vmax"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-8 md:ml-[8.75vmax] md:mr-[27vmax]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
                {howIWork.eyebrow}
              </p>
              <h2 className="max-w-md font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                {howIWork.heading}
              </h2>
            </div>

            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg md:hidden">
              <Image src={howIWork.image.src} alt={howIWork.image.alt} fill sizes="(max-width: 767px) 100vw, 0px" className="object-cover" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:gap-x-5">
              {howIWork.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.8] text-ink-muted">
                  {p.lead && (
                    <strong className="mb-2 block text-xs uppercase tracking-wide text-ink">
                      {p.lead}
                    </strong>
                  )}
                  {p.rest}
                </p>
              ))}
            </div>
            <a
              href="#about"
              className="w-fit rounded-full bg-accent-strong px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent"
            >
              {howIWork.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
