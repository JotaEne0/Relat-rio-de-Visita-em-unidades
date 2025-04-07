const bcrypt = require('bcryptjs');

bcrypt.hash('senha123', 10, (err, hash) => {
  if (err) throw err;
  console.log('Hash da senha:', hash);
});
