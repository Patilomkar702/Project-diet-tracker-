const mysql = require('mysql');
let Promise = require('bluebird');
// Go to BlueBird Promisification cp below line:- 
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const Read = async () => {

  const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'emarket'
  });

  await connection.connectAsync();
      let sql = "SELECT * FROM USER";
      const result = await connection.queryAsync(sql);
  await connection.endAsync();
  return result;
  
};

//Read();
module.exports = {Read};
