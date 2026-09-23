import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role / headline", type: "string" }),
    defineField({
      name: "taglines",
      title: "Rotating taglines",
      type: "array",
      of: [{ type: "string" }],
      description: "Words that cycle in the hero, e.g. CS Student, AI Enthusiast, Web Developer",
    }),
    defineField({
      name: "shortIntro",
      title: "Short intro",
      type: "text",
      rows: 3,
      description: "One or two sentences shown under the hero title.",
    }),
    defineField({ name: "email", title: "Contact email", type: "string" }),
    defineField({
      name: "social",
      title: "Social links",
      type: "object",
      fields: [
        defineField({ name: "github", title: "GitHub URL", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "spotify", title: "Spotify URL", type: "url" }),
        defineField({ name: "youtube", title: "YouTube URL", type: "url" }),
      ],
    }),
    defineField({
      name: "quickFacts",
      title: "Quick facts",
      description: "Shown as a label/value grid in the About section.",
      type: "array",
      of: [
        {
          type: "object",
          name: "fact",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "formspreeId",
      title: "Formspree form ID",
      type: "string",
      description: "From formspree.io — leave blank to show a not-configured note instead of the form.",
    }),
  ],
});
