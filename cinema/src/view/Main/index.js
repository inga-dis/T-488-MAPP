/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

// const Main = ({ navigation: { navigate } }) => (
const Main = () => (
    <View >
        <Text style={styles.container}>Dr. Cinema - Cinema healing</Text>
        <TouchableOpacity>
        <Text>Í sýningu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text>Á döfinni</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text>Bíóhús</Text>
        </TouchableOpacity>
    </View>
)

export default Main
