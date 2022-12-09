import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { token } from './token'

export const getMovies = createAsyncThunk('movies/get', 
    async () => {
        try {
        const response = await axios.get('https://api.kvikmyndir.is/movies', 
            {
                headers:  {
                    'x-access-token' : token
                }    
            })
        return response.data
    } catch (error) {
        console.error(error);
    }
})

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
          .addCase(getMovies.pending, (state) => {
            state.loading = true
          })
          .addCase(getMovies.fulfilled, (state, action) => {
            state.loading = false
            // Add all fetched to state
            state.movies = action.payload
          })
          .addCase(getMovies.rejected, (state) => {
            state.loading = false
          })
      }
});


export const {} = moviesSlice.actions;

export const selectAllMovies = state => state.movies.movies

export default moviesSlice.reducer;