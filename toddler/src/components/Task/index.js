import React from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import styles from "./styles";
import mainStyles from '../../styles/styles'
import DeleteTask from "../DeleteTask";




const Task = ({ task }) => {

    return (
        <TouchableOpacity>
            <View style={mainStyles.itemCard}> 
                <Text style={mainStyles.itemText}>{task.name}</Text>
                {/* <Text>{task.description}</Text> */}
                {/* <Text>CheckBox</Text> */}
                <DeleteTask taskid = {task.id}/>
            </View>
    </TouchableOpacity>
    );
};

export default Task;