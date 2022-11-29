import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ContactButton from '../ContactButton'
import {lightPurple, lightBlue} from '../../styles/colors';


//Hér koma allir contacts:

const ContactsList = ({}) => { 
     
    return (
        <View>
            <Text>SEARCH HERE...</Text>
            <TextInput
                placeholder="Board name"
            />
            <TouchableOpacity
                // style={[mainStyles.buttonAdd, mainStyles.buttonAddOpen]}
                // onPress={() => setModalVisible(true)}
            >
                <Text>Add Board</Text>
            </TouchableOpacity>
        </View>
        
 );
}
export default ContactsList;