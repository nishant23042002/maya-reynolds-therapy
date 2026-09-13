import { services } from "@/lib/content";

function ServiceCard({ title, body }: { title: string; body: string }) {
  return (
    <>
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
      <span className="w-fit rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent">
        Learn more
      </span>
    </>
  );
}

export default function Services() {
  const [first, second, third] = services;

  return (
    <section id="services" className="bg-surface">
      <div className="flex flex-col gap-10 px-6 py-20 md:min-h-[calc(100vh-115px)] md:flex-col md:justify-center md:px-0 md:py-0">
        <div className="md:grid md:ml-[min(8.75vmax,8.75vw)] md:mr-[min(5vmax,5vw)] md:grid-cols-[min(25.4vmax,25.4vw)_minmax(0,1fr)] md:gap-x-[min(4.4vmax,4.4vw)]">
          <h2 className="font-display text-3xl font-light text-ink md:text-4xl">
            My <span className="italic text-primary">specialties</span>
          </h2>

          <div className="mt-10 flex flex-col gap-16 md:mt-0 md:gap-[6vmax]">
            <div className="grid gap-10 md:grid-flow-col md:grid-cols-2 md:grid-rows-[auto_auto_auto] md:gap-x-[min(4.4vmax,4.4vw)] md:gap-y-5">
              <div className="flex flex-col gap-4 md:contents">
                <ServiceCard title={first.title} body={first.body} />
              </div>
              <div className="flex flex-col gap-4 md:contents">
                <ServiceCard title={second.title} body={second.body} />
              </div>
            </div>

            <div className="flex flex-col gap-4 md:max-w-[min(25.4vmax,25.4vw)]">
              <ServiceCard title={third.title} body={third.body} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
