const path = require('path');
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const auth = require('../middleware/auth');
const password_hasher = require('../util/password_hash');
const generateAuthToken = require('../util/generateAuthtoken');
require('dotenv').config({path: path.resolve(__dirname,'../../.env')});



const router = express.Router();



router.post('/register', async (req, res)=>{
    try {
        const email = await User.findOne({where: {email: req.body.email}});
        if (!email){
            const password = await password_hasher(req.body.password);
            const user = {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: password,
            }
            await User.create(user);
            res.status(201).send({"user created": User});
        }else{
            throw new Error('Email already exists');
        }
    } catch (err){
        res.status(400).send(err);
    }
});


router.post('/login', async (req, res)=>{
    try {
        const user = await User.findOne({where: {email: req.body.email}});
        if(user){
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if(isMatch){
                const accesstoken = generateAuthToken({id: user.id}, process.env.access_token_secret);
                res.send({ accesstoken: accesstoken });
            }else{
                throw new Error('Authentication failed');
            }
        }else{
            throw new Error('Bad Logins!');
        }
    } catch (error) {
        res.status(401).send('Authentication failed');
    }
});



router.get('/profile', auth, async (req, res)=>{
    return res.render('profile', {user: req.user})
})



module.exports = router;