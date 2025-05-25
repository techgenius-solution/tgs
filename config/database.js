const { Sequelize } = require('sequelize');
// PostgreSQL
// const sequelize = new Sequelize('postgres://user:pass@localhost:5432/dbname');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // or use `postgres` with url: 'postgres://user:pass@localhost:5432/dbname'
});

module.exports = sequelize;
