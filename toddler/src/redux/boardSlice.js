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
      return state.filter(board => board.id !== action.payload.id);


    },
    editBoardName(state, action) {

    },
    editBoardImage(state, action) {

    }
  }
})

export const { addBoard, deleteBoard } = boardsSlice.actions

export default boardsSlice.reducer

