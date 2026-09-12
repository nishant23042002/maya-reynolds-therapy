import Link from "next/link";
import { nav, site } from "@/lib/content";

/**
 * WORKED EXAMPLE — study this one before you build the rest.
 *
 * Pattern to repeat in every other component:
 *   1. Import only the slice of `content.ts` this section needs.
 *   2. No hardcoded copy, no hardcoded hex colors — everything comes from
 *      content.ts (strings) or the theme tokens in globals.css (colors),
 *      via Tailwind classes like `bg-primary` / `text-ink-muted`.
 *   3. Map over arrays instead of writing one JSX block per item, so adding
 *      a nav link or a card later is a one-line change in content.ts.
 *
 * Layout note: this matches the original's structure (logo left, links
 * center/right, single CTA button, sticky on scroll) — open
 * conejovalleycounseling.com in devtools and match its spacing/breakpoints
 * before you consider this "done." That match is 25% of your grade.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold text-primary">
          {site.name}
        </Link>

        <nav className="hidden gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-strong"
        >
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
