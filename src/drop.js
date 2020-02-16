const conn = require('./conf').mySqlConnection('nodeDB');

conn.connect((err) => {
  if (err) throw err;
  console.log(`Connection state: ${conn.state}`);

  const sql = 'DROP TABLE customers';

  conn.query(sql, (err2, result) => {
    if (err2) throw err2;
    console.log(result);
    conn.end();
  });
});
