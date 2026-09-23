export type EducationEntry = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const education: EducationEntry[] = [
  {
    title: "Honours Bachelor of Computer Science",
    org: "University of Windsor — Specialization in AI, Minor in Mathematics",
    period: "2026 — Present",
    description: "First-year student.",
  },
  {
    title: "CS50x — Introduction to Computer Science",
    org: "Harvard University",
    period: "Completed",
    description: "Harvard's introductory course to computer science and programming.",
  },
  {
    title: "CS50P — Introduction to Programming with Python",
    org: "Harvard University",
    period: "Completed",
    description: "Harvard's course on programming fundamentals with Python.",
  },
];
