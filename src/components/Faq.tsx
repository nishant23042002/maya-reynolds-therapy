"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

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
        <div className="mx-auto w-full md:max-w-[min(50vmax,50vw)]">
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
