import React from "react";
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import Header from "../../components/Header"
import styles from './styles'
import Logo from '../../components/Logo/telephone.png';



const Main = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
        <View>
            <Text style={styles.header}>Your personal contactor!</Text>
            <Image source={Logo} style={styles.logoStyle} />
            <Button title="My contacts"></Button>
    
        {/* <Image source={Logo} style={styles.logoStyle} /> */}
        {/* <HeaderComponent></HeaderComponent> */}

        {/* <Header header={"MY MAIN"}> </Header> */}
        {/* <TouchableOpacity 
            // onPress={() => navigate('BoardsView')}
            underlayColor="white">
        </TouchableOpacity> */}

        </View>
    </View>
);

export default Main;

