import Image from "next/image";
import { whoIHelp } from "@/lib/content";

export default function WhoIHelp() {
  return (
    <section className="bg-secondary/60">
      <div className="flex flex-col gap-8 px-6 py-16 md:h-[calc(100vh-115px)] md:gap-[3.3vmax] md:px-0 md:py-[7vmax]">
        <h2 className="shrink-0 font-display text-3xl font-light text-ink md:ml-[5vmax] md:text-4xl">
          Who I <span className="italic text-primary">help</span>
        </h2>
        <div className="grid min-h-0 gap-10 md:ml-[16.3vmax] md:mr-[5vmax] md:flex-1 md:grid-flow-col md:grid-cols-3 md:grid-rows-[1fr_auto] md:gap-x-5 md:gap-y-[3.3vmax]">
          {whoIHelp.map((item) => (
            <div key={item.title} className="flex flex-col gap-6 md:contents">
              <div className="relative aspect-[6/7] w-full min-h-0 overflow-hidden rounded-lg md:aspect-auto">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 26vmax, 90vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-2 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
