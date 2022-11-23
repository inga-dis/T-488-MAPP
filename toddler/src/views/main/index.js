
import React from "react";
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import data from '../../resources/data.json';

const word = data.boards;

const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );

  const App = () => {
    const renderItem = ({ item }) => (
      <Item name={item.name} />
    );
  
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={word}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
  }



export default App;

