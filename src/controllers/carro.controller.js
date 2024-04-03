const express = require('express');
const router = express.Router();
const carroService = require("../services/carro.service");

async function criarCarro(req, res) {
    const {marca, modelo, ano, valor} = req.body;
    try {
        const carro = await carroService.criarCarro(marca, modelo, ano, valor);
        res.status(201).json(carro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function pegarCarros(req, res) {
    try {
        const carros = await carroService.pegarCarros();
        res.json(carros);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function pegarCarroPorId(req, res) {
    const { id } = req.params;
    try {
        const carro = await carroService.pegarCarroPorId(id);
        if(!carro) {
            return res.status(404).json({ error: 'Carro não encontrado' });
        }
        res.json(carro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function atualizarCarro(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
        const carroAtualizado = await carroService.atualizarCarro(id, data);
        res.json(carroAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function deletarCarro(req, res) {
    const { id } = req.params;
    try {
        await carroService.deletarCarro(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    criarCarro,
    pegarCarros,
    pegarCarroPorId,
    atualizarCarro,
    deletarCarro
};