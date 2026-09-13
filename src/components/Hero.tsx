import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="bg-primary-soft">
      <div className="py-16 md:flex md:min-h-[calc(100vh-115px)] md:flex-col md:justify-center md:py-0">
        <div className="md:relative">
          <div className="flex flex-col items-start gap-6 px-[6vw] md:ml-[42.4vw] md:mr-[8vw] md:px-0 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {hero.eyebrow}
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold text-ink md:text-5xl">
              {hero.headline}
            </h1>
            <p className="max-w-xl text-lg text-ink-muted">{hero.subtext}</p>
            <a
              href="#book"
              className="rounded-full bg-accent-strong px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent"
            >
              {hero.cta}
            </a>
          </div>

          <div className="pointer-events-none relative mt-10 h-[360px] w-full md:absolute md:inset-y-0 md:left-0 md:mt-0 md:h-auto md:w-[34.2vw]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              sizes="(max-width: 767px) 100vw, 35vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
