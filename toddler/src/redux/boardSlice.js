import data from '../resources/data.json'
import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    boardsData: [],
    isLoading: false,
    // Insert here variables needed for each board for features.
    // example: noOfLists: 3
    // or : lists: []
};

const boards = (state = initalState, action) => {
    switch (action.type) {
      case data.LOAD:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case USER.LOAD_SUCCESS:
        return {
          ...state,
          usersData: action.usersData,
          isLoading: false,
        };
      default:
        return state;
    }
  };

const boardSlice = createSlice({
    name: 'boards', 
    initialState
});
export default boardSlice.reducer