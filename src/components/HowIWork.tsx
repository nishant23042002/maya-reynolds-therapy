import Image from "next/image";
import { howIWork } from "@/lib/content";

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
