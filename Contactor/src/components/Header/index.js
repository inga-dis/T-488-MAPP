import React from 'react';
import { View, Text } from 'react-native';


const Header = ({name}) => {
  return (
    
    <View style={{ color: "pink", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text color="pink"> {(name)} </Text>
    </View>
  );
}


export default Header; 