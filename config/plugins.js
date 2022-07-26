module.exports = ({ env }) => ({
  upload: {
    "import-export-entries": {
      enabled: true,
      config: {
        serverPublicHostname: "https://iconictasteassets.s3.amazonaws.com",
      },
    },
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_S3_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_S3_ACCESS_SECRET"),
        region: env("AWS_S3_REGION"),
        params: {
          Bucket: env("AWS_S3_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
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
        // navigation: {
        //   field: "slug",
        //   references: "name",
        // },
      },
    },
  },
});
