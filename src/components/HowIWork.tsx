import Image from "next/image";
import { howIWork } from "@/lib/content";

/**
 * Real layout, verified via devtools on the original's "How We Work"
 * section: full-width tinted band, a small eyebrow above the H2, a
 * two-column paragraph block (same lead/rest pattern as MissionIntro), a
 * tall portrait on the right, and an underlined text link — not a button.
 */
export default function HowIWork() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-start md:gap-14 md:py-28">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
            {howIWork.eyebrow}
          </p>
          <h2 className="mb-8 max-w-md font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            {howIWork.heading}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {howIWork.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.8] text-ink-muted">
                {p.lead && <strong className="text-ink">{p.lead} </strong>}
                {p.rest}
              </p>
            ))}
          </div>
          <a
            href="#about"
            className="mt-8 inline-block text-sm font-semibold text-primary underline underline-offset-4"
          >
            {howIWork.cta}
          </a>
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
          <Image
            src={howIWork.image.src}
            alt={howIWork.image.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
