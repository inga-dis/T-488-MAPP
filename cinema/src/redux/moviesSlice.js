import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { token } from './token'
// First, define the reducer and action creators via `createSlice`



export const getMovies = createAsyncThunk('movies/get', 
    async (thunkAPI) => {
        const response = await axios.get('https://api.kvikmyndir.is/movies', 
            {
                headers:  {
                    'x-access-token' : token
                }    
            })
        return response.data
    } 
)


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
    },
    reducers: {
        // getAllMovies(state, action) {
        //     state.data = [action.payload]
        // },
        // // get all movies showing in the selected cinema. CId is cinema Id
        // getAllMoviesWithCId(state, action) {
        //     const CId = action.payload.CId
        //     return state.filter((movie) => movie.showtimes.cinema.id === CId)
        // },
        // getMovieWithMId(state, action) {
        //     const MId = action.payload.MId
        //     const movie = state.find((movie) => movie.id === MId)
        //     return movie
        // }, 
        getShowtimesWithCId(state, action) {
            const MId = action.payload.MId
            const CId = action.payload.CId
            const movie = state.find((movie) => movie.id === MId)
            const movieShowtimes = movie.showtimes.filter((showtime) => showtime.cinema.id === CId)
            return movieShowtimes
        },
        // getMovieGenresWithMId(state, action) {
        //     const MId = action.payload.MId
        //     const movie = state.find((movie) => movie.id === MId)
        //     return movie.genre
        // }

    },
    extraReducers(builder) {
        builder
          .addCase(getMovies.pending, (state) => {
            state.loading = true
          })
          .addCase(getMovies.fulfilled, (state, action) => {
            state.loading = false
            // Add any fetched movies to the array
            state.movies = action.payload
          })
          .addCase(getMovies.rejected, (state) => {
            state.loading = false
          })
      }
});

export const { getShowtimesWithCId } = moviesSlice.actions;

export const selectAllMovies = state => state.movies

export const selectAllMoviesInCinema = (state, CId) =>
    state.movies.find(movie => movie.showtimes.cinema.id === CId)

export const selectMovie = (state, MId) => 
    state.movies.find((movie) => movie.id === MId)


export default moviesSlice.reducer;



