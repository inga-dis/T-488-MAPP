import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import HeaderComponent from "../../components/Header"



const Main = ({ navigation: { navigate } }) => (
  <View>
        {/* <Image source={Logo} style={styles.logoStyle} /> */}
        {/* <HeaderComponent></HeaderComponent> */}
        <Text>This is our new phone app bitches</Text>
        <TouchableOpacity 
            onPress={() => navigate('BoardsView')}
            underlayColor="white">
        </TouchableOpacity>

  </View>
);

export default Main;