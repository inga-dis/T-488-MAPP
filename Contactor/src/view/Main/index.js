import React from "react";
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import Header from "../../components/Header"
import styles from './styles'
import Logo from '../../components/Logo/telephone.png';



const Main = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
            <Text style={styles.header}>Your personal contactor</Text>
            <Image source={Logo} style={styles.logoStyle} />
        <TouchableOpacity onPress ={() => navigate ('Contacts')}>
            <Text style={styles.option}>My contacts</Text> 
        </TouchableOpacity>
    </View>
);

export default Main;
