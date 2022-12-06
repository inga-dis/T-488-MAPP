/* eslint-disable react/prop-types */
import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
// import styles from './styles'
import InTheaters from '../../components/InTheaters'
import styles from './styles'

const Movies = () => (
    <ScrollView style={styles.container}>
        <InTheaters style={styles.text}></InTheaters>
    </ScrollView>
)

export default Movies
