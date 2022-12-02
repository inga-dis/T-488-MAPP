
import React, {useState} from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ContactProfile from '../../components/ContactProfile'
import { lightPurple, lightBlue } from '../../styles/colors'
import EditInfo from '../../components/Edit'
import Add from '../../components/Add'



const Contact = ({ route }) => {

    // const conta = contact.params
    const contact = route.params;


    return (
        <ScrollView>
            <View style={styles.container}>


                <ContactProfile contact={contact}/>


            </View>
        </ScrollView>
    )
}
export default Contact

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightPurple,
        paddingBottom: 300
    }

})
