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
      title: "Recommendations",
      name: "recommendations",
      type: "array",
      of: [{ type: "reference", to: [{ type: "recommendation" }] }],
    }
  ],
};