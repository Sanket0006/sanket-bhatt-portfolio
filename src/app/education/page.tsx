import type { Metadata } from "next";
import { Education } from "@/components/sections/Education";
import { education } from "@/content/education";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return <Education education={education} />;
}
