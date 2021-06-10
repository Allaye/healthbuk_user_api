const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config({path: path.resolve(__dirname,'../../.env')});


const auth = async (req, res, next)=>{

    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.access_token_secret);
        const user = await User.findOne({where: { id: decoded.id}});

        if(!user){
            throw new Error()
        }
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({error: 'please provide authentication'})
    }
}

module.exports = auth 