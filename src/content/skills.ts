export type SkillGroup = {
  title: string;
  items: string[];
};

// Python and C are from Harvard's CS50x / CS50P. Everything else is the
// stack this site itself is built with, verifiable in the repo.
export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["Python", "C", "TypeScript"] },
  { title: "Frameworks", items: ["Next.js", "React", "Tailwind CSS"] },
  { title: "Tools", items: ["Git", "GitHub", "Vercel"] },
  { title: "Currently learning", items: ["Java", "SwiftUI"] },
];
