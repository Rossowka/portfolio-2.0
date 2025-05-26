"use client";

import { useState, useEffect, useCallback } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "analytics-consent-status";
const CONSENT_VALUES = {
  ACCEPTED: "accepted",
  DECLINED: "declined",
};

export default function ConsentManager() {
  const [consentStatus, setConsentStatus] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  // Initialize consent status from localStorage
  useEffect(() => {
    const savedConsent = localStorage.getItem(STORAGE_KEY);

    if (savedConsent === CONSENT_VALUES.ACCEPTED) {
      setConsentStatus(true);
    } else if (savedConsent === CONSENT_VALUES.DECLINED) {
      setConsentStatus(false);
    } else {
      // Only show banner if no previous decision was made
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = useCallback((accepted) => {
    const value = accepted ? CONSENT_VALUES.ACCEPTED : CONSENT_VALUES.DECLINED;
    localStorage.setItem(STORAGE_KEY, value);
    setConsentStatus(accepted);
    setShowBanner(false);
  }, []);

  const shouldShowBanner = consentStatus === null && showBanner;

  return (
    <>
      <SpeedInsights />
      {consentStatus === true && <Analytics />}

      <AnimatePresence>
        {shouldShowBanner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="fixed inset-x-0 bottom-0 z-50 bg-s-primary border-t border-[rgb(174,181,185)]/25 p-4 shadow-lg backdrop-blur-sm"
            role="dialog"
            aria-label="Cookie consent"
            aria-live="polite"
          >
            <div className="mx-auto flex max-w-[77.5rem] flex-col items-center justify-between gap-4 px-4 md:flex-row lg:px-8">
              <p className="text-xs font-medium leading-relaxed">
                This site uses minimal anonymized analytics to improve your
                experience.{" "}
                <a
                  href="/privacy"
                  className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
                  aria-label="View privacy policy"
                >
                  See privacy policy
                </a>
                .
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleConsent(true)}
                  className="rounded border bg-accent px-4 py-2 text-white transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
                  aria-label="Accept analytics cookies"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleConsent(false)}
                  className="rounded border border-accent/20 px-4 py-2 text-accent transition-colors hover:border-accent/60 hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
                  aria-label="Decline analytics cookies"
                >
                  Decline
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
