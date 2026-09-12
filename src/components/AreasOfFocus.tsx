import { areasOfFocus } from "@/lib/content";

/**
 * STUB — wireframe only.
 * Original section: "Our areas of expertise" — a wrapping row of pill/tag
 * elements, centered, generous letter-spacing, uppercase. Match its spacing
 * between pills and how it wraps at mobile width.
 */
export default function AreasOfFocus() {
  return (
    <section className="border border-dashed border-secondary-dark/60 bg-primary-soft">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="mb-8 text-2xl font-semibold text-ink">Areas of focus</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {areasOfFocus.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
