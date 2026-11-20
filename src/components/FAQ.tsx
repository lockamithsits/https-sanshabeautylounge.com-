"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faq";

/**
 * FAQ accordion — tap a question to open its answer.
 *
 * The markup stays <dl>/<dt>/<dd> with the answer text byte-identical
 * to the FAQPage JSON-LD (the QA script matches visible <dd> text
 * against the schema), so answers are only hidden with CSS, never
 * removed from the HTML. First answer starts open so the pattern
 * is visible; everything stays in the DOM for crawlers.
 */
export default function FAQSection({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-label="Frequently asked questions" className="mx-auto max-w-3xl">
      <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">{heading}</h2>
      <dl className="mt-6 space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={faq.question}
              className="rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <dt>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="flex min-h-11 w-full items-center justify-between gap-3 rounded-xl p-5 text-left text-lg font-semibold text-brand-900 hover:bg-cream-50"
                >
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className={`inline-block shrink-0 text-accent-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                className={`px-5 pb-5 leading-relaxed text-slate-700 ${isOpen ? "" : "hidden"}`}
              >
                {faq.answer}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
