const express = require('express');
const Industry = require('../models/Industry');
const router = express.Router();

/**
 *  * Industry Endpoints
 */
router.post('/industry', (req, res, next) => {
  Industry.create(req.body)
    .then(response => res.json(response))
    .catch(e => res.json(e))
})

router.get('/industry', (req, res, next) => {
  Industry.find()
    .then(response => res.json(response))
    .catch(e => res.json(e))
})

router.get('/industry/:id', (req, res, next) => {
  const { id } = req.params
  Industry.findById(id)
    .then(response => res.json(response))
    .catch(e => res.json(e))
})

router.put('/industry/:id', (req, res, next) => {
  const { id } = req.params
  Industry.findByIdAndUpdate(id, { $set: req.body })
    .then(response => res.json({ message: "industry update" }))
    .catch(e => res.json(e))
})

router.delete('/books/:id', (req, res, next) => {
  const { id } = req.params
  Industry.findByIdAndRemove(id)
    .then(response => res.json({ message: "Libro eliminado" }))
    .catch(e => res.json(e))
})


module.exports = router;