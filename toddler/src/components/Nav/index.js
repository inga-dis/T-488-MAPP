import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import Logo from '../../resources/logo.png'

const Navbar = () => 
    <View style={styles.navbar}>

        <TouchableHighlight style={styles.navbarAction}>
            <Text style={styles.navbarActionText}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navbarAction}><Image source={Logo} style={styles.logoNav} /></TouchableHighlight>
        
        
    </View>;

export default Navbar