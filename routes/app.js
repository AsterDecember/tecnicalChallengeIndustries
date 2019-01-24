const express = require('express');
const router = express.Router();
const App = require('../models/App');
const fs   = require('fs');
const jwt  = require('jsonwebtoken');
const privateKEY  = fs.readFileSync('../keys/private.key', 'utf8');
const publicKEY  = fs.readFileSync('../keys/public.key','utf8');
//TODO: JWT on response
router.post('/register', (req, res, next) => {
    res.json(privateKEY)
    /*App.create(req.body)
        .then(response => {
            res.json(response)
        })
        .catch(e => res.json(e))*/
})


module.exports = router;