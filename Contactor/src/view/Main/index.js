import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Header from "../../components/Header"



const Main = ({ navigation: { navigate } }) => (
  <View>
        {/* <Image source={Logo} style={styles.logoStyle} /> */}
        <Header headertext={'this is the header'}></Header>
        <Text>This is our new phone app bitches</Text>
        <TouchableOpacity 
            onPress={() => navigate('BoardsView')}
            underlayColor="white">
        </TouchableOpacity>

  </View>
);

export default Main;