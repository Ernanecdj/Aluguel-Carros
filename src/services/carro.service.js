const express = require('express');
const router = express.Router();
const Carro = require("../models/carro.model");

async function criarCarro(marca, modelo, ano, valor) {
    return await Carro.create({ marca, modelo, ano, valor });
}

async function pegarCarros() {
    return await Carro.findAll();
}

async function pegarCarroPorId(id) {
    return await Carro.findByPk(id);
}

async function atualizarCarro(id, data) {
    const carro = await pegarCarroPorId(id);
    if (!carro) {
        throw new Error('Carro não encontrado');
    }
    return await carro.update(data);
}

async function deletarCarro(id) {
    const carro = await pegarCarroPorId(id);
    if (!carro) {
        throw new Error('Carro não encontrado');
    }
    return await carro.destroy();
}

module.exports = {
    criarCarro,
    pegarCarros,
    pegarCarroPorId,
    atualizarCarro,
    deletarCarro
};