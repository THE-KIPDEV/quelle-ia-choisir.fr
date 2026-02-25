import { Ad } from "./types";

export const ADS: Ad[] = [
  {
    partner: "KipAgent",
    url: "https://kipagent.com",
    title: "Créez votre chatbot IA sur mesure",
    description:
      "KipAgent vous permet de concevoir et déployer un chatbot IA personnalisé pour votre site web. Solution française, sans code et sécurisée.",
    cta: "Découvrir KipAgent",
    categories: [
      "meilleure-ia-codage-programmation",
      "meilleure-ia-productivite",
      "meilleure-ia-service-client",
    ],
  },
  {
    partner: "Studio Cortex",
    url: "https://studio-cortex.com",
    title: "Formez-vous \u00e0 l\u2019IA avec Studio Cortex",
    description:
      "Des formations pratiques pour ma\u00eetriser les outils d\u2019intelligence artificielle et booster votre productivit\u00e9. Cours interactifs, exercices concrets et certifications.",
    cta: "Commencer ma formation",
    categories: [
      "meilleure-ia-redaction",
      "meilleure-ia-education",
      "meilleure-ia-marketing",
      "meilleure-ia-generation-images",
    ],
  },
  {
    partner: "Smart-Bot",
    url: "https://smart-bot.io",
    title: "Discutez avec plusieurs IA en même temps",
    description:
      "Smart-Bot réunit les meilleures IA (ChatGPT, Claude, Gemini…) dans une seule interface. Comparez les réponses et trouvez la meilleure IA pour chaque question.",
    cta: "Essayer Smart-Bot gratuitement",
    categories: [
      "meilleure-ia-service-client",
      "meilleure-ia-marketing",
      "meilleure-ia-productivite",
      "meilleure-ia-seo-referencement",
    ],
  },
];

export function getAdsForCategory(categorySlug: string): Ad[] {
  return ADS.filter((ad) => ad.categories.includes(categorySlug));
}
