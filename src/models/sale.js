const db = require("../config/connectDatabase");

'use strict';

const Venda = db.sequelizeConnection.define('Venda', 
    {
        id: {
            field: 'id_venda',
            primaryKey: true,
            autoIncrement: true,
            type: db.Sequelize.INTEGER,
        },
        valor: {
            field: 'valor',
            allowNull: false,
            type: db.Sequelize.DOUBLE,
        },
        tipo_pagamento: {
            field: 'tipo_pagamento',
            allowNull: false,
            type: db.Sequelize.STRING
        },
        parcelado: {
            field: 'parcelado',
            allowNull: false,
            type: db.Sequelize.BOOLEAN
        },
        quantidade_parcelas: {
            field: 'quantidade_parcelas',
            allowNull: true,
            type: db.Sequelize.INTEGER
        },
        status_venda: {
            field: 'status_venda',
            allowNull: false,
            type: db.Sequelize.BOOLEAN
        },
        fk_usuario: {
            field: 'tb_usuario_id_usuario',
            allowNull: false,
            type: db.Sequelize.INTEGER
        }
    }, 
    {
        tableName: 'tb_venda', 
        freezeTableName: true, 
        underscored: true,
        timestamps: false,
    }
);

module.exports = Venda;