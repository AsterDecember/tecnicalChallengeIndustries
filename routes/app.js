const express = require('express');
const router = express.Router();
const App = require('../models/App');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKEY = fs.readFileSync(__dirname + '/private.key', 'utf8');
const publicKEY  = fs.readFileSync(__dirname+ '/public.key', 'utf8');
//TODO: JWT on response

router.post('/register', (req, res, next) => {
    const {user} = req.body
    const signOptions = {
        expiresIn: "12h",
        algorithm: "RS256"
    };
    const token = jwt.sign({
        codeBy: 'AsterDecember'
    }, privateKEY, signOptions);
    res.json(token)
})

router.get('/verify',(req,res,next)=>{
    const token = req.headers.authorization
    const verifyOptions = {
        expiresIn: "12h",
        algorithm: "RS256"
    };
    let legit = jwt.verify(token, publicKEY, verifyOptions);
    res.json(legit)
})
module.exports = router;