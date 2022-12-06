/* eslint-disable react/prop-types */
import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const Main = ({ navigation: { navigate } }) => (
    <ScrollView style={styles.container}>
        <View style={styles.mainHeader}>
            <TouchableOpacity style={styles.header}>
                <Text >Í sýningu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.header, styles.middleHeader]}>
                <Text>Á döfinni</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header}>
                <Text >Bíóhús</Text>
            </TouchableOpacity>
        </View>
       
        <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Sambíó</Text>
       </TouchableOpacity> 
       <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Smárabíó</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Háskólabíó</Text>
        </TouchableOpacity> 
    </ScrollView>
)

export default Main
