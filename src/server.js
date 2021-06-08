const express = require('express');
const userroutes = require('./routes/user');

const app = express();

app.use(express.json());
app.use(userroutes);
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`API is running and listening on port ${port}...`)
});
