const conn = require('./conf').mySqlConnection('nodeDB');

conn.connect((err) => {
  if (err) throw err;
  console.log(`Connection state: ${conn.state}`);

  const sql = 'SELECT * FROM customers WHERE id = 1';
  const sql2 = 'SELECT * FROM customers WHERE id > 4 AND id < 7';
  const sql3 = 'SELECT * FROM customers WHERE id BETWEEN 6 AND 10';
  const sql4 = "SELECT * FROM customers WHERE name LIKE 'm%'";
  const sql5 = 'SELECT * FROM customers WHERE'
  + " (name LIKE 'm%' OR name LIKE 'b%') AND email LIKE '%@example.%'";

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

  conn.query(sql3, (err2, result) => {
    if (err2) throw err2;
    // console.log(result);
    // console.log(fields);
    console.log(sql3);
    for (let i = 0; i < result.length; i++) {
      console.log(`id: ${result[i].id} name: ${result[i].name} email: ${result[i].email}`);
    }
  });

  conn.query(sql4, (err2, result) => {
    if (err2) throw err2;
    // console.log(result);
    // console.log(fields);
    console.log(sql4);
    for (let i = 0; i < result.length; i++) {
      console.log(`id: ${result[i].id} name: ${result[i].name} email: ${result[i].email}`);
    }
  });

  conn.query(sql5, (err2, result) => {
    if (err2) throw err2;
    // console.log(result);
    // console.log(fields);
    console.log(sql5);
    for (let i = 0; i < result.length; i++) {
      console.log(`id: ${result[i].id} name: ${result[i].name} email: ${result[i].email}`);
    }
  });
});
