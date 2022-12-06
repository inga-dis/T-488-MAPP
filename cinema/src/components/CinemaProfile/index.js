import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Cinema = () => {
    const { navigate } = useNavigation()
    return (
        <View>
            <TouchableOpacity onPress ={() => navigate('Movie')}>
                <Text>Hér kemur cinema</Text>
                <Text>Sambíó + About</Text>
                <Text>Og allt sem er í bíó í Sambíó</Text>
                <Text>Klikka svo á bíómynd og fer inní MovieScreen</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Cinema
