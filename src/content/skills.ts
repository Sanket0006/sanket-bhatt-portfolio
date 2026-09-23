export type SkillGroup = {
  title: string;
  items: string[];
};

// Python and C are confirmed (from Harvard's CS50x / CS50P). Everything else
// is a placeholder — replace with your real stack.
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "C", "[TODO: e.g. JavaScript]", "[TODO: e.g. TypeScript]"],
  },
  {
    title: "Frameworks",
    items: ["[TODO: e.g. Next.js]", "[TODO: e.g. React]", "[TODO]"],
  },
  {
    title: "Tools",
    items: ["[TODO: e.g. Git]", "[TODO: e.g. Figma]", "[TODO]"],
  },
  {
    title: "Currently learning",
    items: ["[TODO: e.g. Machine Learning]", "[TODO]"],
  },
];

// Marquee strip — short labels only, keep this list in sync with the groups above.
export const skillMarquee: string[] = [
  "Python",
  "C",
  "[TODO]",
  "[TODO]",
  "[TODO]",
  "[TODO]",
];
