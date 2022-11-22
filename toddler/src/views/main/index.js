import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './styles';
import logo from '../../resources/logo.png';

const Main = () => {
  <View>
      <Image source={logo}  />
      <Text style={styles.text}>HELLO WORLD!</Text>
  </View> 
};

export default Main; 
