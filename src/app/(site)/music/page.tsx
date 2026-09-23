import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Music",
  description: "Sanket Bhatt's music — coming soon.",
};

export default function MusicPage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center sm:px-8">
      <Reveal direction="up">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Music
        </div>
        <h1 className="font-display text-4xl font-medium sm:text-5xl">
          Coming soon
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          This page is being rebuilt. Releases, links, and more will live
          here soon.
        </p>
      </Reveal>
    </section>
  );
}
