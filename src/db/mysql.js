const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'postgres',
    password: 'Allaye',
    database: 'healthbuk'
});
