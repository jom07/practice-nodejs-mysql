const conn = require('./conf').mySqlConnection('nodeDB');

conn.connect((err) => {
  if (err) throw err;
  console.log(`Connection state: ${conn.state}`);

  const sql = 'SELECT * FROM customers WHERE id >= 1 ORDER BY name DESC, id';
  const sql2 = "SELECT * FROM customers WHERE name NOT LIKE 'user_%' ORDER BY email";

  conn.query(sql, (err2, result) => {
    if (err2) throw err2;
    // console.log(result);
    // console.log(fields);
    console.log(sql);
    for (let i = 0; i < result.length; i++) {
      console.log(`id: ${result[i].id} name: ${result[i].name} email: ${result[i].email}`);
    }
  });

  conn.query(sql2, (err2, result) => {
    if (err2) throw err2;
    // console.log(result);
    // console.log(fields);
    console.log(sql2);
    for (let i = 0; i < result.length; i++) {
      console.log(`id: ${result[i].id} name: ${result[i].name} email: ${result[i].email}`);
    }
  });
});
