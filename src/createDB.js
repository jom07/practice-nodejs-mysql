const conn = require('./conf').mySqlConnection();

conn.connect((err) => {
  if (err) throw err;
  console.log(`Connection state: ${conn.state}`);

  conn.query('CREATE DATABASE nodeDB', (err2, result) => {
    if (err2) throw err2;
    console.log(result);
  });
});
