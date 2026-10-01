export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    title: "Front Desk Receptionist",
    org: "ISC, Ignite Work Study Program, University of Windsor",
    // [TODO: add the actual dates for this role]
    period: "[TODO: add dates]",
    description:
      "First point of contact at the ISC front desk, handling visitor and student inquiries, scheduling, and day-to-day office support through the Ignite Work Study program.",
  },
  {
    title: "Teaching Assistant, COMP-1400",
    org: "University of Windsor",
    // [TODO: add the actual dates for this role]
    period: "[TODO: add dates]",
    description:
      "Supported the course through lab instruction, assignment grading, exam proctoring, and one-on-one tutoring, helping students build confidence with foundational programming concepts.",
  },
];
