const asyncHandler = require('express-async-handler')

const Test = require('../models/testModel')
const User = require('../models/userModel')

// @desc Get Tests
// @route GET /api/tests
// @access Private
const getTests = asyncHandler(async (req, res) => {
    const tests = await Test.find({ user: req.user.id })

    res.status(200).json(tests)
})

// @desc Set Test
// @route POST /api/tests
// @access Private
const setTest = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const test = await Test.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(test)
})

// @desc Update Test
// @route PUT /api/tests/:id
// @access Private
const updateTest = asyncHandler(async (req, res) => {
    const test = await Test.findById(req.params.id)

    if(!test) {
        res.status(400)
        throw new Error('Test not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged user matches the test user
    if (test.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedTest = await Test.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedTest)
})

// @desc Delete Tests
// @route DELETE /api/tests/:id
// @access Private
const deleteTest = asyncHandler(async (req, res) => {
    const test = await Test.findById(req.params.id)

    if(!test) {
        res.status(400)
        throw new Error('Test not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged user matches the test user
    if (test.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await test.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTests,
    setTest,
    updateTest,
    deleteTest
}