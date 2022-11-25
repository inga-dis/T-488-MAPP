import { createSlice } from '@reduxjs/toolkit';
import data from '../resources/data.json'

let nextTaskId = 17;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: data.tasks,
  reducers: {
    addTask(state, action) {
      state.push({ id: nextTaskId++, name: action.payload.name, description: action.payload.description, isFinished: action.payload.isFinished, listId: action.payload.listId})
    },
    deleteTask(state, action) {
    },
    editTaskName(state, action) {

    },
    editTaskColor(state, action) {
        
    },
    editTaskBoard(state, action) {
        
    }    
  }
})

export const { addTask } = tasksSlice.actions

export default tasksSlice.reducer

