const express = require('express')
const router = express.Router()
const researcherController = require('../controllers/researcherController')

router.get('/', researcherController.getResearchers)
router.post('/', researcherController.addResearcher)
router.delete('/:id', researcherController.removeResearcher)
router.patch('/:id', researcherController.updateResearcher)

module.exports = router