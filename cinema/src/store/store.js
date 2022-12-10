import { configureStore } from '@reduxjs/toolkit'
import cinemasSlice from './cinemasSlice'
import moviesSlice from './moviesSlice'
import upcomingSlice from './upcomingSlice'
import genresSlice from './genresSlice'


export const store = configureStore({
    reducer: {
        cinemas: cinemasSlice,
        movies: moviesSlice,
        upcoming: upcomingSlice,
        genres: genresSlice,
    }
});