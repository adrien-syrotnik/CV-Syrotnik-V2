const mysql = require('mysql2');
const config = require('../config');

//const connection = mysqlNP.createConnection(config.db);
const pool = mysql.createPool(Object.assign({
  waitForConnections: true,
  connectionLimit: 15,
  queueLimit: 0
}, config.db));


async function query(sql, params) {
  const promisePool = pool.promise();
  // const connection = await mysql.createConnection(config.db);
  const [results,] = await promisePool.execute(sql, params);

  return results;
}

module.exports = {
  query
}