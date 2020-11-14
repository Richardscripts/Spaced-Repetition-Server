require('dotenv').config();

module.exports = {
  migrationDirectory: 'migrations',
  driver: 'pg',
  host: '127.0.0.1',
  port: 5432,
  database: 'spaced-repetition',
  username: 'user',
  password: 'pass',
};
