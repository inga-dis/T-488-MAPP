import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { token } from './token'

export const getGenres = createAsyncThunk('genres/get',
    async () => {
        try {
            const response = await axios.get('https://api.kvikmyndir.is/genres',
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

const genresSlice = createSlice({
    name: 'genres',
    initialState: {
        genres: [],
        loading: false
    },
    reducers: {
    },
    extraReducers (builder) {
        builder
            .addCase(getGenres.pending, (state) => {
                state.loading = true
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.loading = false
                // Add all fetched to state
                state.genres = action.payload
            })
            .addCase(getGenres.rejected, (state) => {
                state.loading = false
            })
    }
})

export const { } = genresSlice.actions

export const selectAllGenres = state => state.genres.genres

export default genresSlice.reducer
