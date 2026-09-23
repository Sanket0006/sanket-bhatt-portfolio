export type EducationEntry = {
  title: string;
  org: string;
  period: string;
  description: string;
  credentialUrl?: string;
  credentialLabel?: string;
};

export const education: EducationEntry[] = [
  {
    title: "Honours Bachelor of Computer Science",
    org: "University of Windsor — Specialization in AI, Minor in Mathematics",
    period: "2026 — Present",
    description: "First-year student.",
    credentialUrl: "/transcript.pdf",
    credentialLabel: "View transcript",
  },
  {
    title: "CS50x — Introduction to Computer Science",
    org: "Harvard University",
    period: "Completed",
    description: "Harvard's introductory course to computer science and programming.",
    // [TODO: add your CS50x certificate verification URL, e.g. from cs50.harvard.edu/certificates or credentials.edx.org]
    credentialUrl: "",
    credentialLabel: "View certificate",
  },
  {
    title: "CS50P — Introduction to Programming with Python",
    org: "Harvard University",
    period: "Completed",
    description: "Harvard's course on programming fundamentals with Python.",
    // [TODO: add your CS50P certificate verification URL]
    credentialUrl: "",
    credentialLabel: "View certificate",
  },
];
