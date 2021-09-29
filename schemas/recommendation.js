export default {
  title: "Recommendation",
  name: "recommendation",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      validation: Rule => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      validation: Rule => Rule.required(),
    },
  ],
};