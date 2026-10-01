import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { skillGroups } from "@/content/skills";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return <Skills skillGroups={skillGroups} />;
}
