const path = require("path");

if (process.env.NODE_ENV === "production") {
  module.exports = ({ env }) => ({
    connection: {
      client: "mysql",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapidb"),
        user: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "3572419S@lam"),
      },
      ssl: false,
    },
  });
} else {
  module.exports = ({ env }) => ({
    connection: {
      client: "sqlite",
      connection: {
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      useNullAsDefault: true,
      debug: false,
    },
  });
}
