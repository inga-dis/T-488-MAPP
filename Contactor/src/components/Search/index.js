import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';



const Search = () => {
    const DATA = [
        {
          id: 1,
          name: 'Sigga',
        },
        {
          id: 2,
          name: 'Steinn',
        },
        {
          id: 3,
          name: 'Kallli',
        },
      ];

    function handleSearch(search) {
        let searchData = DATA.filter((item)=>{
            return item.name.toLowerCase().includes(search.toLowerCase())
        });
        // setSearch("");
        console.log("hæ?   ",searchData)
        

    }

    const Item = ({ name }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
    </View>
    );

  const renderItem = ({ item }) => (
    <Item name={item.name} />
  );

  return (
    <SafeAreaView style={styles.container}>
        <TextInput
            placeholder="Name"
            
        />
        <TouchableOpacity onPress={()=> {handleSearch("k")}}><Text>Presss</Text></TouchableOpacity>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});

export default Search;
