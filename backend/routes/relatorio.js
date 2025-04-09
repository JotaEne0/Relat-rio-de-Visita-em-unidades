const express = require('express');
const router = express.Router();
const db = require('../db');
const autenticarToken = require('../authMiddleware');
const relatorioController = require('../controllers/relatorioController');

router.post('/relatorio', autenticarToken, (req, res) => {
  const { data_visita, status, justificativa, observacoes } = req.body;
  const usuario_id = req.usuario.id;

  const query = `
    INSERT INTO relatorios (usuario_id, data_visita, status, justificativa, observacoes)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [usuario_id, data_visita, status, justificativa, observacoes], (err, resultado) => {
    if (err) {
      console.error('Erro ao salvar relatório:', err);
      return res.status(500).json({ mensagem: 'Erro ao salvar relatório' });
    }

    res.status(201).json({ mensagem: 'Relatório salvo com sucesso!' });
  });
});module.exports = router;
