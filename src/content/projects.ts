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
};

// All entries below are placeholders — replace title/summary/links/tech with
// your real projects. Keep the slug URL-friendly (lowercase, hyphenated).
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "[TODO: Project One Title]",
    summary: "[TODO: one-line description of what it does]",
    description: "[TODO: 2-3 sentence overview of the project]",
    problem: "[TODO: what problem this project solves]",
    approach: "[TODO: how you built it / key technical decisions]",
    tech: ["[TODO: e.g. Next.js]", "[TODO: e.g. PostgreSQL]"],
    github: "[TODO: GitHub URL]",
    live: "[TODO: live demo URL]",
    featured: true,
  },
  {
    slug: "project-two",
    title: "[TODO: Project Two Title]",
    summary: "[TODO: one-line description of what it does]",
    description: "[TODO: 2-3 sentence overview of the project]",
    problem: "[TODO: what problem this project solves]",
    approach: "[TODO: how you built it / key technical decisions]",
    tech: ["[TODO: e.g. Python]", "[TODO: e.g. TensorFlow]"],
    github: "[TODO: GitHub URL]",
    live: "[TODO: live demo URL]",
    featured: true,
  },
  {
    slug: "project-three",
    title: "[TODO: Project Three Title]",
    summary: "[TODO: one-line description of what it does]",
    description: "[TODO: 2-3 sentence overview of the project]",
    problem: "[TODO: what problem this project solves]",
    approach: "[TODO: how you built it / key technical decisions]",
    tech: ["[TODO]", "[TODO]"],
    github: "[TODO: GitHub URL]",
    live: "[TODO: live demo URL]",
    featured: false,
  },
  {
    slug: "project-four",
    title: "[TODO: Project Four Title]",
    summary: "[TODO: one-line description of what it does]",
    description: "[TODO: 2-3 sentence overview of the project]",
    problem: "[TODO: what problem this project solves]",
    approach: "[TODO: how you built it / key technical decisions]",
    tech: ["[TODO]", "[TODO]"],
    github: "[TODO: GitHub URL]",
    live: "[TODO: live demo URL]",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
