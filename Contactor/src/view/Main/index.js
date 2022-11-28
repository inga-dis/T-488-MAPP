import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import HeaderComponent from "../../components/Header"



const Main = ({ navigation: { navigate } }) => (
  <View>
        {/* <Image source={Logo} style={styles.logoStyle} /> */}
        {/* <HeaderComponent></HeaderComponent> */}
        <HeaderComponent>This is our new phone app bitches</HeaderComponent>
        <TouchableOpacity 
            onPress={() => navigate('BoardsView')}
            underlayColor="white">
        </TouchableOpacity>

  </View>
);

export default Main;

