import { FAQ as FAQType } from "@/lib/types";

interface FAQProps {
  items: FAQType[];
  categoryTitle?: string;
}

export default function FAQ({ items, categoryTitle }: FAQProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {categoryTitle
          ? `Questions fr\u00e9quentes sur ${categoryTitle}`
          : "Questions fr\u00e9quentes"}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={index}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-4 md:p-5 font-medium text-gray-900 hover:bg-gray-50 transition-colors">
              <span className="pr-4">{item.question}</span>
              <svg
                className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 md:px-5 pb-4 md:pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
