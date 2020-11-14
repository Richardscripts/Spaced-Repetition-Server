module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DB_URL: process.env.DB_URL,
  TEST_DB_URL: process.env.TEST_DB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  MIGRATION_DB_USER: process.env.MIGRATION_DB_USER,
  MIGRATION_DB_PASS: process.env.MIGRATION_DB_PASS,
};
