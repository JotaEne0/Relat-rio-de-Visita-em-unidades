const express = require('express');
const router = express.Router();
const db = require('../db');
const autenticarToken = require('../authMiddleware');
const relatorioController = require('../controllers/relatorioController');

router.post('/relatorio', autenticarToken, (req, res) => {
  const { data_visita, status, justificativa, observacoes } = req.body;
  const usuario_id = req.usuario.id;

  const query = `
  INSERT INTO tabela_relatorios (usuario_id, data_visita, status, justificativa, observacoes)
  VALUES (?, ?, ?, ?, ?)
`;

  db.query(query, [usuario_id, data_visita, status, justificativa, observacoes], (err, resultado) => {
    if (err) {
      console.error('Erro ao salvar relatório:', err.sqlMessage || err.message || err);
      return res.status(500).json({ mensagem: 'Erro ao salvar relatório', erro: err.sqlMessage });
    }    

    res.status(201).json({ mensagem: 'Relatório salvo com sucesso!' });
  });
});module.exports = router;

router.get('/relatorios', autenticarToken, (req, res) => {
  const usuario_id = req.usuario.id;

  const query = `
    SELECT id, data_visita, status, justificativa, observacoes, data_criacao
    FROM tabela_relatorios
    WHERE usuario_id = ?
    ORDER BY data_criacao DESC
  `;

  db.query(query, [usuario_id], (err, resultados) => {
    if (err) {
      console.error('Erro ao buscar relatórios:', err);
      return res.status(500).json({ mensagem: 'Erro ao buscar relatórios' });
    }

    res.status(200).json({ relatorios: resultados });
  });
});

