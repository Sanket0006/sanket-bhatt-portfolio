import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <Contact email={site.email} social={site.social} formspreeId={site.formspreeId} />;
}
