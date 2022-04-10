import axios from 'axios'

const API_URL = '/api/tests/'

// Create new test
const createTest = async (testData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, testData, config)

    return response.data
}

// Get user tests
const getTests = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete user test
const deleteTest = async (testId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + testId, config)

    return response.data
}

const testService = {
    createTest,
    getTests,
    deleteTest,
}

export default testService