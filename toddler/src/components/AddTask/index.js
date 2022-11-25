import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';



const AddTask = () => { 

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();

  function handleSubmit(){
    dispatch(addTask({ name: name, description: description, isFinished: false, listId: 2 }));
    setName('');
    setDescription('');


  }

  
  return (
    <View style={styles.container}>
      <TextInput placeholder="Task" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Task" value={description} onChangeText={setDescription} style={styles.input} />
      <Button title="Add" onPress={handleSubmit}/>
    </View>
  );
};

export default AddTask;



const styles = StyleSheet.create({
  container: {
    margin: 2
  },
  input: {
    backgroundColor: 'ghostwhite',
    marginBottom: 8,
    padding: 8,
    height: 40,
  },
});
