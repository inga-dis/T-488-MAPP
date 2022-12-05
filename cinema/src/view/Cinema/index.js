
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


const Cinema = ({ navigation: { navigate } }) => (
    <View >

        <TouchableOpacity onPress ={() => navigate('Movie')}>
        <Text >Veldu mynd</Text>
       </TouchableOpacity>
    </View>
)

export default Cinema

