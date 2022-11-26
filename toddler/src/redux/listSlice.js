import { createSlice } from '@reduxjs/toolkit';
import data from '../resources/data.json'

let nextListId = 9;

const listsSlice = createSlice({
  name: 'lists',
  initialState: data.lists,
  reducers: {
    addList(state, action) {
      state.push({ id: nextListId++, name: action.payload.name, color: action.payload.color, boardId: action.payload.boardId })
    },
    deleteList(state, action) {
    },
    editListName(state, action) {

    },
    editListColor(state, action) {
        
    },
    editListList(state, action) {
        
    }    
  }
})

export const { addList } = listsSlice.actions

export default listsSlice.reducer

