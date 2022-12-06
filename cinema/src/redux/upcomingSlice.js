import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { token } from './token'
// First, define the reducer and action creators via `createSlice`

const upcomingSlice = createSlice({
    name: "upcoming",
    initialState: {},
    reducers: {
        getAllUpcoming(state, action) {
            state.data = [action.payload]
            console.log(state.data)
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


export const fetchAll = () => async (dispatch) => {
    try { 
        const response = await axios.get('https://api.kvikmyndir.is/upcoming', {
            headers:  {
                'x-access-token' : token
            }    
        })
        dispatch(getAllUpcoming(response.data))
    } catch (err) {
        console.log(err)
    }
}

export const { getAllUpcoming, getAllUpcomingWithCId, getUpcomingWithUId } = upcomingSlice.actions;

export default upcomingSlice.reducer;


