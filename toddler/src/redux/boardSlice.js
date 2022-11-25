import { createSlice } from '@reduxjs/toolkit';
import data from '../resources/data.json'

let nextBoardId = 4;

const boardsSlice = createSlice({
  name: 'boards',
  initialState: data.boards,
  reducers: {
    addBoard(state, action) {
      state.push({ id: nextBoardId++, name: action.payload.name, thumbnailImage: action.payload.thumbnailImage})
    },
    deleteBoard(state, action) {

    },
    editBoardName(state, action) {

    },
    editBoardImage(state, action) {

    }
  }
})

export const { addBoard } = boardsSlice.actions

export default boardsSlice.reducer

