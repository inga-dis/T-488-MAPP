import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Add from '../../components/Add'
import Edit from '../../components/Edit'

const TestView = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false) // Þarf fyrir edit

    return (
        <View style={{
            flexDirection: 'row',
            // height: 100,
            padding: 20
        }}>
            <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
            <View style={{ backgroundColor: 'red', flex: 0.5 }} />

            <TouchableOpacity style={{ color: 'pink' }} onPress={() => setIsEditModalOpen(true)}>
                <Text>Open EDIT</Text>
            </TouchableOpacity>
            <Add isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}>

            </Add>
            <Edit isOpen={isEditModalOpen} // Þarf fyrir edit
                closeModal={() => setIsEditModalOpen(false)}></Edit>
        </View>
    )
}

export default TestView
