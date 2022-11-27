import { createSlice } from "@reduxjs/toolkit";
import data from "../resources/data.json";

let nextTaskId = 17;

const tasksSlice = createSlice({
    name: "tasks",
    initialState: data.tasks,
    reducers: {
        addTask(state, action) {
            state.push({
                id: nextTaskId++,
                name: action.payload.name,
                description: action.payload.description,
                isFinished: false,
                listId: action.payload.listId,
            });
        },
        deleteTask(state, action) {
            return state.filter((task) => task.id !== action.payload.id);
        },
        updateTask(state, action) {
            task = state.find((task) => task.id === action.payload.id);
            task.isFinished = action.payload.isFinished;
        },

        editTask(state, action) {
            console.log(action.payload)
            const task = state.find((task) => task.id === action.payload.id);
            if (action.payload.description) {
                task.description = action.payload.description;
            }
            if (action.payload.name) {
                task.name = action.payload.name;
            }
        },
    },
});

export const { addTask, deleteTask, updateTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
