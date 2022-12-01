/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'
import defaultStyles from '../../styles/styles'
import Logo from '../../components/Logo/telephone.png'

const Main = ({ navigation: { navigate } }) => (
    <Header style = {styles.header} name = "Main"></Header>,
    <View style={styles.container}>
        <Text style={styles.header}>Your personal contactor</Text>
        <Image source={Logo} style={styles.logoStyle} />
        <TouchableOpacity activeOpacity={0.7} onPress ={() => navigate('Contacts')}>
            <Text style={[defaultStyles.button, defaultStyles.shadow]}>My contacts</Text>
        </TouchableOpacity>
    </View>
)

export default Main
