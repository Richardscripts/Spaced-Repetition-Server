require('dotenv').config();

module.exports = {
  migrationDirectory: 'migrations',
  driver: 'pg',
  database: 'spaced-repetition',
  username: 'user',
  password: 'pass',
};
