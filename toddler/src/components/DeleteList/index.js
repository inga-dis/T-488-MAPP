import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../redux/listSlice';



const DeleteList = ({listid}) => { 


  const dispatch = useDispatch();

  function handleSubmit(){
    console.log(listid)
    dispatch(deleteList({ id: listid }));

  }


  return (
    <View >
      <Button title="Delete" onPress={handleSubmit}/>
    </View>
  );
};

export default DeleteList;