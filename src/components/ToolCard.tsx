import { Tool } from "@/lib/types";

interface ToolCardProps {
  tool: Tool;
  rank: number;
}

export default function ToolCard({ tool, rank }: ToolCardProps) {
  return (
    <article id={tool.slug} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent font-bold text-xl shrink-0">
          {rank}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{tool.name}</h2>
          <p className="text-gray-600">{tool.description}</p>
        </div>
        <div className="flex items-center gap-1 bg-accent/10 text-accent font-bold px-3 py-1.5 rounded-lg text-sm shrink-0">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {tool.rating}/5
        </div>
      </div>

      <div className="prose prose-gray max-w-none mb-6">
        <p className="text-gray-700 leading-relaxed">{tool.detailedDescription}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold text-success flex items-center gap-2 mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Points forts
          </h3>
          <ul className="space-y-2">
            {tool.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-success mt-0.5 shrink-0" aria-hidden="true">+</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-danger flex items-center gap-2 mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Points faibles
          </h3>
          <ul className="space-y-2">
            {tool.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-danger mt-0.5 shrink-0" aria-hidden="true">&minus;</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-bold text-gray-900 text-sm">Tarif : {tool.pricing}</p>
          <p className="text-xs text-gray-500 mt-0.5">{tool.pricingDetails}</p>
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Id&eacute;al pour :</span> {tool.bestFor}
        </div>
      </div>
    </article>
  );
}
