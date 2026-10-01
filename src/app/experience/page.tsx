import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";
import { experience } from "@/content/experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return <Experience experience={experience} />;
}
