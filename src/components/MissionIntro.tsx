import { mission } from "@/lib/content";

/**
 * STUB — wireframe only.
 * Original section: the "you're holding onto hope..." intro — two
 * paragraphs, generous max-width for readability, sits directly under the
 * hero before "Who we help."
 */
export default function MissionIntro() {
  return (
    <section id="about" className="border border-dashed border-secondary-dark/60 bg-base">
      <div className="mx-auto max-w-3xl space-y-4 px-6 py-16 text-ink-muted">
        {mission.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
