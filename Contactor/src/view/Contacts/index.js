import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import ContactsList from '../../components/ContactsList'; // ToDolist
import Search from '../../components/Search'; // ToDolist

import {lightPurple, lightBlue} from '../../styles/colors';


const Contacts = () => {
    


    return (
        <ScrollView>
            <View style={styles.container}>
                <Search />
                <ContactsList />
                <Text>ADD</Text>
                
            </View>
        </ScrollView>
    )
};
export default Contacts;

const styles = StyleSheet.create({
    container: {
      backgroundColor: lightPurple,
      paddingBottom: 300,
    },

  });