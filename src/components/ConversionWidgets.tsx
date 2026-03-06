"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Copy, Check, Gift } from "lucide-react";

function track(name: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).kipstats?.event) {
    (window as any).kipstats.event(name, data || {});
  }
}

const PROMO_CODE = "QUELLIA25";
const PROMO_URL = "https://kipagent.com";
const BANNER_DISMISSED_KEY = "conversion_banner_dismissed";
const EXIT_SHOWN_KEY = "conversion_exit_shown";

export default function ConversionWidgets() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [exitVisible, setExitVisible] = useState(false);
  const [bannerCopied, setBannerCopied] = useState(false);
  const [exitCopied, setExitCopied] = useState(false);

  // Show banner after a short delay if not previously dismissed
  useEffect(() => {
    if (sessionStorage.getItem(BANNER_DISMISSED_KEY)) return;
    const timer = setTimeout(() => setBannerVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Exit intent detection
  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY > 10) return;
      if (exitVisible) return;
      if (sessionStorage.getItem(EXIT_SHOWN_KEY)) return;

      sessionStorage.setItem(EXIT_SHOWN_KEY, "1");
      setExitVisible(true);
      track("exit_intent_shown");
    },
    [exitVisible]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const copyPromoCode = async (source: "banner" | "exit") => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      if (source === "banner") {
        setBannerCopied(true);
        setTimeout(() => setBannerCopied(false), 2000);
      } else {
        setExitCopied(true);
        setTimeout(() => setExitCopied(false), 2000);
      }
      track("promo_code_copied", { source });
    } catch {
      // Clipboard API not available
    }
  };

  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem(BANNER_DISMISSED_KEY, "1");
    track("banner_dismissed");
  };

  const dismissExit = () => {
    setExitVisible(false);
    track("exit_intent_dismissed");
  };

  return (
    <>
      {/* Promo banner */}
      {bannerVisible && (
        <div className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4 animate-slide-up">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-4 md:p-5 shadow-2xl border border-white/10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
              <Gift className="w-5 h-5 text-accent" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm md:text-base">
                -25% sur KipAgent avec le code :
              </p>
              <button
                onClick={() => copyPromoCode("banner")}
                className="mt-1 inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-mono text-sm px-3 py-1 rounded-lg transition-colors"
              >
                {PROMO_CODE}
                {bannerCopied ? (
                  <Check className="w-3.5 h-3.5 text-green-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                )}
              </button>
            </div>
            <button
              onClick={dismissBanner}
              className="text-white/50 hover:text-white transition-colors shrink-0"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Exit intent modal */}
      {exitVisible && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={dismissExit}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-7 md:p-9 animate-scale-in">
            <button
              onClick={dismissExit}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-lg shadow-accent/25">
                <Gift className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Avant de partir...
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Profitez de -25% sur KipAgent, la solution de chatbot IA
                pour votre site web.
              </p>

              <button
                onClick={() => copyPromoCode("exit")}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-mono text-lg px-5 py-2.5 rounded-xl transition-colors mb-4"
              >
                {PROMO_CODE}
                {exitCopied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>

              <div>
                <a
                  href={PROMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("exit_intent_cta_click")}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm shadow-lg shadow-accent/20 w-full"
                >
                  Decouvrir KipAgent
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
