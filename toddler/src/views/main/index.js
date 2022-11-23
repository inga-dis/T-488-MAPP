
import React from "react";
import {View, Text, FlatList, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import data from '../../resources/data.json';
import logo from '../../resources/logo.png'

const word = data.boards;

const onPress = () => (
    <View>
        <Text>hah</Text>
    </View>
    
);

const Item = ({ name }) => (
    <View style={styles.item}>
        <TouchableHighlight onPress={onPress}>
    {/* <Image source={logo} /> */}
      <Text style={styles.name}>{name}</Text>
      </TouchableHighlight>
    </View>
  );

  const App = () => {
    const renderItem = ({ item }) => (
        
      <Item name={item.name} />
    );
    const onPress = () => setCount(count + 1);
  
    return (
        <View>
                <View style={styles.container}>
                    <FlatList
                    data={word}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />
                    
                </View>
           
        </View>
    );
  }

export default App;
