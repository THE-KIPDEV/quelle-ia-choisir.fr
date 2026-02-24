import { CATEGORIES } from "@/lib/categories";
import CategoryCard from "@/components/CategoryCard";
import FAQ from "@/components/FAQ";
import { CheckCircle, TrendingUp, Globe } from "lucide-react";

const HOME_FAQ = [
  {
    question: "Quelle est la meilleure IA en 2025 ?",
    answer:
      "\u00c7a d\u00e9pend de ce que vous cherchez. Pour \u00e9crire, ChatGPT et Claude sont au coude-\u00e0-coude. Pour g\u00e9n\u00e9rer des images, Midjourney a encore une longueur d\u2019avance. Pour coder, GitHub Copilot et Cursor sont devenus incontournables. On d\u00e9taille chaque cat\u00e9gorie dans nos comparatifs.",
  },
  {
    question: "Les IA sont-elles gratuites ?",
    answer:
      "Presque toutes proposent une version gratuite, mais limit\u00e9e (nombre de messages, mod\u00e8le moins performant). ChatGPT, Claude, Gemini, Mistral\u2026 tous ont un acc\u00e8s libre. Pour d\u00e9bloquer les meilleurs mod\u00e8les, comptez entre 10 et 30 \u20ac/mois.",
  },
  {
    question: "Quelle IA pour un usage pro ?",
    answer:
      "Si le RGPD vous concerne, regardez du c\u00f4t\u00e9 de Mistral (fran\u00e7ais, donn\u00e9es h\u00e9berg\u00e9es en Europe). Sinon, Microsoft 365 Copilot et Google Gemini s\u2019int\u00e8grent directement dans vos outils de bureau. Apr\u00e8s, tout d\u00e9pend de votre m\u00e9tier et de vos besoins.",
  },
  {
    question: "L\u2019IA va-t-elle remplacer mon job ?",
    answer:
      "Peu probable. L\u2019IA automatise surtout les t\u00e2ches r\u00e9p\u00e9titives. Ceux qui savent s\u2019en servir gagnent du temps et sont plus efficaces \u2014 c\u2019est l\u00e0 que \u00e7a fait la diff\u00e9rence. C\u2019est un outil, pas un rempla\u00e7ant.",
  },
  {
    question: "ChatGPT ou Claude, lequel prendre ?",
    answer:
      "ChatGPT est plus polyvalent : plugins, GPTs custom, g\u00e9n\u00e9ration d\u2019images avec DALL-E. Claude est meilleur sur les textes longs, les analyses nuanc\u00e9es et la qualit\u00e9 du fran\u00e7ais. En gros : ChatGPT pour toucher \u00e0 tout, Claude pour \u00e9crire et analyser.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Quelle IA Choisir",
    url: "https://quelle-ia-choisir.fr",
    description:
      "Guide comparatif des meilleures intelligences artificielles en 2025",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://quelle-ia-choisir.fr/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-warm/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            <span className="gradient-text">Quelle IA choisir</span>
            <span className="text-white"> ?</span>
            <br />
            <span className="text-xl md:text-2xl font-medium text-gray-300 mt-4 block leading-relaxed">
              On a test&eacute; les IA du march&eacute; pour vous aider &agrave;
              trouver celle qu&rsquo;il vous faut
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            R&eacute;daction, images, code, vid&eacute;o, SEO, musique&hellip;
            On compare les outils IA cat&eacute;gorie par cat&eacute;gorie,
            avec des avis honn&ecirc;tes et des recommandations concr&egrave;tes.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Comparatifs par cat&eacute;gorie
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Choisissez votre domaine, on vous dit quel outil vaut le coup en 2025.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Why this guide */}
      <section className="py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Pourquoi ce guide ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div
                className="w-14 h-14 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-accent/20"
                aria-hidden="true"
              >
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">On teste vraiment</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Chaque outil est utilis&eacute; avant d&rsquo;&ecirc;tre not&eacute;.
                On &eacute;value la qualit&eacute; des r&eacute;sultats, le prix,
                la prise en main et le support du fran&ccedil;ais.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-14 h-14 bg-gradient-to-br from-success to-success-light rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-success/20"
                aria-hidden="true"
              >
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Mis &agrave; jour r&eacute;guli&egrave;rement
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Dans l&rsquo;IA, tout bouge en permanence. On met nos comparatifs
                &agrave; jour d&egrave;s qu&rsquo;un outil sort une mise &agrave; jour
                majeure ou change ses tarifs.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-14 h-14 bg-gradient-to-br from-warm to-warm-dark rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-warm/20"
                aria-hidden="true"
              >
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Pens&eacute; pour la France
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                On privil&eacute;gie les outils dispo en fran&ccedil;ais,
                conformes au RGPD, et on met en lumi&egrave;re les acteurs
                europ&eacute;ens comme Mistral AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <FAQ items={HOME_FAQ} />
        </div>
      </section>
    </>
  );
}
