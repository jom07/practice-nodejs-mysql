const conn = require('./conf').mySqlConnection('nodeDB');

conn.connect((err) => {
  if (err) throw err;
  console.log(`Connection state: ${conn.state}`);

  const sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';

  conn.query(sql, (err2, result) => {
    if (err2) throw err2;
    console.log(result);
  });
});
