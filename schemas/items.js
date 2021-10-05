export default {
  title: "Items",
  name: "items",
  type: "document",
  fields: [
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [{ type: "category" }],
    }
  ],
};