import { React } from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import mainStyles from '../../styles/styles'
import DeleteTask from "../DeleteTask";
import { useDispatch } from "react-redux";
import { updateTask } from '../../redux/taskSlice';
import { CheckBox } from '@rneui/base';
import EditTask from "../ModifyTask";




const Task = ({ task }) => {

    const dispatch = useDispatch();
    
    function toggleTask(){
        const newTaskState = !task.isFinished
        dispatch(
            updateTask({id: task.id, isFinished: newTaskState})
        );
      }

    return (
        <TouchableOpacity>
            <View style={mainStyles.itemCard}> 
                <CheckBox checked={task.isFinished}
                onPress={() => {toggleTask()}} >
                </CheckBox> 
                <Text style={mainStyles.itemText}>{task.name}</Text>
                <DeleteTask taskid = {task.id}/>
                <EditTask taskid={task.id}></EditTask>
            </View> 
    </TouchableOpacity>
    );
};

export default Task;
