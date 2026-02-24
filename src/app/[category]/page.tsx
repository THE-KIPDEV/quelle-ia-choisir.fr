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
import CategoryIcon from "@/components/CategoryIcon";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

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
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: category.shortTitle },
            ]}
          />
          <div className="flex items-center gap-5 mb-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-xl shadow-accent/25 icon-glow shrink-0">
              <CategoryIcon name={category.icon} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              {category.title}
            </h1>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
            {category.heroDescription}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Table of contents */}
        <TableOfContents tools={category.tools} />

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
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
        <section id="comment-choisir" className="mt-14 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Comment choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.selectionCriteria.map((criteria, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {criteria.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {criteria.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section
          id="verdict"
          className="mt-14 bg-gradient-to-br from-success/5 via-success/10 to-success/5 border border-success/15 rounded-2xl p-7 md:p-9 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-success to-success-light rounded-xl flex items-center justify-center shadow-lg shadow-success/20">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            Notre verdict
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {category.recommendation}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <FAQ items={category.faq} categoryTitle={category.shortTitle} />
        </section>

        {/* Related categories */}
        {relatedCategories.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cat&eacute;gories connexes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedCategories.map((cat) => (
                <CategoryCard key={cat.slug} category={cat} />
              ))}
            </div>
          </section>
        )}

        {/* CTA partenaire */}
        {ads.length > 0 && (
          <section className="mt-14 text-center glass gradient-border rounded-2xl p-8">
            <p className="text-gray-500 mb-4">
              Besoin d&rsquo;une solution IA ?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {ads.map((ad) => (
                <a
                  key={ad.partner}
                  href={ad.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-medium px-5 py-2.5 rounded-xl transition-all text-sm shadow-lg shadow-accent/15"
                >
                  {ad.cta}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour &agrave; toutes les cat&eacute;gories
          </Link>
        </div>
      </div>
    </>
  );
}
