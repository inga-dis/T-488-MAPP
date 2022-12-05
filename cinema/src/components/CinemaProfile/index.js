import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


const CinemaProfile = ({ navigation: { navigate } }) => (
    <View >

        <TouchableOpacity onPress ={() => navigate('Movie')}>
        <Text style={styles.container}>Veldu mynd</Text>
       </TouchableOpacity>
    </View>
)

export default CinemaProfile
