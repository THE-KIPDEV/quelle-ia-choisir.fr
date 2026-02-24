import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions l\u00e9gales",
  description:
    "Mentions l\u00e9gales et politique de confidentialit\u00e9 du site quelle-ia-choisir.fr.",
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Mentions l&eacute;gales
      </h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            &Eacute;diteur du site
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le site quelle-ia-choisir.fr est &eacute;dit&eacute; par KipDev.
          </p>
          <ul className="text-gray-700 mt-2 space-y-1">
            <li>Email : yohann@kipdev.io</li>
            <li>Site web : quelle-ia-choisir.fr</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            H&eacute;bergement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site est h&eacute;berg&eacute; par Railway Corporation, 340
            S Lemon Ave #4133, Walnut, CA 91789, &Eacute;tats-Unis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Propri&eacute;t&eacute; intellectuelle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            L&rsquo;ensemble du contenu de ce site (textes, analyses,
            comparatifs, design) est prot&eacute;g&eacute; par le droit
            d&rsquo;auteur. Toute reproduction, m&ecirc;me partielle, est
            soumise &agrave; autorisation pr&eacute;alable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Liens d&rsquo;affiliation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site contient des liens vers des services partenaires
            (kipagent.com, studio-cortex.com, smart-bot.io). Ces liens sont
            clairement identifi&eacute;s. Notre ligne &eacute;ditoriale reste
            ind&eacute;pendante et nos avis sont objectifs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Protection des donn&eacute;es personnelles
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site ne collecte aucune donn&eacute;e personnelle. Aucun cookie
            de suivi n&rsquo;est utilis&eacute;. Aucun formulaire ne recueille
            d&rsquo;informations personnelles. Conform&eacute;ment au
            R&egrave;glement G&eacute;n&eacute;ral sur la Protection des
            Donn&eacute;es (RGPD), vous disposez d&rsquo;un droit
            d&rsquo;acc&egrave;s, de modification et de suppression de vos
            donn&eacute;es en contactant yohann@kipdev.io.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Limitation de responsabilit&eacute;
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les informations fournies sur ce site sont donn&eacute;es &agrave;
            titre indicatif. Les tarifs, fonctionnalit&eacute;s et
            disponibilit&eacute;s des outils IA mentionn&eacute;s peuvent
            &eacute;voluer. Nous nous effor&ccedil;ons de maintenir les
            informations &agrave; jour mais ne pouvons garantir leur exactitude
            en temps r&eacute;el.
          </p>
        </section>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="text-accent hover:text-accent-dark font-medium transition-colors"
        >
          &larr; Retour &agrave; l&rsquo;accueil
        </Link>
      </div>
    </div>
  );
}
