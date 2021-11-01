export default {
  title: "Solution",
  name: "solution",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Explanation",
      name: "explanation",
      type: "text",
      validation: Rule => Rule.required(),
    },
    {
      title: "Low Waste?",
      name: "lowWaste",
      type: "boolean",
      validation: Rule => Rule.required(),
    },
    {
      title: "Recommendations",
      name: "recommendations",
      description: "These will be sorted alphabetically on the website.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "recommendation" }] }],
      options: { sortable: false },
    },
  ],
  initialValue: {
    lowWaste: false,
  },
};