const express = require('express')

const router = express.Router()
const { addPlant, deletePlant, updatePlant, getPlant, getPlants } = require('../controllers/plantControllers')
router.get('/', getPlants)

router.get('/:id', getPlant)

router.post('/', addPlant)

router.patch('/:id', updatePlant)

router.delete('/:id', deletePlant)

module.exports = router