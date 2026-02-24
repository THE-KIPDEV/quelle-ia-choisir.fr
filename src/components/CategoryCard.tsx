import Link from "next/link";
import { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/${category.slug}`}
      className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-200"
    >
      <div className="text-4xl mb-3" aria-hidden="true">
        {category.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors mb-2">
        {category.shortTitle}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
        {category.description}
      </p>
      <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent group-hover:gap-2 transition-all">
        D&eacute;couvrir
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
