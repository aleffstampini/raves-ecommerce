const db = require("../config/connectDatabase");

'use strict';

const Rastreio = db.sequelizeConnection.define('Rastreio', 
    {
        id: {
            field: 'id_rastreio',
            primaryKey: true,
            autoIncrement: true,
            type: db.Sequelize.INTEGER,
        },
        codigo_rastreio: {
            field: 'codigo_rastreio',
            allowNull: false,
            type: db.Sequelize.STRING,
        },
        fk_venda: {
            field: 'tb_venda_id_venda',
            allowNull: false,
            type: db.Sequelize.INTEGER
        }
    }, 
    {
        tableName: 'tb_rastreio', 
        freezeTableName: true, 
        underscored: true,
        timestamps: false,
    }
);

module.exports = Rastreio;