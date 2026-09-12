import { ctaBanner } from "@/lib/content";

/** STUB — wireframe only. Original: centered banner, single prominent button. */
export default function CtaBanner() {
  return (
    <section id="book" className="border border-dashed border-secondary-dark/60 bg-primary">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <h2 className="mb-3 font-display text-2xl font-semibold text-white">
          {ctaBanner.heading}
        </h2>
        <p className="mb-6 text-primary-soft">{ctaBanner.body}</p>
        <a
          href="#"
          className="inline-block rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-strong"
        >
          {ctaBanner.cta}
        </a>
      </div>
    </section>
  );
}
