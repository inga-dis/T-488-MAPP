/* eslint-disable react/prop-types */
import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const Main = ({ navigation: { navigate } }) => (
    <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>Í sýningu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>Á döfinni</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>Bíóhús</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Sambíó</Text>
            <Text style={styles.theaterUndertext}>www.sambio.is</Text>
       </TouchableOpacity> 
       <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Sambíó</Text>
            <Text style={styles.theaterUndertext}>www.Smarabio.is</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Háskólabíó</Text>
            <Text style={styles.theaterUndertext}>www.Haskolabio.is</Text>

        </TouchableOpacity> 
    </ScrollView>
)

export default Main
