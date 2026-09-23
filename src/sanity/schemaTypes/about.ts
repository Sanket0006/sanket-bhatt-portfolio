import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "bioParagraphs",
      title: "Bio paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      description: "Each entry is one paragraph in the About section.",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
