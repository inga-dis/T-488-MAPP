import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ContactsList from '../../components/ContactsList'; // ToDolist
import Search from '../../components/Search'; // ToDolist
import Add from "../../components/Add"


import {lightPurple, lightBlue} from '../../styles/colors';


const Contacts = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);    


    return (
        <ScrollView>
            <View style={styles.container}>
                <Search />
                <ContactsList />
                <Text>ADD</Text>
                <TouchableOpacity style={{color:'pink'}} onPress={() => setIsAddModalOpen(true)}>
                    <Text>Open modal</Text>
                </TouchableOpacity>
                <Add isOpen={isAddModalOpen}
                    closeModal={() => setIsAddModalOpen(false)}>   
                </Add>
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