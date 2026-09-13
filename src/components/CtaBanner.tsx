import Image from "next/image";
import { ctaBanner } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section id="book" className="bg-primary-soft">
      <div className="px-6 py-16 md:min-h-[calc(100vh-115px)] md:flex md:flex-col md:justify-center md:px-0 md:py-[7vmax]">
        <div className="md:relative md:flex md:min-h-[45vmax] md:items-center">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(34vmax,34vw)] md:block">
            <Image
              src={ctaBanner.image.src}
              alt={ctaBanner.image.alt}
              fill
              sizes="35vmax"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-4 md:ml-[min(8.75vmax,8.75vw)] md:mr-[min(40vmax,40vw)]">
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
