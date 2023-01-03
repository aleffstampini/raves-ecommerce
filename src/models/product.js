const db = require('../config/connectDatabase');

'use strict';

const Produto = db.sequelizeConnection.define('Produto', 
    {
        id: {
            field: 'id_produto',
            primaryKey: true,
            autoIncrement: true,
            type: db.Sequelize.INTEGER,
        },
        nome: {
            field: 'nome',
            allowNull: false,
            type: db.Sequelize.STRING
        },
        descricao: {
            field: 'descricao',
            allowNull: true,
            type: db.Sequelize.STRING
        },
        valor: {
            field: 'valor',
            allowNull: false,
            type: db.Sequelize.DOUBLE
        }
    }, 
    {
        tableName: 'tb_produto', 
        freezeTableName: true, 
        underscored: true,
        timestamps: false,
    }
);

module.exports = Produto;