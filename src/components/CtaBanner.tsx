import Image from "next/image";
import { ctaBanner } from "@/lib/content";

/**
 * Real measurements, pulled from conejovalleycounseling.com's live DOM at
 * 1425px — the final "Schedule an Appointment" CTA: eyebrow + H2 + body +
 * an OUTLINED button (the only outlined, non-solid-fill button on the
 * original homepage) next to a supporting photo. Button padding
 * (19.5px/15px) and border-radius are pixel-identical to Navbar's own
 * outlined pill — confirmed the same treatment reused, not a coincidence,
 * so this uses Navbar's exact classes rather than approximating them
 * again. Heading size (47.5px) matches the same sitewide heading scale
 * used elsewhere.
 *
 * The reference bleeds two images (a thin sliver on the left, a large one
 * on the right); this keeps only the large one, same simplification
 * already applied to Hero for the same reason — a second sliver photo
 * read as clutter, not a layout worth chasing pixel-for-pixel. With the
 * sliver gone, the text column moves to the sitewide `8.75vmax` left
 * inset used everywhere else (Mission/HowIWork/OurOffice), rather than
 * the reference's own sliver-adjusted offset, and the photo bleeds to the
 * right edge at its own real proportion (~34vmax wide).
 *
 * Fills the full remaining viewport height below the header
 * (`md:min-h-[calc(100vh-115px)]`, content vertically centered), the
 * same pattern applied to every other section on this rebuild.
 *
 * The photo is a tall portrait (1800×2700, checked its actual pixel
 * dimensions rather than guessing) and this section's own text content
 * is short (eyebrow, one-line heading, one short sentence) — stretching
 * the photo to match that short text height, the way Hero/HowIWork do,
 * would squeeze a portrait into a wide letterbox band and crop away most
 * of it. Same fix as MissionIntro's headshot: a `md:min-h-[45vmax]` floor
 * on the shared wrapper (≈ the photo's own width-to-height ratio, so it
 * still stretches to fill whatever's taller, but never shrinks below a
 * normal portrait crop), with the text vertically centered against that
 * floor via `flex items-center` — not `h-full`/`content-center`, which
 * silently fails to resolve against a `min-height`-only parent (the same
 * bug found and fixed in MissionIntro).
 */
export default function CtaBanner() {
  return (
    <section id="book" className="bg-primary-soft">
      <div className="px-6 py-16 md:min-h-[calc(100vh-115px)] md:flex md:flex-col md:justify-center md:px-0 md:py-[7vmax]">
        <div className="md:relative md:flex md:min-h-[45vmax] md:items-center">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34vmax] md:block">
            <Image
              src={ctaBanner.image.src}
              alt={ctaBanner.image.alt}
              fill
              sizes="35vmax"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-4 md:ml-[8.75vmax] md:mr-[40vmax]">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {ctaBanner.eyebrow}
            </p>
            <h2 className="max-w-md font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              {ctaBanner.heading}
            </h2>
            <p className="max-w-sm text-ink-muted">{ctaBanner.body}</p>
            <a
              href="#"
              className="mt-2 inline-block rounded-full border border-primary px-[19.5px] py-[15px] text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white"
            >
              {ctaBanner.cta}
            </a>
          </div>

          <div className="relative mt-10 aspect-[3/4] w-full overflow-hidden rounded-lg md:hidden">
            <Image src={ctaBanner.image.src} alt={ctaBanner.image.alt} fill sizes="(max-width: 767px) 100vw, 0px" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
