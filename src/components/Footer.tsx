import { nav, services, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="flex flex-col gap-12 px-6 py-16 md:ml-[5vmax] md:mr-[5vmax] md:grid md:grid-cols-[37.4vmax_14.9vmax_18.8vmax_1fr] md:gap-0 md:px-0 md:py-[7vmax]">
        <div>
          <p className="font-display text-3xl font-semibold text-ink md:text-4xl">{site.name}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Licensed Clinical Psychologist
          </p>
          <p className="mt-6 max-w-xs text-[15px] leading-[1.8] text-ink-muted">
            We want to make getting started simple. Reach out for a free 15-minute
            consultation - whatever works best for you.
          </p>
        </div>

        <div>
          <p className="text-[15px] font-normal uppercase tracking-[1.8px] text-ink">Navigate</p>
          <ul className="mt-6 flex flex-col gap-[7px]">
            {[{ label: "Home", href: "#" }, ...nav.links].map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  className="text-[15px] text-primary transition-colors hover:text-primary-strong"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[15px] font-normal uppercase tracking-[1.8px] text-ink">Services</p>
          <ul className="mt-6 flex flex-col gap-[7px]">
            {services.map((service) => (
              <li key={service.title} className="text-[15px] text-primary">
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[15px] font-normal uppercase tracking-[1.8px] text-ink">Contact</p>
          <p className="mt-6 text-[15px] text-primary">{site.address}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-[7px] block text-[15px] text-primary transition-colors hover:text-primary-strong"
          >
            {site.email}
          </a>
          <p className="mt-6 max-w-xs text-[15px] italic text-ink-muted">
            Telehealth available anywhere in California.
          </p>
        </div>
      </div>

      <div className="bg-primary px-6 py-[9px] md:px-0">
        <p className="md:ml-[5vmax] text-[15px] text-white/80">
          Terms | Privacy Policy | © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
