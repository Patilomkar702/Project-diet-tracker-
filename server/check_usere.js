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
   try{
    let sql =`SELECT * FROM USER WHERE NAME="${input.name}" AND PASSWORD="${input.password}" `;
    let result = await connection.queryAsync(sql);
    return result;
   }
   catch(err){
     console.log(err);
   }
   console.log('checked',sql)
  await connection.endAsync();
 
};

const data = {
  name:'omkar',
  password:123
};

//Insert(data);

module.exports = {Insert};