const path = require('path');
const express = require('express');
const userroutes = require('./routes/user');

const app = express();
// console.log(path.join(__dirname, '../views'));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(userroutes);
const port = process.env.PORT || 9000;


app.listen(port, ()=>{
    console.log(`API is running and listening on port ${port}...`)
});
