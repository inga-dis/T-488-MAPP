import { React, useState } from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import styles from "../../views/MainView/styles";
import mainStyles from '../../styles/styles'
import DeleteTask from "../DeleteTask";
import { CheckBox } from '@rneui/base';



const Task = ({ task }) => {

    const [finished, setFinished] = useState(false)

    const done = []

    const checked = () => {
        if(finished === true){
            done.push(task.id)
        } 
    }


    return (
        <TouchableOpacity>
            <View style={mainStyles.itemCard}> 
                <CheckBox checked={finished}
                onPress={() => (setFinished(!finished, checked(task.id)))} >
                </CheckBox> 
                <Text style={mainStyles.itemText}>{task.name}</Text>
                {/* <Text>{task.description}</Text> */}
                <DeleteTask taskid = {task.id}/>
            </View>
            <View > 

                {/* <Text style={mainStyles.itemDescriptionText}>{task.description}</Text> */}
                {/* <DeleteTask taskid = {task.id} /> */}
            </View>
    </TouchableOpacity>
    );
};

export default Task;
