export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  description: string;
};

// Ordered like a stack: most recently pushed (TA) on top, first-in (Front
// Desk) at the bottom.
export const experience: ExperienceEntry[] = [
  {
    title: "Teaching Assistant, COMP-1400",
    org: "University of Windsor",
    period: "October 2026 - Present",
    description:
      "Supported the course through lab instruction, assignment grading, exam proctoring, and one-on-one tutoring, helping students build confidence with foundational programming concepts.",
  },
  {
    title: "Front Desk Receptionist",
    org: "International Student Centre, University of Windsor",
    period: "September 2026 - Present",
    description:
      "First point of contact at the ISC front desk, handling visitor and student inquiries, scheduling, and day-to-day office support through the Ignite Work Study program.",
  },
];
