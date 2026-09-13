import Image from "next/image";
import { office, site } from "@/lib/content";

/**
 * The one section with no original to clone — it doesn't exist on
 * conejovalleycounseling.com at all (added for Part 3's checklist). Given
 * creative latitude here rather than a reference to measure, but kept on
 * the same fluid-vmax full-bleed system every other section uses, so it
 * doesn't read as a different site bolted on: `md:min-h-[calc(100vh-115px)]`
 * viewport fill, `8.75vmax` left inset, a photo bleeding to the section's
 * own edge.
 *
 * Both office photos are native 4:3 landscape (checked their actual pixel
 * dimensions rather than guessing) — stretching one into a tall, narrow
 * portrait bleed like Hero/MissionIntro's headshots would crop away most
 * of the room. Instead: one photo bleeds to the right edge at a height
 * that keeps it close to its own 4:3 crop (`md:min-h-[28vmax]` on the
 * shared wrapper, chosen so the bleed photo's 36vmax width divided by that
 * height lands near 4:3, not stretched thin), and the second is a smaller
 * accent card overlapping its bottom-left corner — a bordered, shadowed
 * card floating on top, distinct from the plain full-bleed treatment used
 * everywhere else, since this is the one section where a small design
 * flourish doesn't fight an existing layout it needs to match. Mobile
 * drops the overlap (it only reads as intentional with room to breathe)
 * and simply stacks both photos edge-to-edge below the text.
 */
export default function OurOffice() {
  return (
    <section id="office" className="bg-secondary/60">
      <div className="px-6 py-16 md:min-h-[calc(100vh-115px)] md:flex md:flex-col md:justify-center md:px-0 md:py-[7vmax]">
        <div className="md:relative md:flex md:min-h-[28vmax] md:items-center">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36vmax] md:block">
            <Image
              src={office.images[0].src}
              alt={office.images[0].alt}
              fill
              sizes="37vmax"
              className="object-cover"
            />
          </div>

          <div className="pointer-events-none absolute bottom-0 right-[29vmax] hidden aspect-[4/3] w-[18vmax] translate-y-[15%] overflow-hidden rounded-lg border-4 border-surface shadow-xl md:block">
            <Image
              src={office.images[1].src}
              alt={office.images[1].alt}
              fill
              sizes="18vmax"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-4 md:ml-[8.75vmax] md:mr-[46vmax]">
            <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              {office.heading}
            </h2>
            <p className="text-ink-muted">{office.body}</p>
            <p className="text-sm font-semibold text-primary">{site.address}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 md:hidden">
          {office.images.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image src={img.src} alt={img.alt} fill sizes="100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
