import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/taskSlice';


const DeleteTask = ({taskid}) => { 


  const dispatch = useDispatch();

  function handleSubmit(){
    dispatch(deleteTask({ id: taskid }));

  }

  return (
    <View >
      <Button title="X" onPress={handleSubmit}/>
    </View>
  );
};

export default DeleteTask;