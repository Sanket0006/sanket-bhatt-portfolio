import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoadingIntro } from "@/components/layout/LoadingIntro";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://sanketbhatt.dev"; // [TODO: update once the custom domain is confirmed]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.shortIntro,
  keywords: [
    "Sanket Bhatt",
    "Computer Science",
    "University of Windsor",
    "AI",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: site.name }],
  icons: {
    icon: "/brand-mark.webp",
    shortcut: "/brand-mark.webp",
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.shortIntro,
    url: siteUrl,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.shortIntro,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="relative min-h-screen">
        <ThemeProvider>
          <SmoothScrollProvider>
            <LoadingIntro />
            <ScrollProgress />
            <CustomCursor />
            <AmbientBackground />
            <Header />
            <main className="relative z-10">
              <PageTransition>{children}</PageTransition>
            </main>
            <div className="relative z-10">
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
