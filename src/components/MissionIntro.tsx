import Image from "next/image";
import { mission } from "@/lib/content";

export default function MissionIntro() {
  return (
    <section id="about" className="bg-surface">
      <div className="px-6 py-16 md:flex md:min-h-[calc(100vh-115px)] md:flex-col md:justify-center md:px-0 md:py-[7vmax]">
        <div className="md:relative md:flex md:min-h-[40vmax] md:items-center">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[30.1vmax] md:block">
            <Image
              src={mission.portrait.src}
              alt={mission.portrait.alt}
              fill
              sizes="31vmax"
              className="object-cover object-top"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:ml-[8.75vmax] md:mr-[33vmax] md:grid-cols-2 md:gap-x-5 md:gap-y-[3.3vmax]">
            <h2 className="order-1 max-w-md font-display text-3xl font-light leading-tight text-ink md:order-none md:col-span-2 md:max-w-[47.7vmax] md:text-4xl">
              {mission.introLine}
            </h2>
            {mission.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`${i === 0 ? "order-2" : "order-4"} text-[15px] leading-[1.8] text-ink-muted md:order-none`}
              >
                {p.lead && (
                  <strong className="mb-2 block text-xs uppercase tracking-wide text-ink">
                    {p.lead}
                  </strong>
                )}
                {p.rest}
              </p>
            ))}

            <div className="relative order-3 aspect-[3/4] w-full overflow-hidden rounded-lg md:hidden">
              <Image
                src={mission.portrait.src}
                alt={mission.portrait.alt}
                fill
                sizes="(max-width: 767px) 100vw, 0px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
