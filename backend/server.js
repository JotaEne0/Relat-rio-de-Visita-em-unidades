const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./db');

// Middlewares
app.use(cors());
app.use(express.json());

// Rota teste
app.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso!');
});

// Rotas
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Inicia servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

bcrypt.compare(senhaDigitada, hashArmazenado, function(err, result) {
    if (result) {
      console.log('Senha correta!');
    } else {
      console.log('Senha incorreta!');
    }
  });
  
  