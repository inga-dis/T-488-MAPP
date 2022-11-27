import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity  } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
import DeleteList from "../DeleteList";
import BoardsThumbnail from '../BoardsThumbnail'

// const TasksList = ({ task }) => { 
//     const tasks = useSelector((state) => state.tasks);
    
//     return (
//     <View style={styles.listContainer}>
//         {tasks.map((task) => (
//             console.log(tasks)
//         ))}
//     </View>
//  );
// }

// export default TasksList;


const List = ({ list }) => {
    const { navigate } = useNavigation();
    console.log(list.id, "hæ")

    return (
        <TouchableOpacity
            onPress={() => navigate('ListView', { listName: list.name, listId: list.id, color: list.color})}>
            <View style={styles.list}> 
                <Text style={styles.listText}>{list.name}</Text>
                <DeleteList listid = {list.id}/>
            </View>
    </TouchableOpacity>
    );
};

export default List;