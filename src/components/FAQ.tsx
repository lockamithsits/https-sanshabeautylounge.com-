import type { Faq } from "@/lib/faq";

export default function FAQSection({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  return (
    <section aria-label="Frequently asked questions" className="mx-auto max-w-3xl">
      <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">{heading}</h2>
      <dl className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <dt className="text-lg font-semibold text-brand-900">
              {faq.question}
            </dt>
            <dd className="mt-2 leading-relaxed text-slate-700">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
