import Image from "next/image";
import { whoIHelp } from "@/lib/content";

/**
 * Real layout, verified via devtools: the original has no card border or
 * background here — each item is a plain stack of portrait image, heading,
 * and body text, in a 3-column grid. Content note: these three cards are
 * Maya's real client segments (adults only — see content.ts comment), not
 * the original's Adults / Couples / Children & Teens.
 */
export default function WhoIHelp() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="mb-12 font-display text-3xl font-light text-ink md:mb-16 md:text-4xl">
          Who I <span className="italic text-primary">help</span>
        </h2>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {whoIHelp.map((item) => (
            <div key={item.title}>
              <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
