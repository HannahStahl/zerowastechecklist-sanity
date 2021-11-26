export default {
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Survey Header",
      name: "header",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Explanation",
      name: "explanation",
      type: "string",
      description: "Required for unassumed subcategories",
    },
    {
      title: "Assumed?",
      name: "assumed",
      type: "boolean",
      validation: Rule => Rule.required(),
    },
    {
      title: "Subcategories",
      name: "subcategories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      title: "Problems",
      name: "problems",
      description: "These will be sorted alphabetically on the website.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "problem" }] }],
      options: { sortable: false },
    },
  ],
  initialValue: {
    assumed: false,
  },
};