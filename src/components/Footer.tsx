import Link from "next/link";

const CATEGORY_LINKS = [
  { slug: "meilleure-ia-redaction", label: "IA R\u00e9daction" },
  { slug: "meilleure-ia-generation-images", label: "IA Images" },
  { slug: "meilleure-ia-codage-programmation", label: "IA Code" },
  { slug: "meilleure-ia-generation-video", label: "IA Vid\u00e9o" },
  { slug: "meilleure-ia-service-client", label: "IA Service client" },
  { slug: "meilleure-ia-seo-referencement", label: "IA SEO" },
  { slug: "meilleure-ia-musique", label: "IA Musique" },
  { slug: "meilleure-ia-productivite", label: "IA Productivit\u00e9" },
  { slug: "meilleure-ia-education", label: "IA \u00c9ducation" },
  { slug: "meilleure-ia-marketing", label: "IA Marketing" },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-primary to-primary-dark text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">
              <span className="gradient-text">Quelle IA Choisir</span>
              <span className="text-white"> ?</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Le guide comparatif ind&eacute;pendant pour trouver l&rsquo;intelligence artificielle
              adapt&eacute;e &agrave; vos besoins. Analyses d&eacute;taill&eacute;es, avis objectifs et
              recommandations actualis&eacute;es.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-3">Cat&eacute;gories</h3>
            <ul className="text-sm space-y-1.5">
              {CATEGORY_LINKS.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="hover:text-white transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-3">Nos partenaires</h3>
            <div className="space-y-2">
              <a
                href="https://kipagent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
              >
                <span className="text-sm font-medium text-white">KipAgent</span>
                <span className="block text-xs text-gray-400 mt-0.5">Agents IA sur mesure</span>
              </a>
              <a
                href="https://studio-cortex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
              >
                <span className="text-sm font-medium text-white">Studio Cortex</span>
                <span className="block text-xs text-gray-400 mt-0.5">Formation IA</span>
              </a>
              <a
                href="https://smart-bot.io"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
              >
                <span className="text-sm font-medium text-white">Smart-Bot</span>
                <span className="block text-xs text-gray-400 mt-0.5">Chatbot IA</span>
              </a>
            </div>

            <h3 className="text-white font-bold text-lg mt-6 mb-3">Liens</h3>
            <ul className="text-sm space-y-1.5">
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions l&eacute;gales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} quelle-ia-choisir.fr &mdash; Tous droits r&eacute;serv&eacute;s</p>
        </div>
      </div>
    </footer>
  );
}
