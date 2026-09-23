import { defineField, defineType } from "sanity";

export const skillGroup = defineType({
  name: "skillGroup",
  title: "Skill Group",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Group title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "items", title: "Items", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title" },
  },
});
