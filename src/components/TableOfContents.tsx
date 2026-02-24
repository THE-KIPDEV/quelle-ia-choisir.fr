import { Tool } from "@/lib/types";

interface TableOfContentsProps {
  tools: Tool[];
}

export default function TableOfContents({ tools }: TableOfContentsProps) {
  return (
    <nav className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
        Sommaire
      </h2>
      <ol className="space-y-2 text-sm">
        {tools.map((tool, index) => (
          <li key={tool.slug}>
            <a
              href={`#${tool.slug}`}
              className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-linear-to-br from-accent to-accent-dark text-white text-xs font-bold shrink-0">
                {index + 1}
              </span>
              {tool.name}
            </a>
          </li>
        ))}
        <li>
          <a href="#comment-choisir" className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-gray-500 text-xs shrink-0" aria-hidden="true">?</span>
            Comment choisir ?
          </a>
        </li>
        <li>
          <a href="#verdict" className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-success/10 text-success text-xs font-bold shrink-0" aria-hidden="true">&#10003;</span>
            Notre verdict
          </a>
        </li>
        <li>
          <a href="#faq" className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-gray-500 text-xs shrink-0" aria-hidden="true">?</span>
            FAQ
          </a>
        </li>
      </ol>
    </nav>
  );
}
