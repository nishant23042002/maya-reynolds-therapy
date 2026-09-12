import { nav, site } from "@/lib/content";

/**
 * STUB — wireframe only.
 * Original footer is a 4-column layout: blurb, nav links, contact, legal.
 * Match that column structure and its breakpoint for stacking on mobile.
 */
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-2 text-sm">Licensed Clinical Psychologist</p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">
            Navigate
          </p>
          <ul className="space-y-2 text-sm">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">
            Contact
          </p>
          <p className="text-sm">{site.address}</p>
          <p className="text-sm">{site.email}</p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">
            Legal
          </p>
          <p className="text-sm text-white/50">
            Fictional practice created for a Grow My Therapy skills assessment.
          </p>
        </div>
      </div>
    </footer>
  );
}
