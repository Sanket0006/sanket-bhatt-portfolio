import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { getMergedProjects } from "@/lib/content";

export const metadata: Metadata = { title: "Work" };

export default async function WorkPage() {
  const projects = await getMergedProjects();
  return <Projects projects={projects} />;
}
