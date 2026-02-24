export interface Tool {
  name: string;
  slug: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  pricing: string;
  pricingDetails: string;
  bestFor: string;
  rating: number;
  website: string;
  detailedDescription: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Category {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  description: string;
  heroDescription: string;
  tools: Tool[];
  selectionCriteria: {
    title: string;
    description: string;
  }[];
  recommendation: string;
  faq: FAQ[];
  relatedCategories: string[];
}

export interface Ad {
  partner: string;
  url: string;
  title: string;
  description: string;
  cta: string;
  categories: string[];
}
