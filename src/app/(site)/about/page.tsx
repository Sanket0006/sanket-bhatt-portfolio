import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { getMergedSite, getMergedAbout } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default async function AboutPage() {
  const [site, about] = await Promise.all([getMergedSite(), getMergedAbout()]);
  return (
    <About
      bioParagraphs={about.bioParagraphs}
      photoUrl={about.photoUrl}
      quickFacts={site.quickFacts}
    />
  );
}
