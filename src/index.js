const express = require("express");
const sequelize = require('./database/db.config');
const port = 3000;
const app = express();

const clienteController = require("./controllers/cliente.controller");
const carroController = require('./controllers/carro.controller');
const aluguelController = require('./controllers/aluguel.controller');

app.use(express.json());

app.post('/api/clientes', clienteController.criarCliente);
app.get('/api/clientes', clienteController.pegarClientes);
app.get('/api/clientes/:id', clienteController.pegarClientePorId);
app.put('/api/clientes/:id', clienteController.atualizarCliente);
app.delete('/api/clientes/:id', clienteController.deletarCliente);

app.post('/api/carros', carroController.criarCarro);
app.get('/api/carros', carroController.pegarCarros);
app.get('/api/carros/:id', carroController.pegarCarroPorId);
app.put('/api/carros/:id', carroController.atualizarCarro);
app.delete('/api/carros/:id', carroController.deletarCarro);

app.post('/api/aluguel', aluguelController.criarAluguel);
app.get('/api/aluguel', aluguelController.pegarAlugueis);
app.get('/api/aluguel/:id', aluguelController.pegarAluguelPorId);
app.put('/api/aluguel/:id', aluguelController.atualizarAluguel);
app.delete('/api/aluguel/:id', aluguelController.deletarAluguel);

sequelize.sync();

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});