
const express = require('express');
const router = express.Router();
const db = require('../db');
const autenticarToken = require('../authMiddleware');

router.post('/relatorio', autenticarToken, (req, res) => {
  const { data_visita, observacoes } = req.body;
  const usuario_id = req.usuario.id;
  const conteudo_json = JSON.stringify(req.body);

  console.log('Recebido do frontend:', req.body);

  const query = `
    INSERT INTO tabela_relatorios (usuario_id, data_visita, observacoes, conteudo_json)
    VALUES (?, ?, ?, ?)
  `;

  console.log('Query SQL:', query); // ✅ Agora pode logar a query

  db.query(query, [usuario_id, data_visita, observacoes, conteudo_json], (err, resultado) => {
    if (err) {
      console.error('Erro ao salvar relatório:', err.sqlMessage || err.message || err);
      return res.status(500).json({ mensagem: 'Erro ao salvar relatório', erro: err.sqlMessage });
    }

    res.status(201).json({ mensagem: 'Relatório salvo com sucesso!' });
  });
});


module.exports = router;

router.get('/relatorios', autenticarToken, (req, res) => {
  const usuario_id = req.usuario.id;

  const query = `
    SELECT id, data_visita, observacoes, conteudo_json, data_criacao
    FROM tabela_relatorios
    WHERE usuario_id = ?
    ORDER BY data_criacao DESC
  `;

  db.query(query, [usuario_id], (err, resultados) => {
    if (err) {
      console.error('Erro ao buscar relatórios:', err);
      return res.status(500).json({ mensagem: 'Erro ao buscar relatórios' });
    }

    const relatorios = resultados
  .map(rel => {
    let conteudo = null;
    console.log(`Relatório ID ${rel.id} - conteudo_json bruto:`, rel.conteudo_json);
    try {
      conteudo = JSON.parse(rel.conteudo_json);
    } catch (e) {
      console.warn(`Relatório ID ${rel.id} com JSON inválido — ignorando 'conteudo_json'.`);
    }

    return {
      id: rel.id,
      data_visita: rel.data_visita,
      observacoes: rel.observacoes,
      data_criacao: rel.data_criacao,
      conteudo
    };
  });

    res.status(200).json({ relatorios });
  });
});
