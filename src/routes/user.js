const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const password_hasher = require('../util/password_hash');
const generateAuthToken = require('../util/generateAuthtoken');
const router = express.Router();



router.get('/', (req, res)=>{
    res.json({status: 'success'});
});


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
                const accesstoken = 
            }

        }
    } catch (error) {
        
    }
});

router.post('/logout', (req, res)=>{

})

router.delete('/close', (req, res)=>{
    res.json({status: 'closed account'})
})

module.exports = router;