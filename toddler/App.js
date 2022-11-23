import React from 'react';
//import AppContainer from './src/routes';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainView from './src/views/BoardsView';
console.log('image')
export default function App() {
  return (
    <View style={styles.container }>
      <MainView />
      
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
