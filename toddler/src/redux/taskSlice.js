import { createSlice } from '@reduxjs/toolkit';
import data from '../resources/data.json'

let nextTaskId = 17;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: data.tasks,
  reducers: {
    addTask(state, action) {
      state.push({ 
        id: nextTaskId++, 
        name: action.payload.name, 
        description: action.payload.description, 
        isFinished: action.payload.isFinished, 
        listId: action.payload.listId})
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload.id);
    },
    editTaskName(state, action) {
      

    },
    editTaskColor(state, action) {
        
    },
    editTaskBoard(state, action) {
        
    }    
  }
})

export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer

