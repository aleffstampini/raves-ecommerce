const db = require('../config/connectDatabase');

'use strict';

const Usuario = db.sequelizeConnection.define('Usuario', 
    {
        id: {
            field: 'id_usuario',
            primaryKey: true,
            autoIncrement: true,
            type: db.Sequelize.INTEGER,
        },
        nome: {
            field: 'nome',
            allowNull: false,
            type: db.Sequelize.STRING
        },
        email: {
            field: 'email',
            allowNull: false,
            type: db.Sequelize.STRING
        },
        senha: {
            field: 'senha',
            allowNull: false,
            type: db.Sequelize.STRING
        },
        cpf: {
            field: 'cpf',
            allowNull: false,
            type: db.Sequelize.STRING
        },
    }, 
    {
        tableName: 'tb_usuario', 
        freezeTableName: true, 
        underscored: true,
        timestamps: false,
    }
);

module.exports = Usuario;