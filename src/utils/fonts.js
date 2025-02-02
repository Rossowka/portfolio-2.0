import { Plus_Jakarta_Sans, Inria_Serif } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-sans',
});

export const inriaSerif = Inria_Serif({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-serif',
});