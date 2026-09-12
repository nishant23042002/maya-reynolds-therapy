import { howIWork } from "@/lib/content";

/**
 * STUB — wireframe only.
 * Original section: "How we work" — a single narrative block (title + 2
 * paragraphs in the real original, condensed to one paragraph here since
 * this is the paraphrased version), max-width constrained for readability,
 * centered secondary CTA below it. Match its vertical rhythm (space above/
 * below) against the original.
 */
export default function HowIWork() {
  return (
    <section className="border border-dashed border-secondary-dark/60 bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-ink">{howIWork.heading}</h2>
        <p className="mb-6 text-ink-muted">{howIWork.body}</p>
        <a href="#about" className="font-semibold text-primary underline underline-offset-4">
          {howIWork.cta}
        </a>
      </div>
    </section>
  );
}
