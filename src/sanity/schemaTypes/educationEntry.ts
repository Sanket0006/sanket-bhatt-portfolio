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
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "org" },
  },
});
