import { services } from "@/lib/content";

/**
 * STUB — wireframe only.
 * Original section: "Our specialties" — 4 cards with a "LEARN MORE" link.
 * You're building 3 (see content.ts comment — the checklist asks for
 * exactly three services). Keep the same card visual language as the
 * original (image or icon top, heading, body, link) just in a 3-up grid
 * instead of 4-up. "LEARN MORE" can stay a visual affordance — don't build
 * real destination pages, the assignment is homepage-only.
 */
export default function Services() {
  return (
    <section id="services" className="border border-dashed border-secondary-dark/60 bg-base">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-2xl font-semibold text-ink">My specialties</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg border border-border bg-surface p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-ink-muted">{service.body}</p>
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                Learn more
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
