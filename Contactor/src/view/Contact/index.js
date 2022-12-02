import React, {useState} from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ContactProfile from '../../components/ContactProfile'
import { lightPurple, lightBlue } from '../../styles/colors'
import EditInfo from '../../components/Edit'
import Add from '../../components/Add'



const Contact = ({ route }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false) // Þarf fyrir edit
    
    
    const conta = route.params

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* IMAGE VANTAR */}
                {/* <Text style={{ fontSize: 34 }}>{conta.name}  </Text>
                <Text style={{ fontSize: 34 }}>{conta.phoneNumber} </Text> */}
                <TouchableOpacity style={{ color: 'pink' }} onPress={() => setIsEditModalOpen(true)}>
                    <Text>Edit information</Text>
                </TouchableOpacity>
                <Add isOpen={isAddModalOpen}
                    closeModal={() => setIsAddModalOpen(false)}>

                </Add>
                <EditInfo isOpen={isEditModalOpen} // Þarf fyrir edit
                    closeModal={() => setIsEditModalOpen(false)}></EditInfo>
                <ContactProfile/>

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
