import { inriaSerif, plusJakartaSans } from "@/utils/fonts";
import "./globals.css";
import { NavBar, Footer } from "@/components";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Sara Rossow • Digital Designer & Developer",
  description:
    "The sweet spot of product design. Delivering delightful experiences through thoughtful design and craft of beautiful interfaces.",
  metadataBase: new URL("https://www.sararossow.com"), //change to baseURL that will be located in sitemap (you also have to create that)
  alternates: {
    canonical: "/", // Canonical URL to prevent duplicate content issues
  },
  openGraph: {
    title: "Sara Rossow • Digital Designer & Frontend Developer",
    description:
      "The sweet spot of product design. Delivering delightful experiences through thoughtful design and craft of beautiful interfaces.",
    url: "https://www.sararossow.com", //change to baseURL that will be located in sitemap (you also have to create that)
    siteName: "Sara Rossow Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sara Rossow: Digital Designer & Frontend Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  keywords: [
    "product design",
    "UX/UI design",
    "digital design",
    "designer Hamburg",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`font-sans text-base bg-s-primary text-f-primary ${plusJakartaSans.variable} ${inriaSerif.variable}`}
    >
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          href="/manifest.json"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />

        {/* Structured data (JSON-LD) for better search engine understanding of my content */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sara Rossow",
              url: "https://www.sararossow.com",
              jobTitle: "Product Designer & Frontend Developer",
              sameAs: [
                "https://dribbble.com/Rossowka",
                "https://www.linkedin.com/in/sararossow",
                "https://github.com/Rossowka",
                "https://www.instagram.com/sararossow",
              ],
              worksFor: {
                "@type": "Organization",
                name: "HAWE Hydraulik",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
