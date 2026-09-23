import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "summary", title: "One-line summary", type: "string" }),
    defineField({ name: "description", title: "Overview", type: "text", rows: 4 }),
    defineField({ name: "problem", title: "The problem", type: "text", rows: 3 }),
    defineField({ name: "approach", title: "Approach", type: "text", rows: 4 }),
    defineField({ name: "tech", title: "Tech stack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
    defineField({ name: "live", title: "Live demo URL", type: "url" }),
    defineField({ name: "image", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "summary" },
  },
});
