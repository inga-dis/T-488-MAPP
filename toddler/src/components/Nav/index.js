import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import Logo from '../../resources/logo.png'

const Navbar = ({ onAdd }) => ( 
    <View style={styles.navbar}>
        <TouchableHighlight 
                onPress={() => onAdd(true)}
                style={styles.navbarAction}>
            <Text style={styles.navbarActionText}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navbarAction}><Image source={Logo} style={styles.logoNav} /></TouchableHighlight>
    </View>
);
Navbar.PropTypes = {
    // Function to show modal
    onAdd: PropTypes.func.isRequired,
}
export default Navbar