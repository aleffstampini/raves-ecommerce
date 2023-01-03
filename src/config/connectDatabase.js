const { Sequelize } = require("Sequelize");
const dbConfig = require('./db.config');

const sequelizeConnection = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operationsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }    
);

sequelizeConnection.authenticate()
    .then(() => console.log('[mysql] connection to database is successful!'))
    .catch( erro => console.log('[mysql] error connect to database: '+erro));

module.exports = {sequelizeConnection, Sequelize};