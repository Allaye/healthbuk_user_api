const jwt = require('jsonwebtoken');


const generateAuthToken = (user, access_token_secret)=>{
    try {
        return jwt.sign(user, access_token_secret);
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = generateAuthToken;