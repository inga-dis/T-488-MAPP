import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listSlice';



const AddList = ( {boardidfor}) => { 

  const [name, setName] = useState();
  const [color, setColor] = useState();
  const dispatch = useDispatch();
  // console.log(boardidfor)

  function handleSubmit(){
    dispatch(addList({ name: name, color: color, boardId: {boardidfor} }));
    setName('');
    setColor('');

  }


  // function handleEdit(){
  //   dispatch(editBoard{ name: })
  // }
  
  return (
    <View style={styles.container}>
      <TextInput placeholder="List" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="List" value={color} onChangeText={setColor} style={styles.input} />
      <Button title="Add" onPress={handleSubmit}/>
    </View>
  );
};

export default AddList;



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
