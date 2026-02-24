import { Tool } from "@/lib/types";

interface ComparisonTableProps {
  tools: Tool[];
}

export default function ComparisonTable({ tools }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto mb-10">
      <table className="w-full border-collapse bg-white rounded-xl border border-gray-200 text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="text-left p-3 font-semibold rounded-tl-xl">Outil</th>
            <th className="text-left p-3 font-semibold">Tarif</th>
            <th className="text-left p-3 font-semibold hidden sm:table-cell">Id&eacute;al pour</th>
            <th className="text-center p-3 font-semibold rounded-tr-xl">Note</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr
              key={tool.slug}
              className={`border-t border-gray-100 hover:bg-accent/5 transition-colors ${
                index === tools.length - 1 ? "last:rounded-b-xl" : ""
              }`}
            >
              <td className="p-3">
                <a href={`#${tool.slug}`} className="font-semibold text-gray-900 hover:text-accent transition-colors">
                  {tool.name}
                </a>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{tool.description}</p>
              </td>
              <td className="p-3 text-gray-700">{tool.pricing}</td>
              <td className="p-3 text-gray-600 hidden sm:table-cell">{tool.bestFor}</td>
              <td className="p-3 text-center">
                <span className="inline-flex items-center gap-1 bg-accent/10 text-accent font-bold px-2 py-1 rounded text-xs">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {tool.rating}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
