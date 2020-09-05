const mysql = require('mysql');
let Promise = require('bluebird');
// Go to BlueBird Promisification cp below line:- 
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const Insert = async (input) => {
  const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'emarket'
  });

  await connection.connectAsync();
 // console.log("success");
    console.log(input);
    let sql = "INSERT INTO USER VALUES (?,?,?,?,?,?,?)";
    await connection.queryAsync(sql,[
      input.name,
      input.email,
      input.password,
      input.mobile,
      input.weight,
      input.height,
      input.age
    ]);

  await connection.endAsync();
  console.log('inserted')
};

const data = {
  name:'omkar',
  password:123
};

//Insert(data);

module.exports = {Insert};