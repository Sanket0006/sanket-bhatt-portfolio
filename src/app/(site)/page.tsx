import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Ventures } from "@/components/sections/Ventures";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import {
  getMergedSite,
  getMergedAbout,
  getMergedProjects,
  getMergedSkillGroups,
  getMergedVentures,
  getMergedEducation,
} from "@/lib/content";

export default async function Home() {
  const [site, about, projects, skillGroups, ventures, education] = await Promise.all([
    getMergedSite(),
    getMergedAbout(),
    getMergedProjects(),
    getMergedSkillGroups(),
    getMergedVentures(),
    getMergedEducation(),
  ]);

  return (
    <>
      <Hero name={site.name} taglines={site.taglines} shortIntro={site.shortIntro} />
      <About
        bioParagraphs={about.bioParagraphs}
        photoUrl={about.photoUrl}
        quickFacts={site.quickFacts}
      />
      <Skills skillGroups={skillGroups} />
      <Projects projects={projects} />
      <Ventures ventures={ventures} />
      <Education education={education} />
      <Contact email={site.email} social={site.social} formspreeId={site.formspreeId} />
    </>
  );
}
