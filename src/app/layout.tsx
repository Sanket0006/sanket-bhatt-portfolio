import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

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

const siteUrl = "https://www.sanketbhatt.com";

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

/**
 * Deliberately minimal — /studio (Sanity Studio) also renders under this root
 * layout and needs full control of its own screen. All site chrome (header,
 * footer, cursor, background, scroll effects) lives in (site)/layout.tsx
 * instead, scoped to the actual portfolio routes.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="relative min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
