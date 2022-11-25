import React from "react";
import {View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import Logo from '../../resources/logo.png'

const MainView = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
        <Image source={Logo} style={styles.logoStyle} />
        <Text>Testing some more</Text>
        <TouchableHighlight 
            onPress={() => navigate('BoardsView')}
            style={styles.button}>
            <Text style={styles.butttonText}>Board</Text>
        </TouchableHighlight>
  </View>
);

export default MainView;