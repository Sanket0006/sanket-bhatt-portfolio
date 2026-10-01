export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  description: string;
};

// Most recent first.
export const experience: ExperienceEntry[] = [
  {
    title: "Teaching Assistant, COMP-1400",
    org: "University of Windsor",
    period: "October 2026 - Present",
    description:
      "Lab assistant and marker for introductory programming, supporting the course through lab instruction, assignment grading, exam proctoring, and one-on-one tutoring.",
  },
  {
    title: "Front Desk Representative",
    org: "International Student Centre, University of Windsor",
    period: "September 2026 - Present",
    description:
      "Student-facing support at the ISC front desk through the Ignite Work Study program, alongside maintaining and redesigning the centre's website.",
  },
  {
    title: "Peer Mentor",
    org: "International Student Centre, University of Windsor",
    period: "August 2026 - September 2026",
    description: "Supported incoming international students during their transition to the University of Windsor.",
  },
];
