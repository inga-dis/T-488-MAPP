import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Add from '../../components/Add'

const TestView = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    return (
        <View style={{
            flexDirection: 'row',
            // height: 100,
            padding: 20
        }}>
            <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
            <View style={{ backgroundColor: 'red', flex: 0.5 }} />

            <TouchableOpacity style={{ color: 'pink' }} onPress={() => setIsAddModalOpen(true)}>
                <Text>Open modal</Text>
            </TouchableOpacity>
            <Add isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}>

            </Add>
        </View>
    )
}

export default TestView
