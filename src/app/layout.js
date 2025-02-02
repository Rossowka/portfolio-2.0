import { inriaSerif, plusJakartaSans } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Sara Rossow • Product Designer & Frontend Developer",
  description: "The sweet spot of product design. Delivering delightful experiences through design and craft of interactive websites. Currently based in Germany.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inriaSerif.variable}`}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
