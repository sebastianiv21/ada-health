const express = require('express')
const router = express.Router()
const { getTests, setTest, updateTest, deleteTest } = require('../controllers/testController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTests).post(protect, setTest)

router.route('/:id').put(protect, updateTest).delete(protect, deleteTest)

module.exports = router