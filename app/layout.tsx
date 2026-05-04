import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

const serif = Fraunces({ subsets: ["latin"], style: ["normal","italic"], axes: ["SOFT","opsz"], variable: "--font-serif-next", display: "swap" });
const sans = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-sans-next", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Indo Treasure — Authentieke Indonesische kunst in Amsterdam", template: "%s — Indo Treasure" },
  description: "Galerie voor authentieke Indonesische kunst uit Java, Bali en Sumatra.",
  openGraph: { locale: "nl_NL", siteName: "Indo Treasure", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-NL" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <TopNav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
