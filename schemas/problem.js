export default {
  title: "Problem",
  name: "problem",
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
      title: "Assumed?",
      name: "assumed",
      type: "boolean",
      validation: Rule => Rule.required(),
    },
    {
      title: "Solutions",
      name: "solutions",
      type: "array",
      of: [{ type: "reference", to: [{ type: "solution" }] }],
    }
  ],
  initialValue: {
    assumed: false,
  },
};