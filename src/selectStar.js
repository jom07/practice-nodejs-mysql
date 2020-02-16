const conn = require('./conf').mySqlConnection('nodeDB');

conn.connect((err) => {
  if (err) throw err;
  console.log(`Connection state: ${conn.state}`);

  const sql = 'SELECT * FROM customers';

  conn.query(sql, (err2, result, fields) => {
    if (err2) throw err2;
    // console.log(result);
    console.log(fields);
    for (let i = 0; i < result.length; i++) {
      console.log(`name: ${result[i].name}, email: ${result[i].email}`);
    }
    conn.end();
  });
});
