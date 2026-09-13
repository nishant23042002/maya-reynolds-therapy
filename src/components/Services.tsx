import { services } from "@/lib/content";

/**
 * Real layout, verified via devtools: the original's specialty cards have no
 * border or background — plain text blocks (heading, body, "Learn more"
 * link). Kept borderless to match. Three cards, not the original's four —
 * the assignment checklist asks for exactly three services pulled from
 * Maya's profile. "Learn more" stays a visual affordance only; the
 * assignment is homepage-only, no destination page needed.
 */
export default function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="mb-12 font-display text-3xl font-light text-ink md:mb-16 md:text-4xl">
          My <span className="italic text-primary">specialties</span>
        </h2>
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="mb-3 font-display text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-ink-muted">{service.body}</p>
              <span className="text-xs font-semibold uppercase tracking-wide text-primary underline underline-offset-4">
                Learn more
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
