const uuidv4 = require('uuid/v4');
const conn = require('./conf').mySqlConnection('nodeDB');

function addUsers(connection, num) {
  const sql = 'INSERT INTO customers (name, email) VALUES ?';
  const values = [];

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
