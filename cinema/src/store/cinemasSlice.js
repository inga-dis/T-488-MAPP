import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { token } from './token'

export const getCinemas = createAsyncThunk('cinemas/get',
    async () => {
        try {
            const response = await axios.get('https://api.kvikmyndir.is/theaters',
                {
                    headers: {
                        'x-access-token': token
                    }
                })
            return response.data
        } catch (error) {
            console.error(error)
        }
    })

const cinemasSlice = createSlice({
    name: 'cinemas',
    initialState: {
        cinemas: [],
        loading: false
    },
    reducers: {
    },
    extraReducers (builder) {
        builder
            .addCase(getCinemas.pending, (state) => {
                state.loading = true
            })
            .addCase(getCinemas.fulfilled, (state, action) => {
                state.loading = false
                // Add any fetched movies to the array
                state.cinemas = action.payload
            })
            .addCase(getCinemas.rejected, (state) => {
                state.loading = false
            })
    }
})

export const { } = cinemasSlice.actions

export const selectAllCinemas = state => state.cinemas.cinemas

export default cinemasSlice.reducer
