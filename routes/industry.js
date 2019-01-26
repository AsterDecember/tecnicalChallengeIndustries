const express = require('express');
const Industry = require('../models/Industry');
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKEY = fs.readFileSync(__dirname + '/private.key', 'utf8');
const publicKEY = fs.readFileSync(__dirname + '/public.key', 'utf8');
/**
 *  * Industry Endpoints
 */
router.post('/upload', (req, res, next) => {
  const token = req.headers.authorization
  const verifyOptions = {
    expiresIn: "12h",
    algorithm: "RS256"
  };
  let legit = jwt.verify(token, publicKEY, verifyOptions);
  if (legit.codeBy === "AsterDecember") {
    Industry.create(req.body)
      .then(response => res.status(201).json(response))
      .catch(e => res.json(e))
  }else res.status(403).json({"message":"You must get a token"}) 
})

router.get('/', (req, res, next) => {
  const token = req.headers.authorization
  const verifyOptions = {
    expiresIn: "12h",
    algorithm: "RS256"
  };
  let legit = jwt.verify(token, publicKEY, verifyOptions);
  if (legit.codeBy === "AsterDecember") {
    Industry.find()
    .then(response => res.status(200).json(response))
    .catch(e => res.json(e))
  }else res.status(403).json({"message":"You must get a token"}) 

})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const token = req.headers.authorization
  const verifyOptions = {
    expiresIn: "12h",
    algorithm: "RS256"
  };
  let legit = jwt.verify(token, publicKEY, verifyOptions);
  if (legit.codeBy === "AsterDecember") {
    Industry.findById(id)
    .then(response => res.status(200).json(response))
    .catch(e => res.json(e))
  }else res.status(403).json({"message":"You must get a token"}) 

})



module.exports = router;