"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

/**
 * No original to clone — the reference's nav links out to a separate FAQ
 * page, so there's no on-homepage layout here to match (see content.ts).
 * Given that latitude, this drops the old bare centered block for
 * something with a bit more editorial shape: numbered questions, a
 * plus/minus indicator, and the same full-bleed viewport-fill treatment
 * already applied to every other section — centered rather than
 * left-inset like its siblings, a deliberate variation since a utility
 * section like FAQ reads calmer without the same asymmetric weight as the
 * marketing sections around it.
 *
 * This is a FIXED `md:h-[calc(100vh-115px)]`, not `min-h`, unlike sections
 * with images to vertically center — an accordion answer growing should
 * never change how much space this section itself claims on the page
 * (which would shove the CTA banner/footer below it up and down as items
 * opened and closed). Fixed height + `justify-center` keeps the section's
 * own footprint constant; only the content inside it grows or shrinks.
 * Three short answers comfortably fit even fully expanded — verified, not
 * assumed.
 *
 * Not built on `<details>`/`<summary>`, on purpose, after that was tried
 * first and failed: the expand/collapse needs to animate with plain CSS
 * (a grid `0fr → 1fr` row track — `fr` values are animatable, so this
 * transitions to exactly the answer's height with no JS measuring
 * pixels), and native `<details>` cannot do that in both directions.
 * Verified frame-by-frame, not assumed: opening animates fine once you
 * override the UA stylesheet's `display: none` on closed content, but
 * CLOSING a `<details>` skips the transition entirely and snaps straight
 * to hidden — and this turned out to be tied to the `<details>` element's
 * own `[open]` attribute being removed, not to what triggered the
 * removal. Driving the same class change from React state instead of the
 * native toggle (`<summary onClick>` calling `preventDefault()`) *still*
 * hit this, because the parent's `[open]` attribute was still the thing
 * flipping. The only fix that actually worked: drop `<details>` for the
 * animated pieces and use a plain `<button>` (with `aria-expanded` /
 * `aria-controls`, so the accessibility `<details>` gave up for free gets
 * re-added by hand) and a plain `<div>` whose class comes from React
 * state — an ordinary element with an ordinary class change, which has
 * none of `<details>`'s special-cased native behavior and so just
 * transitions normally, in both directions, like everything else on this
 * page.
 *
 * `overflow-hidden` + `min-h-0` on the inner wrapper are still required —
 * a grid item's default `min-height: auto` would otherwise refuse to
 * shrink below the answer's own content height and defeat the whole
 * trick (the same class of bug fixed in WhoIHelp's photo row).
 */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${index}`;

  return (
    <div className="py-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={answerId}
        className="flex w-full cursor-pointer items-start gap-5 text-left"
      >
        <span className="font-display text-sm text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-semibold text-ink">{q}</span>
        <span className="relative mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
          <span className="absolute h-[1.5px] w-4 bg-primary" />
          <span
            className={`absolute h-4 w-[1.5px] bg-primary transition-opacity duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"}`}
          />
        </span>
      </button>
      <div
        id={answerId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="ml-9 mt-3 text-sm leading-relaxed text-ink-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="bg-surface">
      <div className="flex flex-col px-6 py-20 md:h-[calc(100vh-115px)] md:flex-col md:justify-center md:px-0 md:py-0">
        <div className="mx-auto w-full md:max-w-[50vmax]">
          <h2 className="mb-10 text-center font-display text-3xl font-light text-ink md:mb-16 md:text-4xl">
            Frequently asked <span className="italic text-primary">questions</span>
          </h2>
          <div className="flex flex-col divide-y divide-border">
            {faq.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
