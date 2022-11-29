import React from 'react';
import { View, Text } from 'react-native';


const Header = ({headertext}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{headertext}</Text>
    </View>
  );
}


export default Header; 