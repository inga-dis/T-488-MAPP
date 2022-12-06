/* eslint-disable react/prop-types */
import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const Main = ({ navigation: { navigate } }) => (
    <ScrollView>
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
        <View  style={styles.container}>
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
        <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Háskólabíó</Text>
            <Text style={styles.theaterUndertext}>www.Haskolabio.is</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Háskólabíó</Text>
            <Text style={styles.theaterUndertext}>www.Haskolabio.is</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Háskólabíó</Text>
            <Text style={styles.theaterUndertext}>www.Haskolabio.is</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theater} onPress ={() => navigate('Cinema')}>
            <Text style={styles.theatertext}>Háskólabíó</Text>
            <Text style={styles.theaterUndertext}>www.Haskolabio.is</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
)

export default Main
