const mySql = require('mysql');

module.exports.mySqlConnection = (database) => mySql.createConnection(
  {
    host: 'localhost',
    port: '3308',
    user: 'root',
    password: 'password',
    database,
  },
);
