import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biolka z Adamem | Korepetytor Biologii",
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
    title: "Biolka z Adamem | Korepetytor Biologii",
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
            __html: `(function(){try{var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t||p)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`,
          }}
        />
      </head>
      <body
        className="min-h-dvh overflow-x-hidden antialiased bg-[var(--color-bg-base)] text-[var(--color-text-primary)] transition-colors duration-300"
      >
        {children}
      </body>
    </html>
  );
}
