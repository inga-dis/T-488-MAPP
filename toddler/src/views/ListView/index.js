import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Task from '../../components/Tasks';
import styles from '../../styles/styles';
import { useSelector } from "react-redux";



const ListView = ({ route }) => {

    const tasks = route.params;
    // const tasks = useSelector((state) => state.tasks);
    // console.log("HAHAHAH  ",tasks)

    return (
        
        <View >
            <Text style={styles.header}>{tasks.listName}</Text>
            {/* <Task Id={tasks.listId} ></Task> */}
            <Task listid={tasks.listId} ></Task>

            
        {/* <Task /> */}
        </View>
        
    );
}

export default ListView;


// import React, { useState, useEffect } from 'react';
// import { View, ImageBackground, Text } from 'react-native';
// import List from '../../components/Lists';
// import styles from '../../styles/styles';



// const ListView = ({ route }) => {

//     const list = route.params;


//     return (
//         <View >
//             <AddList boardidfor={boardid}></AddList>

//             <Text style={styles.header}>{list.listName}</Text>
//             <List boardid={list.listId} ></List>
//         </View>
//     );
// }

// export default ListView;