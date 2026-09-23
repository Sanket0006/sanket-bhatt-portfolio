import { defineField, defineType } from "sanity";

export const educationEntry = defineType({
  name: "educationEntry",
  title: "Education Entry",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "org", title: "Institution", type: "string" }),
    defineField({ name: "period", title: "Period", type: "string", description: "e.g. 2026 — Present, or Completed" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "order", title: "Display order", type: "number" }),
    defineField({
      name: "credentialUrl",
      title: "Credential link",
      type: "url",
      description:
        "Optional link shown as a button on this entry. Use /transcript.pdf for the university entry (served from the Transcript file in Site Settings), or an official external verification URL for certificates (e.g. your CS50x/CS50P certificate page on cs50.harvard.edu or credentials.edx.org).",
    }),
    defineField({
      name: "credentialLabel",
      title: "Credential button label",
      type: "string",
      description: 'e.g. "View transcript" or "View certificate"',
      initialValue: "View credential",
    }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "org" },
  },
});
