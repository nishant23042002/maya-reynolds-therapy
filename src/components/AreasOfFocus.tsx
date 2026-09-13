import { areasOfFocus } from "@/lib/content";

export default function AreasOfFocus() {
  const mid = Math.ceil(areasOfFocus.length / 2);
  const columns = [areasOfFocus.slice(0, mid), areasOfFocus.slice(mid)];

  return (
    <section className="bg-surface">
      <div className="flex flex-col gap-10 px-6 py-20 md:min-h-[calc(100vh-115px)] md:flex-col md:justify-center md:px-0 md:py-0">
        <div className="md:grid md:ml-[8.75vmax] md:mr-[5vmax] md:grid-cols-[26.15vmax_60.1vmax]">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:max-w-[250px] md:[text-wrap:wrap] md:text-[38.94px] md:leading-[1.322] md:tracking-[-0.01em]">
            Our areas of <span className="italic text-primary">focus</span>
          </h2>
          <div className="mt-10 grid gap-x-5 gap-y-0 md:mt-0 md:grid-cols-2">
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
      </div>
    </section>
  );
}
