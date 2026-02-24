import { Category } from "./types";
import { redaction } from "./data/redaction";
import { images } from "./data/images";
import { codage } from "./data/codage";
import { video } from "./data/video";
import { serviceClient } from "./data/service-client";
import { seo } from "./data/seo";
import { musique } from "./data/musique";
import { productivite } from "./data/productivite";
import { education } from "./data/education";
import { marketing } from "./data/marketing";

export const CATEGORIES: Category[] = [
  redaction,
  images,
  codage,
  video,
  serviceClient,
  seo,
  musique,
  productivite,
  education,
  marketing,
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoriesBySlugs(slugs: string[]): Category[] {
  return slugs
    .map((slug) => CATEGORIES.find((c) => c.slug === slug))
    .filter((c): c is Category => c !== undefined);
}
