const express = require('express');
const router = express.Router();
const aluguelService = require("../services/aluguel.service");

async function criarAluguel(req, res) {
    const {idCliente, idCarro, dataInicio, dataFim, valorFinal} = req.body;
    try {
        const aluguel = await aluguelService.criarAluguel(idCliente, idCarro, dataInicio, dataFim, valorFinal);
        res.status(201).json(aluguel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function pegarAlugueis(req, res) {
    try {
        const alugueis = await aluguelService.pegarAlugueis();
        res.json(alugueis);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function pegarAluguelPorId(req, res) {
    const { id } = req.params;
    try {
        const aluguel = await aluguelService.pegarAluguelPorId(id);
        if (!aluguel) {
            return res.status(404).json({ error: 'Aluguel não encontrado' });
        }
        res.json(aluguel)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function atualizarAluguel(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
        const aluguelAtualizado = await aluguelService.pegarAluguelPorId(id, data);
        res.json(aluguelAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deletarAluguel(req, res) {
    const { id } = req.params;
    try {
        await aluguelService.deletarAluguel(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    criarAluguel,
    pegarAlugueis,
    pegarAluguelPorId,
    atualizarAluguel,
    deletarAluguel
};