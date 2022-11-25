import { func } from 'prop-types';
import data from '../resources/data.json'

const loadAllData = async () => {

    if (!boards.exists) {
        const boards = data.boards;
    }
    if (!lists.exists) {
        const lists = data.lists;
    } 
    if (!tasks.exists) {
        const tasks = data.tasks;
    }
}

const getAllBoards = async () => {
    await loadAllData();
    return boards;
  }
  
const getAllLists = async () => {
    await loadAllData();
    return lists;
}

const getAllTasks = async () => {
    await loadAllData();
    return tasks;
}

