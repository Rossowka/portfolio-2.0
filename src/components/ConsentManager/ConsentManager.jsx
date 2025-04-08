"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ConsentManager() {
  // Three possible states: null (not decided), true (accepted), false (declined)
  const [consentStatus, setConsentStatus] = useState(null);

  // Check for saved consent preference on component mount
  useEffect(() => {
    const savedConsent = localStorage.getItem("analytics-consent-status");
    if (savedConsent === "accepted") {
      setConsentStatus(true);
    } else if (savedConsent === "declined") {
      setConsentStatus(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("analytics-consent-status", "accepted");
    setConsentStatus(true);
  };

  const handleDecline = () => {
    localStorage.setItem("analytics-consent-status", "declined");
    setConsentStatus(false);
  };

  return (
    <>
      {/* Only load analytics if consent explicitly given */}
      {consentStatus === true && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {/* Show the consent banner only if no choice has been made yet */}
      {consentStatus === null && (
        <div className="fixed bottom-0 left-0 right-0 bg-s-primary border-t-[0.25px] border-[rgb(174, 181, 185)] p-4 shadow-md z-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0 text-xs">
              This site uses minimal anonymized analytics to improve your
              experience. See {" "}
              <a
                href="/privacy"
                className="underline"
              >
                privacy policy
              </a>
              .
            </p>
            <div className="flex space-x-2">
              <button
                onClick={handleAccept}
                className="bg-accent border-[1px] text-white border-f-inverse hover:border-f-inverse/40 px-4 py-2 rounded"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="text-accent border-[1px] border-accent/20 hover:border-accent/60 px-4 py-2 rounded"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
