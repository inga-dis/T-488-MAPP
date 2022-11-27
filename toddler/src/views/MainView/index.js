import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import mainStyles from '../../styles/styles';
import Logo from '../../resources/logo.png';


const MainView = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
        <Image source={Logo} style={styles.logoStyle} />
        <Text style={mainStyles.header}>Toodler - ehv meira</Text>
        <TouchableOpacity 
            onPress={() => navigate('BoardsView')}
            underlayColor="white"
            style={[mainStyles.button]}>
            <Text style={mainStyles.buttonText}>Boards</Text>
        </TouchableOpacity>

  </View>
);

export default MainView;