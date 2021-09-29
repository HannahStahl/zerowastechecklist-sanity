export default {
  title: "Ordered Categories",
  name: "categories",
  type: "document",
  fields: [
    {
      title: "Ordered Categories",
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }
  ],
};