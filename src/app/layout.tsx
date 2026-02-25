import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://quelle-ia-choisir.fr"
  ),
  title: {
    default:
      "Quelle IA Choisir ? Comparatif des meilleures intelligences artificielles 2025",
    template: "%s | Quelle IA Choisir",
  },
  description:
    "Guide comparatif ind\u00e9pendant des meilleures IA en 2025 : r\u00e9daction, images, code, vid\u00e9o, SEO, musique, productivit\u00e9. Trouvez l\u2019outil IA adapt\u00e9 \u00e0 vos besoins.",
  keywords: [
    "quelle ia choisir",
    "meilleure ia",
    "comparatif ia",
    "intelligence artificielle",
    "chatgpt",
    "claude",
    "midjourney",
    "ia gratuite",
    "outil ia",
    "ia 2025",
  ],
  authors: [{ name: "Quelle IA Choisir" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Quelle IA Choisir",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script defer src="https://kipstats.com/tracker.js" data-site="kp_f13bb736" />
      </body>
    </html>
  );
}
