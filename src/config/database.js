require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.eventNames.DB_HOST,
  username: process.eventNames.DB_USER,
  password: process.eventNames.DB_PASS,
  database: process.eventNames.DB_NAME,
  port: '5432',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
