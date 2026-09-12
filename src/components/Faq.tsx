import { faq } from "@/lib/content";

/**
 * Required by the copy checklist even though the original homepage has no
 * on-page FAQ (see Reynolds Rebuild § 4 for why). Native <details> keeps
 * this accessible with zero extra dependencies — a reasonable call for a
 * homepage-only assignment; swap for a Radix/shadcn accordion later if you
 * want the animation.
 */
export default function Faq() {
  return (
    <section id="faq" className="border border-dashed border-secondary-dark/60 bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold text-ink">Frequently asked questions</h2>
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
