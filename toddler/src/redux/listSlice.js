import { createSlice, current } from "@reduxjs/toolkit";
import data from "../resources/data.json";

let nextListId = 9;

const listsSlice = createSlice({
    name: "lists",
    initialState: data.lists,
    reducers: {
        addList(state, action) {
            state.push({
                id: nextListId++,
                name: action.payload.name,
                color: action.payload.color,
                boardId: action.payload.boardId,
            });

        },
        deleteList: (state, action) => {
            return state.filter(list => list.id !== action.payload.id);
   

        },
        editList(state, action) {
            const list = state.find(list => list.id === action.payload.id);
            if (action.payload.color) {
                list.color = action.payload.color;
            }
            if (action.payload.name) {
                list.name = action.payload.name;      
            }
          
        }
    },
});

export const { addList, deleteList, editList } = listsSlice.actions;

export default listsSlice.reducer;
