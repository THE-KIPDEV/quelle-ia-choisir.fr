import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategoryBySlug, getCategoriesBySlugs } from "@/lib/categories";
import { getAdsForCategory } from "@/lib/ads";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import ComparisonTable from "@/components/ComparisonTable";
import ToolCard from "@/components/ToolCard";
import AdBanner from "@/components/AdBanner";
import FAQ from "@/components/FAQ";
import CategoryCard from "@/components/CategoryCard";
import Link from "next/link";

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      type: "article",
      locale: "fr_FR",
    },
    alternates: {
      canonical: `/${category.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const ads = getAdsForCategory(category.slug);
  const relatedCategories = getCategoriesBySlugs(category.relatedCategories);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: category.title,
    description: category.metaDescription,
    author: { "@type": "Organization", name: "Quelle IA Choisir" },
    publisher: { "@type": "Organization", name: "Quelle IA Choisir" },
    datePublished: "2025-01-15",
    dateModified: "2025-02-20",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: category.shortTitle },
            ]}
          />
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl" aria-hidden="true">
              {category.icon}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {category.title}
            </h1>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
            {category.heroDescription}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {/* Table of contents */}
        <TableOfContents tools={category.tools} />

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tableau comparatif
        </h2>
        <ComparisonTable tools={category.tools} />

        {/* Ad after comparison table */}
        {ads.length > 0 && <AdBanner ad={ads[0]} />}

        {/* Detailed tool cards */}
        <div className="space-y-8">
          {category.tools.map((tool, index) => (
            <ToolCard key={tool.slug} tool={tool} rank={index + 1} />
          ))}
        </div>

        {/* Second ad after tools */}
        {ads.length > 1 && <AdBanner ad={ads[1]} />}

        {/* Selection criteria */}
        <section id="comment-choisir" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Comment choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.selectionCriteria.map((criteria, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-5"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {criteria.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {criteria.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section
          id="verdict"
          className="mt-12 bg-gradient-to-r from-success/5 to-success/10 border border-success/20 rounded-xl p-6 md:p-8 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg
              className="w-7 h-7 text-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Notre verdict
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {category.recommendation}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <FAQ items={category.faq} categoryTitle={category.shortTitle} />
        </section>

        {/* Related categories */}
        {relatedCategories.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cat&eacute;gories connexes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedCategories.map((cat) => (
                <CategoryCard key={cat.slug} category={cat} />
              ))}
            </div>
          </section>
        )}

        {/* CTA partenaire */}
        {ads.length > 0 && (
          <section className="mt-12 text-center bg-gray-50 rounded-xl p-8">
            <p className="text-gray-600 mb-3">
              Besoin d&rsquo;une solution IA ?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {ads.map((ad) => (
                <a
                  key={ad.partner}
                  href={ad.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  {ad.cta}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Back to home */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-accent hover:text-accent-dark font-medium transition-colors"
          >
            &larr; Retour &agrave; toutes les cat&eacute;gories
          </Link>
        </div>
      </div>
    </>
  );
}
