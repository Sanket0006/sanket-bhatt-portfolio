import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { site } from "@/content/site";
import { about } from "@/content/about";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <About
      bioParagraphs={about.bioParagraphs}
      photoUrl={about.photoUrl || null}
      quickFacts={site.quickFacts}
    />
  );
}
