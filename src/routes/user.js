const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({status: 'success'});
});

router.get('/register', (req, res)=>{
    res.json({status: 'registered'});
});

router.post('/login', (req, res)=>{

});

router.post('/logout', (req, res)=>{

})

router.delete('/close', (req, res)=>{
    res.json({status: 'closed account'})
})

module.exports = router;