/* eslint-disable react/prop-types */
import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import CinemaButton from '../../components/CinemaButton'
import MainHeader from '../../components/MainHeader'

const Main = () => (
    <ScrollView style={styles.container}>
      <MainHeader></MainHeader>
        <CinemaButton></CinemaButton>
    </ScrollView>
)

export default Main
