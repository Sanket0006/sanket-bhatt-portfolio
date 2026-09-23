import type { Metadata } from "next";
import { Education } from "@/components/sections/Education";
import { getMergedEducation } from "@/lib/content";

export const metadata: Metadata = { title: "Education" };

export default async function EducationPage() {
  const education = await getMergedEducation();
  return <Education education={education} />;
}
