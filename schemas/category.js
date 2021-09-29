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
      validation: Rule => Rule.custom(
        (value, { document }) => (document.displayInSurvey && !value) ? "Required" : true
      ),
    },
    {
      title: "Display in Survey?",
      name: "displayInSurvey",
      type: "boolean",
      validation: Rule => Rule.required(),
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
      type: "array",
      of: [{ type: "reference", to: [{ type: "problem" }] }],
    }
  ],
  initialValue: {
    displayInSurvey: false,
    assumed: false,
  },
};