import React from "react";
import { useSelector } from "react-redux";
import {View} from 'react-native';
import AddTask from '../AddTask'

import Task from '../Task'

const Tasks = ( {listid}) => {
    const tasks = useSelector((state) => state.tasks);
    const task = tasks.filter((item) => item.listId == listid).map(({id, name,description, listid}) => ({id, name,description, listid}));
    return (
    <View>
        
        <AddTask listidfor={listid}></AddTask>

        {task.map((task) => (
            
            <Task  task={task} />
            
            
        ))}
        
    </View>
 );
}
export default Tasks;