export default {
  title: "Categories (Top-Level)",
  name: "categories",
  type: "document",
  fields: [
    {
      title: "Categories (Top-Level)",
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }
  ],
}; 
