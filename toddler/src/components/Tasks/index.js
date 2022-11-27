import React from "react";
import { useSelector } from "react-redux";
import {View} from 'react-native';
import AddTask from '../AddTask'

import Task from '../Task'

const Tasks = ( {listid}) => {
    // console.log("HÉR??!")
    const tasks = useSelector((state) => state.tasks);
    const task = tasks.filter((item) => item.listId == listid).map(({id, name,description, listid}) => ({id, name,description, listid}));
    console.log("hhaah", listid)
    return (
    <View>
        
        <AddTask listidfor={listid}></AddTask>
        {/* <AddTask boardidfor={listid}></AddTask> */}

        {task.map((task) => (
            
            <Task  task={task} />
            
            
        ))}
        
    </View>
 );
}
export default Tasks;