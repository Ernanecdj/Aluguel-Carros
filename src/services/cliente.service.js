const express = require('express');
const router = express.Router();
const Cliente = require("../models/cliente.model");

async function criarCliente(nome, email, senha) {
    return await Cliente.create({ nome, email, senha });
}

async function pegarClientes() {
    return await Cliente.findAll();
}

async function pegarClientePorId(id) {
    return await Cliente.findByPk(id);
}

async function atualizarCliente(id, data) {
    const cliente = await pegarClientePorId(id);
    if (!cliente) {
        throw new Error('Cliente não encontrado');
    }
    return await cliente.update(data);
}

async function deletarCliente(id) {
    const cliente = await pegarClientePorId(id);
    if (!cliente) {
        throw new Error('Cliente não encontrado');
    }
    return await cliente.destroy();
}

module.exports = {
    criarCliente,
    pegarClientes,
    pegarClientePorId,
    atualizarCliente,
    deletarCliente
};