const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database/db.config");

const Alugel = sequelize.define('Aluguel', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idCliente: {
        type: DataTypes.INTEGER,
    },
    idCarro: {
        type: DataTypes.INTEGER,
    },
    dataInicio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataFim: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valorFinal: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Alugel;