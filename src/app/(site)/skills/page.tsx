import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { getMergedSkillGroups } from "@/lib/content";

export const metadata: Metadata = { title: "Skills" };

export default async function SkillsPage() {
  const skillGroups = await getMergedSkillGroups();
  return <Skills skillGroups={skillGroups} />;
}
