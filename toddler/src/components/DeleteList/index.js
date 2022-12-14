import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../redux/listSlice';



const DeleteList = ({listid}) => { 


  const dispatch = useDispatch();

  function handleSubmit(){
    dispatch(deleteList({ id: listid }));

  }


  return (
    <View >
      <Button title="Delete" onPress={handleSubmit}/>
    </View>
  );
};

export default DeleteList;