export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  /** One-line summary, used in the compact landing-page list. */
  description: string;
  /** Optional lead-in sentence above the bullets on the full Experience page. */
  intro?: string;
  /** Optional detail bullets, shown on the full Experience page. */
  bullets?: string[];
  /** Optional skills used in the role, shown as chips on the full page. */
  skills?: string[];
};

// Most recent first.
export const experience: ExperienceEntry[] = [
  {
    title: "Teaching Assistant, COMP 1400",
    org: "University of Windsor",
    period: "October 2026 - Present",
    description:
      "Lab assistant and marker for COMP 1400, an introductory C programming course.",
    intro:
      "Teaching Assistant for COMP 1400, an introductory C programming course, under Dr. Kalyani Selvarajah.",
    bullets: [
      "Assist students in weekly labs with C programming, debugging, and problem-solving.",
      "Grade labs and assignments with clear feedback on code logic and style.",
      "Reinforce core concepts: loops, functions, arrays, and pointers.",
    ],
    skills: ["C Programming", "Teaching", "Debugging", "Code Review", "Mentoring"],
  },
  {
    title: "Front Desk Representative",
    org: "International Student Centre, University of Windsor",
    period: "September 2026 - Present",
    description:
      "Frontline support for international students, plus maintaining and redesigning the Centre's Drupal 7 website.",
    bullets: [
      "Provide frontline support to international students on immigration, health insurance and general enquiries.",
      "Maintain and redesign the Centre's Drupal 7 website in line with university brand and accessibility (AODA/WCAG) standards.",
      "Leading a redesign of the homepage navigation to make key student services easier to find.",
    ],
    skills: ["Drupal 7", "HTML/CSS", "Bootstrap", "Web Accessibility", "Student Services"],
  },
  {
    title: "Peer Mentor",
    org: "International Student Centre, University of Windsor",
    period: "August 2026 - September 2026",
    description: "Supported incoming international students during their transition to the University of Windsor.",
  },
];
