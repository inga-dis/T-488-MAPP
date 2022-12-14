import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../redux/boardSlice';


const DeleteBoard = ({boardid}) => { 


  const dispatch = useDispatch();

  function handleSubmit(){
    dispatch(deleteBoard({ id: boardid }));

  }

  return (
    <View >
      <Button title="X" onPress={handleSubmit}/>
    </View>
  );
};

export default DeleteBoard;