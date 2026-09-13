import { faq } from "@/lib/content";

/**
 * Required by the copy checklist even though the original homepage has no
 * on-page FAQ — its nav links to a separate FAQ page, so there's no layout
 * to clone here. Native <details> keeps this accessible with zero extra
 * dependencies, a reasonable call for a homepage-only assignment.
 */
export default function Faq() {
  return (
    <section id="faq" className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="mb-10 font-display text-3xl font-light text-ink md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-border">
          {faq.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-ink-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
