import { site as staticSite } from "@/content/site";
import { projects as staticProjects, type Project as StaticProject } from "@/content/projects";
import { skillGroups as staticSkillGroups } from "@/content/skills";
import { ventures as staticVentures } from "@/content/ventures";
import { education as staticEducation } from "@/content/education";
import {
  getSiteSettings,
  getAbout,
  getProjects,
  getProjectBySlug as getSanityProjectBySlug,
  getSkillGroups,
  getVentures,
  getEducation,
  type Project,
  type SkillGroup,
  type Venture,
  type EducationEntry,
} from "@/sanity/queries";

const DEFAULT_BIO_PARAGRAPHS = [
  "I'm a first-year Honours Bachelor of Computer Science student at the University of Windsor, specializing in Artificial Intelligence with a minor in Mathematics. Originally from Ahmedabad, India, I'm now based in Windsor, Ontario.",
  "Before university, I completed Harvard's CS50x and CS50P. Alongside school, I co-founded Apex Web Solution, a web design business I run with my sister, and I founded Stratosphere, an aviation content brand. I'm also an independent EDM producer, making melodic bass and progressive electronic music.",
];

export type MergedSite = typeof staticSite & {
  quickFacts: { label: string; value: string }[];
  transcriptUrl: string | null;
};

/** Site-wide settings (name, taglines, email, socials, quick facts) — Sanity values win, static file fills any gaps. */
export async function getMergedSite(): Promise<MergedSite> {
  const s = await getSiteSettings();
  return {
    ...staticSite,
    name: s?.name || staticSite.name,
    role: s?.role || staticSite.role,
    taglines: s?.taglines?.length ? s.taglines : staticSite.taglines,
    shortIntro: s?.shortIntro || staticSite.shortIntro,
    email: s?.email || staticSite.email,
    social: { ...staticSite.social, ...(s?.social ?? {}) },
    quickFacts: s?.quickFacts?.length ? s.quickFacts : staticSite.quickFacts,
    formspreeId: s?.formspreeId ?? staticSite.formspreeId,
    transcriptUrl: s?.transcript?.asset?.url ?? null,
  };
}

/** Just the transcript file URL, used by the /transcript.pdf route handler. */
export async function getTranscriptUrl(): Promise<string | null> {
  const s = await getSiteSettings();
  return s?.transcript?.asset?.url ?? null;
}

export type MergedAbout = {
  bioParagraphs: string[];
  photoUrl: string | null;
};

export async function getMergedAbout(): Promise<MergedAbout> {
  const a = await getAbout();
  return {
    bioParagraphs: a?.bioParagraphs?.length ? a.bioParagraphs : DEFAULT_BIO_PARAGRAPHS,
    photoUrl: a?.photo?.asset?.url ?? null,
  };
}

function toDisplayProject(p: StaticProject): Project {
  return { ...p, image: null };
}

export async function getMergedProjects(): Promise<Project[]> {
  const p = await getProjects();
  return p.length ? p : staticProjects.map(toDisplayProject);
}

export async function getMergedProjectBySlug(slug: string): Promise<Project | null> {
  const p = await getSanityProjectBySlug(slug);
  if (p) return p;
  const fallback = staticProjects.find((sp) => sp.slug === slug);
  return fallback ? toDisplayProject(fallback) : null;
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const p = await getProjects();
  if (p.length) return p.map((proj) => proj.slug);
  return staticProjects.map((proj) => proj.slug);
}

export async function getMergedSkillGroups(): Promise<SkillGroup[]> {
  const g = await getSkillGroups();
  return g.length ? g : staticSkillGroups;
}

export async function getMergedVentures(): Promise<Venture[]> {
  const v = await getVentures();
  return v.length ? v : staticVentures;
}

export async function getMergedEducation(): Promise<EducationEntry[]> {
  const e = await getEducation();
  return e.length ? e : staticEducation;
}
