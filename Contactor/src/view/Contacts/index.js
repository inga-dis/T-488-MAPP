import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import ContactsList from '../../components/ContactsList'; // ToDolist


const BoardsView = () => {
    


    return (
        <ScrollView>
            <View>
                <Text>SEARCH HERE...</Text>
                <ContactsList />
                <Text style={styles.container}>ADD</Text>
                
            </View>
        </ScrollView>
    )
};
export default BoardsView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

  });