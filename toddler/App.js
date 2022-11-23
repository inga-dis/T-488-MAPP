import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import logo from './src/resources/logo.png'
import Main from './src/views/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>???</Text>
      {/* <Image source={logo} /> */}
      <StatusBar style='auto' />
      <Main/>
    </View>

  );
}
