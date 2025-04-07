// controllers/authController.js
const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ mensagem: 'Email e senha são obrigatórios' });
    }

    const query = 'SELECT * FROM usuarios WHERE email = ?';

    db.query(query, [email], (err, results) => {
        if (err) return res.status(500).json({ mensagem: 'Erro no servidor' });
        if (results.length === 0) return res.status(401).json({ mensagem: 'Credenciais inválidas' });

        const usuario = results[0];

        bcrypt.compare(senha, usuario.senha, (err, isMatch) => {
            if (err) return res.status(500).json({ mensagem: 'Erro ao comparar senhas' });

            if (!isMatch) return res.status(401).json({ mensagem: 'Credenciais inválidas' });

            const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.json({ token });
        });
    });
};
