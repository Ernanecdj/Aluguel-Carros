const express = require('express');
const router = express.Router();
const clienteService = require("../services/cliente.service");

async function criarCliente(req, res) {
    const {nome, email, senha} = req.body;
    try {
        const cliente = await clienteService.criarCliente(nome, email, senha);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function pegarClientes(req, res) {
    try {
        const clientes = await clienteService.pegarClientes();
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function pegarClientePorId(req, res) {
    const { id } = req.params;
    try {
        const cliente = await clienteService.pegarClientePorId(id);
        if(!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function atualizarCliente(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
        const clienteAtualizado = await clienteService.atualizarCliente(id, data);
        res.json(clienteAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function deletarCliente(req, res) {
    const { id } = req.params;
    try {
        await clienteService.deletarCliente(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    criarCliente,
    pegarClientes,
    pegarClientePorId,
    atualizarCliente,
    deletarCliente
};