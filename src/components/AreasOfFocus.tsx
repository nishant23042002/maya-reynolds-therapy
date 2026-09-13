import { areasOfFocus } from "@/lib/content";

/**
 * Real layout, verified via devtools on conejovalleycounseling.com's "Our
 * areas of expertise" section: heading top-left (not centered), a two-column
 * list of plain uppercase items to the right — each row divided by a
 * bottom border, not the pill/badge tags a first guess would reach for.
 */
export default function AreasOfFocus() {
  const mid = Math.ceil(areasOfFocus.length / 2);
  const columns = [areasOfFocus.slice(0, mid), areasOfFocus.slice(mid)];

  return (
    <section className="bg-base">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[minmax(0,1fr)_2fr] md:items-start md:gap-16 md:py-28">
        <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
          Our areas of <span className="italic text-primary">focus</span>
        </h2>
        <div className="grid gap-x-10 sm:grid-cols-2">
          {columns.map((col, i) => (
            <ul key={i}>
              {col.map((tag) => (
                <li
                  key={tag}
                  className="border-b border-border py-4 text-xs font-semibold uppercase tracking-wide text-ink-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
