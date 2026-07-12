import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Korepetytor Biologii | Adam — 90% Matura Rozszerzona, 100. Centyl",
  description:
    "Korepetycje z biologii przygotowujące do matury rozszerzonej. Systemowe podejście, które w 9 miesięcy dało mi 90% i 100. centyl — od zera, bez wcześniejszej wiedzy.",
  keywords: [
    "korepetytor biologia",
    "korepetycje biologia",
    "matura biologia rozszerzona",
    "matura biologia 90%",
    "biologia korepetycje online",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Korepetytor Biologii | Adam — 90% Matura, 100. Centyl",
    description:
      "Korepetycje z biologii oparte na systemowym rozumieniu, nie zakuwaniu. Sprawdzone — od zera do 90% w 9 miesięcy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${outfit.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
         * Anti-flash script — runs before React hydrates.
         * Reads stored theme from localStorage and applies
         * the correct class to <html> immediately, preventing
         * a flash of the wrong theme.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';var theme=t||p;if(theme==='light'){document.documentElement.classList.add('light')}else{document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-dvh overflow-x-hidden antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
