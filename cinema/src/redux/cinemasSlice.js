import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { token } from './token'
// First, define the reducer and action creators via `createSlice`

const cinemasSlice = createSlice({
    name: "cinemas",
    initialState: {},
    reducers: {
        getAllCinemas(state, action) {
            state.data = [action.payload]
        },
        // get all cinemas showing in the selected cinema. CId is cinema Id
        getCinemaWithCId(state, action) {
            const CId = action.payload.CId
            const cinema = state.find((cinema) => cinema.id === CId)
            return cinema
        }
    },
});


export const fetchAll = () => async (dispatch) => {
    try { 
        const response = await axios.get('https://api.kvikmyndir.is/theaters', {
            headers:  {
                'x-access-token' : token
            }    
        })
        dispatch(getAllCinemas(response.data))
    } catch (err) {
        console.log(err)
    }
}

export const { getAllCinemas, getCinemaWithCId } = cinemasSlice.actions;

export default cinemasSlice.reducer;


