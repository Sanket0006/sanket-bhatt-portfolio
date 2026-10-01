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
    credentialUrl: "https://certificates.cs50.io/369d37a7-8d0d-470c-93f6-8755fe588317.pdf?size=a4",
    credentialLabel: "View certificate",
  },
  {
    title: "CS50P — Introduction to Programming with Python",
    org: "Harvard University",
    period: "Completed",
    description: "Harvard's course on programming fundamentals with Python.",
    credentialUrl: "https://certificates.cs50.io/e446fff9-d911-4c79-a085-e7af642c6569.pdf?size=a4",
    credentialLabel: "View certificate",
  },
];
