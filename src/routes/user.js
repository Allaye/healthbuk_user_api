const express = require('express');
const bcrypt = require('bcryptjs');
const conn = require('../db/mysql');
const password_hasher = require('../util/password_hash')
const router = express.Router();



router.get('/', (req, res)=>{
    res.json({status: 'success'});
});

router.post('/register', async (req, res)=>{
    conn.connect(async (err)=>{
        if(err) throw err;
        console.log('Database connected Succesfully')
        console.log(req.body.password)
        try{
            const hashed_password = await password_hasher(req.body.password);
            console.log(hashed_password);
        let query = `INSERT INTO useraccount(\
            firstname, lastname, age, profession, email, location, password)\
            VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.age}',\
                    '${req.body.profession}', '${req.body.email}', '${req.body.location}', '${hashed_password}')`
        conn.query(query, (err, result) => {
            if(err) throw err;
            console.log('User Account Created Successfully')
        });
        }catch(err) {
            console.log(err);
        }
        
    });
    
});

router.post('/login', (req, res)=>{

});

router.post('/logout', (req, res)=>{

})

router.delete('/close', (req, res)=>{
    res.json({status: 'closed account'})
})

module.exports = router;