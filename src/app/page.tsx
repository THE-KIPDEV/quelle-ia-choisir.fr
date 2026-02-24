import { CATEGORIES } from "@/lib/categories";
import CategoryCard from "@/components/CategoryCard";
import FAQ from "@/components/FAQ";
import { CheckCircle, TrendingUp, Globe } from "lucide-react";

const HOME_FAQ = [
  {
    question: "Quelle est la meilleure IA en 2025 ?",
    answer:
      "Il n\u2019existe pas de \u00ab meilleure IA \u00bb universelle. Le choix d\u00e9pend de votre besoin : ChatGPT et Claude excellent pour la r\u00e9daction, Midjourney domine pour les images, GitHub Copilot et Cursor sont les r\u00e9f\u00e9rences pour le code. Notre guide d\u00e9taille les meilleurs outils par cat\u00e9gorie pour vous aider \u00e0 faire le bon choix.",
  },
  {
    question: "Les IA sont-elles gratuites ?",
    answer:
      "La plupart des IA proposent une version gratuite limit\u00e9e et des plans payants pour un acc\u00e8s complet. ChatGPT, Claude, Gemini et Mistral offrent tous un acc\u00e8s gratuit. Les versions premium co\u00fbtent g\u00e9n\u00e9ralement entre 10 et 30 \u20ac par mois et d\u00e9bloquent les mod\u00e8les les plus performants.",
  },
  {
    question: "Quelle IA choisir pour un usage professionnel ?",
    answer:
      "Pour un usage professionnel, privil\u00e9giez les outils avec des garanties de confidentialit\u00e9 et de conformit\u00e9 RGPD. Mistral (entreprise fran\u00e7aise) h\u00e9berge les donn\u00e9es en Europe. Microsoft 365 Copilot et Google Gemini s\u2019int\u00e8grent directement dans les suites bureautiques. Le choix d\u00e9pend aussi de votre secteur d\u2019activit\u00e9.",
  },
  {
    question: "L\u2019IA va-t-elle remplacer mon m\u00e9tier ?",
    answer:
      "L\u2019IA est un outil d\u2019augmentation, pas de remplacement. Elle automatise les t\u00e2ches r\u00e9p\u00e9titives et vous permet de vous concentrer sur la cr\u00e9ativit\u00e9, la strat\u00e9gie et les relations humaines. Les professionnels qui ma\u00eetrisent l\u2019IA sont plus productifs et plus valoris\u00e9s sur le march\u00e9 du travail.",
  },
  {
    question: "Comment choisir entre ChatGPT et Claude ?",
    answer:
      "ChatGPT (OpenAI) est le plus polyvalent avec un \u00e9cosyst\u00e8me riche (plugins, GPTs, DALL-E). Claude (Anthropic) excelle dans les textes longs, la nuance et la qualit\u00e9 du fran\u00e7ais. Pour la r\u00e9daction cr\u00e9ative et les analyses approfondies, Claude est souvent pr\u00e9f\u00e9r\u00e9. Pour un usage g\u00e9n\u00e9ral et la polyvalence, ChatGPT reste la r\u00e9f\u00e9rence.",
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
              Le guide complet pour trouver l&rsquo;intelligence artificielle
              adapt&eacute;e &agrave; vos besoins
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comparez les meilleurs outils d&rsquo;IA en 2025 : r&eacute;daction,
            g&eacute;n&eacute;ration d&rsquo;images, code, vid&eacute;o, SEO,
            musique et bien plus. Des analyses d&eacute;taill&eacute;es, des avis
            objectifs et des recommandations pour chaque usage.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Explorez nos comparatifs par cat&eacute;gorie
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            S&eacute;lectionnez une cat&eacute;gorie pour d&eacute;couvrir notre
            analyse compl&egrave;te des meilleurs outils IA disponibles en 2025.
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
              <h3 className="font-bold text-gray-900 mb-2">Analyses objectives</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Chaque outil est test&eacute; et &eacute;valu&eacute; selon des
                crit&egrave;res pr&eacute;cis : qualit&eacute;, tarif, facilit&eacute;
                d&rsquo;utilisation et support du fran&ccedil;ais.
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
                Actualis&eacute; en 2025
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Le march&eacute; de l&rsquo;IA &eacute;volue vite. Nos
                comparatifs sont r&eacute;guli&egrave;rement mis &agrave; jour pour
                refl&eacute;ter les derni&egrave;res nouveaut&eacute;s et tarifs.
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
                Adapt&eacute; au march&eacute; fran&ccedil;ais
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Nous mettons en avant les outils disponibles en fran&ccedil;ais, les
                solutions conformes au RGPD et les acteurs europ&eacute;ens comme
                Mistral AI.
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
