import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { token } from './token'


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
    initialState: {
        upcoming: [],
        loading: false,
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
          .addCase(getUpcoming.pending, (state) => {
            state.loading = true
          })
          .addCase(getUpcoming.fulfilled, (state, action) => {
            state.loading = false
            // Add any fetched movies to the array
            state.upcoming = action.payload
          })
          .addCase(getUpcoming.rejected, (state) => {
            state.loading = false
          })
      }
});



export const { } = upcomingSlice.actions;

export const selectAllUpcoming = state => state.upcoming.upcoming


export default upcomingSlice.reducer;


