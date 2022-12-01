/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import defaultStyles from '../../styles/styles'
import Logo from '../../resources/telephone.png'

const Main = ({ navigation: { navigate } }) => (
    <View style={[defaultStyles.container, defaultStyles.centeredView]}>
        <Text style={styles.header}>Your personal contactor</Text>
        <Image source={Logo} style={styles.logoStyle} />
        <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress ={() => navigate('Contacts')}>
            <Text>My contacts</Text>
        </TouchableOpacity>
    </View>
)

export default Main
