const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const db = require('./db');
require('dotenv').config();
dotenv.config();

const authRoutes = require('./routes/auth');
const relatorioRoutes = require('./routes/relatorio');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota teste
app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});

// Rotas de autenticação
app.use('/auth', authRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Rotas


app.use('/api', authRoutes);
app.use('/api', relatorioRoutes);
