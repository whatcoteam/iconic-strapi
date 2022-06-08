module.exports = {
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        category: {
          field: "slug",
          references: "name",
        },
        "sub-category": {
          field: "slug",
          references: "name",
        },
        product: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
};
