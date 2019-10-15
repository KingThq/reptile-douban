const mysql = require('mysql');
const bluebird = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'douban_movie',
  user: 'root',
  password: '123456'
});

connection.connect();

// bluebird是为了方便支持promise语法化
// 然后直接把数据库的query查询语句导出方便之后调用
module.exports = bluebird.promisify(connection.query).bind(connection);