const path = require('path');


if(process.env.NODE_ENV == 'production') {
  module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "postgres"),
          user: env("DATABASE_USERNAME", ""),
          password: env("DATABASE_PASSWORD", ""),
        },
        ssl: false,
      },
    })
} else {
  module.exports = ({ env }) => ({
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  });
} 




