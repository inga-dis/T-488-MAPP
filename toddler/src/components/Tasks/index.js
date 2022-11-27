import React from "react";
import { useSelector } from "react-redux";
import {View, Button, Text } from 'react-native';
import AddTask from '../AddTask'

import Task from '../Task'

const Tasks = ( {listid}) => {
    // console.log("HÉR??!")
    const tasks = useSelector((state) => state.tasks);
    const task = tasks.filter((item) => item.listId == listid).map(({id, name, listid}) => ({id, name, listid}));
    // console.log(listid)
    return (
    <View>
        {/* <AddTask boardidfor={listid}></AddTask> */}

        {task.map((task) => (
            
            <Task  task={task} />
            
            
        ))}
        
    </View>
 );
}
export default Tasks;


// import React from "react";
// import { useSelector } from "react-redux";
// import {View, Button } from 'react-native';
// import AddTask from '../AddTask'
// import Task from '../Task'
// import styles from './styles';

// const Tasks = ( {listid}) => {
//     console.log("l") 
//     const tasks = useSelector((state) => state.tasks);
//     const task = tasks.filter((item) => item.listId == listid).map(({id, name, description, isFinished,listId}) => ({id, name, description, isFinished,listId}));

//     return (
//     <View style={styles.listContainer}>
//         {/* <AddTask boardidfor={boardid}></AddTask> */}
            
//         {task.map((task) => (
//             <Task  task={task} />
                
            
//         ))}
//     </View>
//  );
// }
// export default Tasks;


{/* <Text>{list.name}<Task list={list}></Task></Text> */}