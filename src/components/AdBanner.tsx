import { Ad } from "@/lib/types";
import { ExternalLink } from "lucide-react";

interface AdBannerProps {
  ad: Ad;
}

export default function AdBanner({ ad }: AdBannerProps) {
  return (
    <aside className="my-8 glass gradient-border rounded-xl p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Partenaire</p>
          <p className="font-bold text-gray-900 text-lg">{ad.title}</p>
          <p className="text-sm text-gray-600 mt-1">{ad.description}</p>
        </div>
        <a
          href={ad.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-accent to-warm hover:from-accent-dark hover:to-warm text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 text-sm shrink-0"
        >
          {ad.cta}
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
