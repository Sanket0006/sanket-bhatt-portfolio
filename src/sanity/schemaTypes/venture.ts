import { defineField, defineType } from "sanity";

export const venture = defineType({
  name: "venture",
  title: "Venture",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Your role", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "href", title: "Website URL", type: "url" }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
