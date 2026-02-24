import { Ad } from "./types";

export const ADS: Ad[] = [
  {
    partner: "KipAgent",
    url: "https://kipagent.com",
    title: "Cr\u00e9ez votre agent IA sur mesure",
    description:
      "KipAgent vous permet de concevoir, entra\u00eener et d\u00e9ployer des agents IA personnalis\u00e9s adapt\u00e9s \u00e0 votre activit\u00e9. Automatisez vos t\u00e2ches r\u00e9p\u00e9titives en quelques clics.",
    cta: "D\u00e9couvrir KipAgent",
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
    title: "D\u00e9ployez un chatbot IA en 5 minutes",
    description:
      "Smart-Bot est la solution fran\u00e7aise pour cr\u00e9er des chatbots intelligents sans coder. Int\u00e9gration facile sur votre site web, WhatsApp ou Messenger.",
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
