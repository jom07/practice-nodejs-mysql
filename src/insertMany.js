const uuidv4 = require('uuid/v4');
const conn = require('./conf').mySqlConnection('nodeDB');

function addUsers(connection, num) {
  const sql = 'INSERT INTO customers (name, email) VALUES ?';
  const values = [['Bob', 'bob@example.com'],
    ['Marc', 'marc@example.com'], ['Bob', 'bob1@example.com'],
    ['Bob', 'bob2@example.com'], ['Bob', 'bob3@example.com']];

  for (let i = 1; i <= num; i++) {
    values.push([`user_${uuidv4()}`, `user_${uuidv4()}@example.com`]);
  }

  connection.query(sql, [values], (err, result) => {
    if (err) throw err;
    console.log(result);
    connection.end();
  });
}

conn.connect((err) => {
  if (err) throw err;
  console.log(`Connection state: ${conn.state}`);
  addUsers(conn, 1e1);
});
