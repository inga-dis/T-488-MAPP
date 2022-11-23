import React from 'react';
//import AppContainer from './src/routes';
import { StyleSheet, Text, View, Image } from 'react-native';
import Main from './src/views/Main';

export default function App() {
  return (
    <View style={styles.container }>
      <Main />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
