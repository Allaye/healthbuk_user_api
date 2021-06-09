const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: path.resolve(__dirname,'../../.env')})


const generateAuthToken = (user, access_token_secret)=>{
    try {
        return jwt.sign(user, access_token_secret);
        
    } catch (error) {
        console.error(error);
    }
}

module.exports =generateAuthToken;