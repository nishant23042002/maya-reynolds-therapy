import Image from "next/image";
import { mission } from "@/lib/content";

/**
 * Real layout, not a guess — inspected via devtools on
 * conejovalleycounseling.com's "You're holding onto hope..." section
 * (absolute-positioned Fluid Engine blocks, canvas ≈1780px @ ≈1795px
 * viewport — coordinates below are read straight off getBoundingClientRect()):
 *
 *   - H2 block:        top 1200, height 172  → bottom edge 1372
 *   - Paragraph row:   top 1429              → gap under H2 is ~57px,
 *     noticeably more generous than a default Tailwind `mb-8` (32px)
 *   - Two paragraph blocks sit side by side with only a ~20px gap between
 *     them (`gap-6` / 24px is already a close match, left as-is)
 *   - Portrait block:  543×721 → aspect ratio ≈0.75 (tall portrait)
 *   - Section padding: computed `.content-wrapper` padding is ~125.7px,
 *     i.e. very close to Tailwind's `py-32` (128px) on desktop
 *   - Desktop split is roughly 48/52, text column left, portrait right
 *   - Body copy line-height is close to 1.8× the font size — noticeably
 *     airier than Tailwind's default `leading-relaxed` (1.625)
 *
 * Exact canvas pixels don't map 1:1 onto a responsive Tailwind rebuild
 * (Fluid Engine scales its whole canvas, not individual elements), so the
 * values above are recreated as proportions/spacing scale, not copied
 * literally — see the Reynolds Rebuild plan.
 *
 * Portrait sizing: matching the photo's own 2:3 ratio exactly (1024×1536)
 * left the box too tall/narrow at desktop widths — it read as stretched
 * rather than composed. The container instead uses the original's own
 * measured ratio (543/721 ≈ 3:4), a normal headshot-card proportion, with
 * `object-top` so `object-cover` crops from the BOTTOM of the photo only
 * (torso/background) — the face and shoulders at the top of the frame stay
 * fully visible at every breakpoint.
 *
 * Mobile: original's Squarespace mobile layout isn't worth reverse
 * engineering pixel-by-pixel since you're rebuilding in Tailwind's own
 * responsive system — stacking to one column (image below the two
 * paragraphs, which themselves stack) is the sensible equivalent.
 *
 * This doubles as the "About" section — the nav's #about anchor points
 * here, so Maya's headshot is the portrait.
 */
export default function MissionIntro() {
  return (
    <section id="about" className="bg-base">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-start md:gap-14 md:py-32">
        <div>
          <h2 className="mb-12 max-w-md font-display text-3xl font-light leading-tight text-ink md:mb-14 md:text-4xl">
            {mission.introLine}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {mission.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.8] text-ink-muted">
                {p.lead && <strong className="text-ink">{p.lead} </strong>}
                {p.rest}
              </p>
            ))}
          </div>
        </div>
        {/* aspect-[3/4] mirrors the original's own portrait-card proportion.
            object-top anchors the crop to the top of the photo, so any
            cropping happens at the bottom — the face stays fully in frame. */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
          <Image
            src={mission.portrait.src}
            alt={mission.portrait.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
