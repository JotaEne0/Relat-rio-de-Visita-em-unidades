const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'E-mail e senha são obrigatórios' });
  }

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, resultados) => {
    if (err) {
      return res.status(500).json({ mensagem: 'Erro no servidor' });
    }

    if (resultados.length === 0) {
      return res.status(401).json({ mensagem: 'Usuário não encontrado' });
    }

    const usuario = resultados[0];

    bcrypt.compare(senha, usuario.senha, (err, isMatch) => {
      if (err) throw err;

      if (!isMatch) {
        return res.status(401).json({ mensagem: 'Senha incorreta' });
      }

      const token = jwt.sign(
        { id: usuario.id, nome: usuario.nome },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );

      res.json({ mensagem: 'Login bem-sucedido', token });
    });
  });
});

module.exports = router;
