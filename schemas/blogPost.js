export default {
  title: "Blog Post",
  name: "blogPost",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      validation: Rule => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      title: "Preview",
      name: "preview",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    },
    {
      title: "Article",
      name: "article",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    },
  ]
};