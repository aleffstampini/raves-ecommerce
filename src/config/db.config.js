module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1601",
    DB: "dbravenna",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};