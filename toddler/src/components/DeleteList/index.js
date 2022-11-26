import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../redux/listSlice';



const DeleteList = ({listid}) => { 


  const [name, setName] = useState();
  const [thumbnailImage, setThumbnailImage] = useState();
  const dispatch = useDispatch();

  function handleSubmit(){
    dispatch(deleteList({ id: listid }));
  }


  return (
    <View style={styles.container}>
      <Button title="Delete" onPress={handleSubmit}/>
    </View>
  );
};

export default DeleteList;



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
