const express = require('express');
const router = express.Router();
const Aluguel = require("../models/aluguel.model");

async function criarAluguel(idCliente,idCarro, dataInicio, dataFim, valorFinal) {
    return await Aluguel.create({ idCliente,idCarro, dataInicio, dataFim, valorFinal });
}

async function pegarAlugueis() {
    return await Aluguel.findAll();
}

async function pegarAluguelPorId(id) {
    return await Aluguel.findByPk(id);
}

async function atualizarAluguel(id, data) {
    const aluguel = await pegarAluguelPorId(id);
    if (!aluguel) {
        throw new Error('Aluguel não encontrado');
    }
    return await aluguel.update(data);
}

async function deletarAluguel(id) {
    const aluguel = await pegarAluguelPorId(id);
    if (!aluguel) {
        throw new Error('Aluguel não encontrado');
    }
    return await aluguel.destroy();
}

module.exports = {
    criarAluguel,
    pegarAlugueis,
    pegarAluguelPorId,
    atualizarAluguel,
    deletarAluguel
};