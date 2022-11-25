import {useEffect, useState} from "react";
import Icons from "react-native-vector-icons/FontAwesome"; 
import styles from "./styles";
// import { CheckBox } from "react-native-elements";
import { CheckBox } from '@rneui/base';
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native';


 


export default function App() {
    return <View style={styles.container}>
        <CheckBox
            title="Reading"
            checked={true}>
        </CheckBox>
    </View>
}