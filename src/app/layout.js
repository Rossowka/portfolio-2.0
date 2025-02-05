import { inriaSerif, plusJakartaSans } from "@/utils/fonts";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*
  [] add a footer
  [] add analytics
  [] add speed insights
  [] add metadata resource: https://github.com/Rossowka/portfolio-starter-kit/blob/main/app/layout.tsx
*/

export const metadata = {
  title: "Sara Rossow • Product Designer & Frontend Developer",
  description:
    "The sweet spot of product design. Delivering delightful experiences through design and craft of interactive websites.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`font-sans text-base bg-s-primary text-f-primary ${plusJakartaSans.variable} ${inriaSerif.variable}`}
    >
      <body className="antialiased">
        <NavBar />
        <main>{children}</main>
        {/* footer */}
      </body>
    </html>
  );
}
