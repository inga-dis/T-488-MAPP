import React from 'react';
import { View, Touchable, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Navbar = () => 
    <View style={styles.navbar}>
        <TouchableHighlight style={styles.navbarAction}>
            <Text style={styles.navbarActionText}>add</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navbarAction}>
            <Text style={styles.navbarActionText}>ehv</Text>
        </TouchableHighlight>

    </View>;

export default Navbar