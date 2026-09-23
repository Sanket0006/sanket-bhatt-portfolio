import type { QueryParams } from "next-sanity";
import { getClient } from "./client";

export type SiteSettings = {
  name: string;
  role: string;
  taglines: string[];
  shortIntro: string;
  email: string;
  social: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    spotify?: string;
    youtube?: string;
  };
  quickFacts: { label: string; value: string }[];
  formspreeId?: string;
};

export type About = {
  bioParagraphs: string[];
  photo?: { asset?: { url?: string } } | null;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  problem: string;
  approach: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: { asset?: { url?: string } } | null;
  featured: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Venture = {
  name: string;
  role: string;
  description: string;
  href?: string;
};

export type TranscriptFile = {
  label?: string;
  asset?: { url?: string; originalFilename?: string };
};

export type EducationEntry = {
  title: string;
  org: string;
  period: string;
  description: string;
  transcripts?: TranscriptFile[];
};

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  name, role, taglines, shortIntro, email, social, quickFacts, formspreeId
}`;

const ABOUT_QUERY = `*[_type == "about"][0]{
  bioParagraphs,
  photo{asset->{url}}
}`;

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc){
  title, "slug": slug.current, summary, description, problem, approach, tech,
  github, live, image{asset->{url}}, featured
}`;

const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  title, "slug": slug.current, summary, description, problem, approach, tech,
  github, live, image{asset->{url}}, featured
}`;

const SKILL_GROUPS_QUERY = `*[_type == "skillGroup"] | order(order asc){ title, items }`;

const VENTURES_QUERY = `*[_type == "venture"] | order(order asc){ name, role, description, href }`;

const EDUCATION_QUERY = `*[_type == "educationEntry"] | order(order asc){
  title, org, period, description,
  transcripts[]{ label, asset->{url, originalFilename} }
}`;

async function safeFetch<T>(query: string, params: QueryParams = {}): Promise<T | null> {
  const client = getClient();
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params);
  } catch (err) {
    console.error("Sanity fetch failed:", err);
    return null;
  }
}

export const getSiteSettings = () => safeFetch<SiteSettings>(SITE_SETTINGS_QUERY);
export const getAbout = () => safeFetch<About>(ABOUT_QUERY);
export const getProjects = () => safeFetch<Project[]>(PROJECTS_QUERY).then((r) => r ?? []);
export const getProjectBySlug = (slug: string) =>
  safeFetch<Project>(PROJECT_BY_SLUG_QUERY, { slug });
export const getSkillGroups = () => safeFetch<SkillGroup[]>(SKILL_GROUPS_QUERY).then((r) => r ?? []);
export const getVentures = () => safeFetch<Venture[]>(VENTURES_QUERY).then((r) => r ?? []);
export const getEducation = () => safeFetch<EducationEntry[]>(EDUCATION_QUERY).then((r) => r ?? []);
