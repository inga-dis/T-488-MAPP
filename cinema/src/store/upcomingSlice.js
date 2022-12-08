import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { token } from './token'
// First, define the reducer and action creators via `createSlice`



export const getUpcoming = createAsyncThunk('movies/get', 
    async () => {
        try {
        const response = await axios.get('https://api.kvikmyndir.is/upcoming', 
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

const upcomingSlice = createSlice({
    name: "upcoming",
    initialState: {},
    reducers: {
        getAllUpcoming(state, action) {
            state.data = [action.payload]
        },
        getUpcomingWithUId(state, action) {
            const UId = action.payload.UId
            const upcoming = state.find((upcoming) => upcoming.id === UId)
            return upcoming
        }, 
        // get upcoming trailer
        getUpcomingTrailer(state, action) {
            const UId = action.payload.UId
            const upcoming = state.find((upcoming) => upcoming.id === UId)
            if (upcoming.trailers.results[0]) {
                return upcoming.trailers.results[0]
                
            } else { 
                // return -1 if there is no trailer associated 
                return -1
            }
        }
    },
});



export const { getAllUpcoming, getAllUpcomingWithCId, getUpcomingWithUId } = upcomingSlice.actions;

export default upcomingSlice.reducer;


