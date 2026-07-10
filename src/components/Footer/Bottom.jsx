"use client";

import Link from "next/link";
import { Socials } from "../Socials";
import { useCallback } from "react";

const STORAGE_KEY = "analytics-consent-status";

const Bottom = ({ className }) => {
  const handleCookiePreferences = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }, []);

  return (
    <div className={`py-6 px-3 bg-linen text-f-primary w-full ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center md:justify-between">
        <div className="flex flex-wrap text-base font-normal whitespace-nowrap">
          <p className="ml-3 pt-4 order-last md:order-first">Design & Code — Sara Rossow © 2026</p>

          <button
            onClick={handleCookiePreferences}
            className="ml-3 pt-4 text-left transition-colors hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown underline-link-alt text-f-primary/60"
            aria-label="Reset cookie preferences and reload page"
          >
            Cookie Preferences
          </button>

          <Link
            href="/privacy"
            className="ml-3 pt-4 transition-colors  hover:opacity-80 underline-link-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown text-f-primary/60"
            aria-label="View privacy policy"
          >
            Privacy Policy
          </Link>
        </div>

        <Socials className="order-first lg:order-last lg: justify-end ml-3" />
      </div>
    </div>
  );
};

export default Bottom;
