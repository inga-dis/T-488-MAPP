import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
import mainStyles from "../../styles/styles";



const AddTask = ({ listidfor }) => { 
    console.log(listidfor)

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const dispatch = useDispatch();

  function handleSubmit(){
    dispatch(
        addTask({ name: name, description: description, isFinished: false, listId: listidfor })
    );
    setName('');
    setDescription('');
  }

  
  return (
    <View style={mainStyles.containerAddX}>
            <Text style={mainStyles.header2}> Add Task </Text>
            <TextInput
                placeholder="Task name"
                value={name}
                onChangeText={setName}
                style={mainStyles.input}
            />
            <TextInput
                placeholder="Task description"
                value={description}
                onChangeText={setDescription}
                style={mainStyles.input}
            />
            <TouchableOpacity
                style={[mainStyles.button, mainStyles.buttonAddX]}
                onPress={handleSubmit}
            >
                <Text style={mainStyles.buttonText}> Add </Text>
            </TouchableOpacity>
        </View>
  );
};

export default AddTask;