import Image from "next/image";
import { office, site } from "@/lib/content";

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
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 767px) 100vw, 0px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
