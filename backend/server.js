require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: 'senha123',
    database: 'relatorios'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

module.exports = db;
