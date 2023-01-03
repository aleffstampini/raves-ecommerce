const db = require("../config/connectDatabase");

'use strict';

const Categoria = db.sequelizeConnection.define('Categoria', 
    {
        id: {
            field: 'id_categoria',
            primaryKey: true,
            autoIncrement: true,
            type: db.Sequelize.INTEGER,
        },
        nome: {
            field: 'nome',
            allowNull: false,
            type: db.Sequelize.STRING,
        },
        descricao: {
            field: 'descricao',
            allowNull: true,
            type: db.Sequelize.STRING
        },
    }, 
    {
        tableName: 'tb_categoria', 
        freezeTableName: true, 
        underscored: true,
        timestamps: false,
    }
);

module.exports = Categoria;