
import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import ContactProfile from '../../components/ContactProfile'
import { purple } from '../../styles/colors'

const Contact = ({ route }) => {
    // const conta = contact.params
    const contact = route.params

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
        backgroundColor: purple,
        paddingBottom: 300
    }

})
