import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../resources/img.png';

const Main = ({ navigation: { navigate } }) => {
  <View>
      <Image source={logo} />
      <Text>HELLO WORLD!</Text>
  </View> 
};

export default Main; 
