/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../view/Main/styles'
import { useNavigation } from '@react-navigation/native';


const MainHeader = () => {
    const { navigate } = useNavigation();
    return (
    <View style={styles.mainHeader}>
        <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText} onPress={() => navigate('Movies')}>Í sýningu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.header, styles.middleHeader]}>
            <Text style={styles.headerText}>Á döfinni</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>Bíóhús</Text>
        </TouchableOpacity>
    </View>
    );
}

export default MainHeader
