import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { getMergedSite } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage() {
  const site = await getMergedSite();
  return <Contact email={site.email} social={site.social} formspreeId={site.formspreeId} />;
}
