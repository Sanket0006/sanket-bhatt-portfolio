export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  approach: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
  /** Optional path to a cover image in /public, e.g. "/projects/my-app.png" */
  image?: string;
};

// Empty strings and empty arrays are hidden from the page, so a project can
// be listed before it has links, a cover image, or a full write-up.
// Keep the slug URL-friendly (lowercase, hyphenated).
export const projects: Project[] = [
  {
    slug: "isc-website",
    title: "ISC Website",
    summary:
      "Ongoing maintenance and redesign of the International Student Centre's website at the University of Windsor.",
    description:
      "Part of my role as a Front Desk Representative at the ISC, helping maintain and redesign the centre's website to better serve international students.",
    // [TODO: fill in once the redesign has concrete, nameable outcomes]
    problem: "",
    approach: "",
    tech: ["Drupal 7", "HTML/CSS", "Bootstrap"],
    github: "",
    live: "https://www.uwindsor.ca/isc",
    featured: true,
  },
  {
    slug: "portfolio-website",
    title: "This Portfolio",
    summary:
      "A multi-page portfolio with statically generated pages, light and dark themes, and all content kept in typed data files.",
    description:
      "Built from scratch with Next.js, React and TypeScript, styled with Tailwind CSS, and deployed on Vercel from GitHub. It started as a static HTML/CSS/JS music page and was rebuilt as a multi-page site.",
    problem:
      "I wanted one place where recruiters and professors can see who I am and what I've built, and that I can keep up to date myself.",
    approach:
      "Pages are statically generated with the Next.js App Router. All copy lives in typed content files, so updating the site never means touching components. Accessibility basics (semantic headings, visible focus states, labelled icon links, reduced-motion support) and performance fixes were handled along the way.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/Sanket0006/sanket-bhatt-portfolio",
    live: "https://www.sanketbhatt.com",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
