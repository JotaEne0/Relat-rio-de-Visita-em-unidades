const bcrypt = require('bcryptjs');

const senhaPlana = '2000';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(senhaPlana, salt, (err, hash) => {
    if (err) throw err;
    console.log('Hash gerado:', hash);
  });
});
