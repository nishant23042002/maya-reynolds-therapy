import { nav, services, site } from "@/lib/content";

/**
 * Real measurements, pulled from conejovalleycounseling.com's live DOM at
 * 1425px and 1920px widths. Confirmed vw-consistent: brand block starts
 * ~5vw from the left, and the three link columns start at fixed points
 * regardless of viewport width — 42.4vw, 57.3vw, 76.1vw — which convert
 * directly to column widths of 37.4vmax / 14.9vmax / 18.8vmax (each
 * column's width is just the gap to the next column's start; the
 * remainder to the standard 5vmax right margin becomes the last column's
 * width). Column headers: 15px, uppercase, 1.8px letter-spacing. Link/list
 * rows: 15px, ~27px line-to-line pitch. The legal bar at the very bottom
 * is a separate full-bleed band, not a fourth column in the main grid —
 * ~45px tall (about 9px padding above and below one line of text).
 *
 * Two things don't carry over at all, by design:
 *   - Colors. Every accent here (the link color, the legal bar's
 *     background) is this site's own signature teal — swapped for our own
 *     primary/accent tokens throughout, per instruction.
 *   - Content that doesn't exist for this practice. The reference is a
 *     multi-therapist group practice, so its footer has an "Our Team"
 *     column (9 names) and a phone number; Maya is a solo practitioner
 *     with no phone number anywhere in `site`. Reused the exact same
 *     column slot and width for a "Services" list instead (real content
 *     that fits the space), and the Contact column only lists what
 *     actually exists — address and email. The reference's closing
 *     "Website by [agency]" legal-bar credit is similarly replaced with a
 *     plain copyright line rather than inventing a credit that isn't true
 *     here.
 *
 * Logo is a raster image on the reference (can't clone that); this site's
 * brand mark has always been text (see Navbar), so the brand block here
 * reuses that same font-display treatment instead, just larger.
 */
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
