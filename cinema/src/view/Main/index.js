/* eslint-disable react/prop-types */
import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import CinemaButton from '../../components/CinemaButton'

const Main = ({ navigation: { navigate } }) => (
    <ScrollView style={styles.container}>
        <View style={styles.mainHeader}>
            <TouchableOpacity style={styles.header}>
                <Text style={styles.headerText}>Í sýningu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.header, styles.middleHeader]}>
                <Text style={styles.headerText}>Á döfinni</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header}>
                <Text style={styles.headerText}>Bíóhús</Text>
            </TouchableOpacity>
        </View>
        <CinemaButton></CinemaButton>
    </ScrollView>
)

export default Main
