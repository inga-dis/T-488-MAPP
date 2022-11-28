import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import styles from './styles';
// import mainStyles from '../../styles/styles';
// import Logo from '../../resources/logo.png';


const Main = ({ navigation: { navigate } }) => (
  <View>
        {/* <Image source={Logo} style={styles.logoStyle} /> */}
        <Text>This is our new phone app bitches</Text>
        <TouchableOpacity 
            onPress={() => navigate('BoardsView')}
            underlayColor="white">
        </TouchableOpacity>

  </View>
);

export default Main;