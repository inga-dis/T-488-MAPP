import { createSlice, current } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";
import { useSelector } from "react-redux";
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
            console.log(action.payload.boardId)
            console.log(current(state))
        },
        deleteList: (state, action) => {
            return state.filter(list => list.id !== action.payload.id);
            console.log(current(state))

        },
        editList(state, action) {
          const list = state.find(list => list.id === action.payload.id);
          list.action.payload.catogory = action.payload.value
          
        }
    },
});

export const { addList, deleteList, editList } = listsSlice.actions;

export default listsSlice.reducer;
