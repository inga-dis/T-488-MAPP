import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../redux/boardSlice';


const AddBoard = () => { 

  const [name, setName] = useState();
  const [thumbnailImage, setThumbnailImage] = useState();
  const dispatch = useDispatch();

  function handleSubmit(){
    dispatch(addBoard({ name: name, thumbnailImage: thumbnailImage }));
    setName('');
    setThumbnailImage('');
  }


  return (
    <View style={styles.container}>
      <TextInput placeholder="Board" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Board" value={thumbnailImage} onChangeText={setThumbnailImage} style={styles.input} />
      <Button title="Add" onPress={handleSubmit}/>
    </View>
  );
};

export default AddBoard;



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
