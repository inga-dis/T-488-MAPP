/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const Main = ({ navigation: { navigate } }) => (
    <View >
        <TouchableOpacity>
        <Text>Í sýningu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text>Á döfinni</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigate('Cinema')}>
        <Text>Sambíó{'\n'}Smárabíó{'\n'}Háskólabíó{'\n'}Bíó Paradís</Text>
       </TouchableOpacity>
    </View>
)

export default Main
