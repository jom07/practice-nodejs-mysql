const conn = require('./conf').mySqlConnection('nodeDB');

conn.connect((err) => {
  if (err) throw err;
  console.log(`Connection state: ${conn.state}`);

  const sql = "DELETE FROM customers WHERE name LIKE 'user_%'";
  const sql2 = 'DELETE FROM customers WHERE id > 10';

  conn.query(sql, (err2, result) => {
    if (err2) throw err2;
    console.log(sql);
    console.log(result);
  });

  conn.query(sql2, (err2, result) => {
    if (err2) throw err2;
    console.log(sql2);
    console.log(result);
  });
});
