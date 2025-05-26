import { HeadingM } from "@/components/Text";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <section className="pt-24 pb-2 md:pb-24 overflow-hidden md:pt-40 lg:pb-24">
        <div className="mx-auto px-4 lg:px-8 max-w-2xl">
          {/* title */}
          <div className="pt-8 pb-4 md:pt-10 md:pb-5  ">
            <h1
              className={`font-medium lg:text-5xl md:text-3xl tracking-tight leading-tight text-[4rem] `}
            >
              Privacy Policy
            </h1>
          </div>

          {/* date */}
          <div className="py-4 md:py-5">
            <p className="text-f-primary/60 font-medium text-lg leading-relaxed">
              Last updated: April 08, 2025
            </p>
          </div>

          {/* content */}
          <div className="pt-8 pb-4 md:pt-10 md:pb-5">
            <p className="font-normal text-lg leading-relaxed">
              This Privacy Policy describes how your personal information is
              processed when you visit www.sararossow.com (the “Website”).
            </p>
            {/* <p className="pt-5">
              By using the Website, you agree to the collection and use of
              information in accordance with this policy.
            </p>
            <p className="pt-5">
              If you do not agree with the terms of this Privacy Policy, please
              do not access the Website.
            </p> */}
            <h2 className="text-lg font-bold pt-10 pb-5 tracking-tight leading-tight">
              1. Personal data controller
            </h2>
            <p className="font-bold text-lg leading-relaxed">Sara Rossow</p>
            <p className="font-normal text-lg leading-relaxed">
              sararossow@mail.com
            </p>
            <p className="font-normal text-lg leading-relaxed">
              Based in Germany
            </p>
            <h2 className="text-lg font-bold pt-10 pb-5 tracking-tight leading-tight">
              2. What data is processed
            </h2>
            <p className="font-normal text-lg leading-relaxed">
              The Website does not collect any personal data directly (no forms,
              accounts, or newsletters). However, when you access the Website,
              certain technical information is collected automatically by my
              hosting provider Vercel, including:
            </p>
            <ul className="text-lg ml-8">
              <li className="list-disc mt-2">IP address (anonymized)</li>
              <li className="list-disc mt-2">Browser type and version</li>
              <li className="list-disc mt-2">Operating system</li>
              <li className="list-disc mt-2">Referrer URL</li>
              <li className="list-disc mt-2">Pages visited and time spent</li>
              <li className="list-disc mt-2">
                Device information and screen resolution
              </li>
              <li className="list-disc mt-2">
                Performance metrics (load times, etc.)
              </li>
            </ul>
            <h2 className="text-lg font-bold pt-10 pb-5 tracking-tight leading-tight">
              3. Purpose of processing personal data
            </h2>
            <p className="font-normal text-lg leading-relaxed">
              This data is collected to:
            </p>
            <ul className="text-lg ml-8">
              <li className="list-disc mt-2">Monitor site performance </li>
              <li className="list-disc mt-2">
                Understand general usage patterns
              </li>
              <li className="list-disc mt-2">
                Improve accessibility and speed
              </li>
            </ul>
            <p className="font-normal pt-5 text-lg leading-relaxed">
              The legal basis for this processing is Article 6(1)(f) GDPR
              (legitimate interest) – ensuring the smooth operation, security,
              and optimization of the website.
            </p>
            <h2 className="text-lg font-bold pt-10 pb-5 tracking-tight leading-tight">
              4. Cookies and tracking
            </h2>
            <p className="font-normal text-lg leading-relaxed">
              This site uses Vercel's built-in analytics and performance
              monitoring tools. These tools do not use cookies or persistent
              identifiers and collect only anonymized, aggregated data.
            </p>
            <p className="font-normal pt-5 text-lg leading-relaxed">
              Data may be processed on servers located outside the EU (e.g., in
              the United States). Vercel implements standard contractual clauses
              (SCCs) to safeguard international data transfers, in line with
              GDPR requirements.
            </p>
            <p className="font-normal pt-5 text-lg leading-relaxed">
              For more information, please see{" "}
              <Link
                href="https://vercel.com/legal/privacy-policy"
                className="underline hover:text-f-primary/60"
              >
                Vercel’s Privacy Policy.
              </Link>
            </p>
            <h2 className="text-lg font-bold pt-10 pb-5 tracking-tight leading-tight">
              5. Your Rights Under the GDPR
            </h2>
            <p className="font-normal text-lg leading-relaxed">
              Under the GDPR, you have the right to:
            </p>
            <ul className="text-lg ml-8">
              <li className="list-disc mt-2">
                Request access to the data collected about you
              </li>
              <li className="list-disc mt-2">
                Request correction or deletion of your data
              </li>
              <li className="list-disc mt-2">
                Object to processing based on legitimate interest
              </li>
              <li className="list-disc mt-2">
                Lodge a complaint with a statutory authority
              </li>
            </ul>
            <p className="font-normal pt-5 text-lg leading-relaxed">
              To exercise any of these rights, please contact me at the email
              address listed above.
            </p>
            <h2 className="text-lg font-bold pt-10 pb-5 tracking-tight leading-tight">
              6. Changes to this Privacy Policy
            </h2>
            <p className="font-normal text-lg leading-relaxed">
              This policy may be updated occasionally. The "Last updated" date
              will reflect any changes. Continued use of the site after updates
              implies acceptance of the changes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
