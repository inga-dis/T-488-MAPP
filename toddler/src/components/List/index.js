import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet  } from "react-native";
import { useSelector } from "react-redux";
import mainStyles from '../../styles/styles'

import DeleteList from "../DeleteList";
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
    console.log(list.color)

    return (
        <TouchableOpacity
            onPress={() => navigate('ListView', { listName: list.name, listId: list.id, color: list.color})}>
            <View style={[mainStyles.itemCard, {backgroundColor: list.color}]} > 
                <Text style={mainStyles.itemText}>{list.name}</Text>
                <DeleteList listid = {list.id}/>
                
            </View>
    </TouchableOpacity>
    );
};

export default List;

const styles = StyleSheet.create({
    listColor: {

    }
  });