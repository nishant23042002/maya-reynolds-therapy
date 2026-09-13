import Image from "next/image";
import { office, site } from "@/lib/content";

/**
 * The new section required by Part 3 — doesn't exist on the original at
 * all, so there's no layout to clone here. Real judgment call territory:
 * make it feel warm and trustworthy, matching the rest of your site's
 * spacing/typography (Reynolds Rebuild § "Our Office" spec).
 *
 * Images are already wired to the real photos from Maya's profile
 * document/Drive folder — do not swap these for stock photography, the
 * checklist explicitly requires the real ones.
 */
export default function OurOffice() {
  return (
    <section id="office" className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 font-display text-3xl font-semibold text-ink">
              {office.heading}
            </h2>
            <p className="mb-4 text-ink-muted">{office.body}</p>
            <p className="text-sm font-semibold text-primary">{site.address}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {office.images.map((img) => (
              <div key={img.src} className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
