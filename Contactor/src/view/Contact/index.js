
import React from 'react'
import { View, StyleSheet } from 'react-native'
import ContactProfile from '../../components/ContactProfile'
import { purple } from '../../styles/colors'
import defaultstyles from '../Main/styles'

const Contact = ({ route }) => {
    const contact = route.params

    return (
        <View style={defaultstyles.container}>
            <View style={styles.container}>
                <ContactProfile contact={contact}/>
            </View>
        </View>
    )
}
export default Contact

const styles = StyleSheet.create({
    container: {
        backgroundColor: purple,
        paddingBottom: 300
    }

})
