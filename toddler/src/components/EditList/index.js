// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { editList } from '../../redux/listSlice';



// const EditList = ({listid, newValue, category}) => { 


//   const dispatch = useDispatch();

//   function handleSubmit(){
//     console.log(listid)
//     dispatch(editList({ id: listid, category: category, value: newValue }));

//   }


//   return (
//     <View >
//       <Button title="Delete" onPress={handleSubmit}/>
//     </View>
//   );
// };

// export default DeleteList;