const express = require('express')
const router = express.Router()
const vegController = require('../controllers/vegetables.controllers');
// Retrieve all vegetables
router.get('/', vegController.findAll);
// Create a new vegetable
router.post('/', vegController.create);
// Retrieve a vegetable user with id
router.get('/:id', vegController.findOne);
// Update a vegetable with id
router.put('/:id', vegController.update);
// Delete a vegetable with id
router.delete('/:id', vegController.delete);
module.exports = router