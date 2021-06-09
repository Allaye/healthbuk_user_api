// // let mysql = require('mysql');

// // let db = mysql.createConnection({
// //     host: 'localhost',
// //     database: 'healthbuk',
// //     user: 'oga',
// //     password: 'ogaogaogaoga'
// // })

// // db.connect(function (error) {
// //     if (error) console.log(error);
// //     else console.log("MYSQL Connected...");
// // })

// const ass = 'y vaer';

// (async () => {
//     console.log('testing if u will run');
//     // Code here
// })();

// module.exports =ass;


const jwt = require('jsonwebtoken');
const n = {n:2};
const too = jwt.sign(n, 'sosostrong');
const vv = jwt.verify(too, 'sosostrong');
console.log(too);
console.log(vv);