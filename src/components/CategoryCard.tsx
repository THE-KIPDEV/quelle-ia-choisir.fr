import Link from "next/link";
import { Category } from "@/lib/types";
import CategoryIcon from "@/components/CategoryIcon";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/${category.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 hover:scale-[1.02] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent to-accent-dark flex items-center justify-center mb-4">
        <CategoryIcon name={category.icon} className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors mb-2">
        {category.shortTitle}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
        {category.description}
      </p>
      <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-accent">
        D&eacute;couvrir
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
