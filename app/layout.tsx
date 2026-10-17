import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bobby = localFont({
  src: "../public/fonts/bobby-jones-soft.otf",
  variable: "--font-bobby",
  display: "swap",
  fallback: ["Comfortaa", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Young and Dufe | Hand-crafted Shea Butter, Virgin Coconut Oil & Ethical Botanicals",
  description: "Empowering African women through traditionally hand-crafted Shea butter, organic Virgin Coconut oil, and pure natural botanicals with 100% traceability to origin.",
  icons: {
    icon: "/cards/1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${outfit.variable} ${bobby.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-outfit bg-brand-accent text-zinc-900 selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
