import { createSlice } from "@reduxjs/toolkit";
import data from "../resources/data.json";

let nextBoardId = 4;

const boardsSlice = createSlice({
    name: "boards",
    initialState: data.boards,
    reducers: {
        addBoard(state, action) {
            state.push({
                id: nextBoardId++,
                name: action.payload.name,
                thumbnailImage: action.payload.thumbnailImage,
            });
        },

        deleteBoard(state, action) {
            return state.filter((board) => board.id !== action.payload.id);
        },

        editBoard(state, action) {
            console.log(action.payload);
            const board = state.find((board) => board.id === action.payload.id);
            if (action.payload.thumbnailImage) {
                board.thumbnailImage = action.payload.thumbnailImage;
            }
            if (action.payload.name) {
                board.name = action.payload.name;
            }
        },
    },
});

export const { addBoard, deleteBoard, editBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
