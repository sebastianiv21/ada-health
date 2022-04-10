import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import thunk from 'redux-thunk'
import testService from './testService'

const initialState = {
    tests: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new test
export const createTest = createAsyncThunk('tests/create', async (testData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await testService.createTest(testData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

// Get user tests
export const getTests = createAsyncThunk('tests/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await testService.getTests(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

// Delete user test
export const deleteTest = createAsyncThunk('tests/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await testService.deleteTest(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTest.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTest.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tests.push(action.payload)
            })
            .addCase(createTest.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getTests.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTests.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tests = action.payload
            })
            .addCase(getTests.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteTest.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteTest.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tests = state.tests.filter((test) => test._id !== action.payload.id)
            })
            .addCase(deleteTest.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = testSlice.actions
export default testSlice.reducer