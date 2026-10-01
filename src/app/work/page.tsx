import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return <Projects projects={projects} />;
}
