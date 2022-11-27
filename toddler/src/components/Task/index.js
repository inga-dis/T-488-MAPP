import React from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import styles from "./styles";
import mainStyles from '../../styles/styles'




const Task = ({ task }) => {

    return (
        <TouchableOpacity>
            <View style={mainStyles.itemCard}> 
                <Text style={mainStyles.itemText}>{task.name}</Text>
                <Text>{task.description}</Text>
                {/* <Text>CheckBox</Text> */}
            </View>
    </TouchableOpacity>
    );
};

export default Task;

// import React from "react";
// import { useNavigation } from '@react-navigation/native';
// import { View, Text, TouchableOpacity  } from "react-native";
// import { useSelector } from "react-redux";
// import styles from "./styles";



// const List = ({ task }) => {
//     console.log(task)

//     return (
//         <TouchableOpacity>
//             <View> 
//                 {/* <Text>{task.name}</Text> */}
//                 <Text>VIRKAAA</Text>
//             </View>
//     </TouchableOpacity>
//     );
// };

// export default List;


// import React from "react";
// import { useNavigation } from '@react-navigation/native';
// import { View, Text, TouchableOpacity  } from "react-native";
// import { useSelector } from "react-redux";
// import styles from "./styles";

// const Task = ({ tasks }) => {
//     // console.log(tasks.id)

//     return (
//         <TouchableOpacity>
//             <View> 
//                 <Text>HAllp</Text>
                
//             </View>
//     </TouchableOpacity>
//     );
// };

// export default Task;


// import React from "react";
// import { useSelector } from "react-redux";
// import {View, Text } from 'react-native';
// import styles from './styles';

// const Task = ( {list}) => {
//     const tasks = useSelector((state) => state.tasks);
//     const currentTasks = tasks.filter((item) => item.listId == list.id).map(({id, name, listId}) => ({id, name, listId}));

//     return (
//     <View style={styles.listContainer}>
//         {currentTasks.map((currentTasks) => (
//             <Text>{currentTasks.name}</Text>
//         ))}
//     </View>
//  );
// }
// export default Task;

