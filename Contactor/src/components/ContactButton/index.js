import React from "react";
import {View, Text, ScrollView, StyleSheet } from 'react-native';
import {lightPurple, lightBlue} from '../../styles/colors';



const ContactButton = ({}) => { 
    // const boards = useSelector((state) => state.boards);
     
    return (
        <View style={styles.container}>
            <View  >
                <Text style={styles.text}>Nafn og mynd</Text>
                <Text style={styles.text}>Nafn og mynd</Text>
                <Text style={styles.text}>Nafn og mynd</Text>
                <Text style={styles.text}>Nafn og mynd</Text>
            </View>
            
        </View>
 );
}
export default ContactButton;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        marginVertical: 20,
        backgroundColor: lightBlue,
        paddingHorizontal: 100,
        paddingVertical: 20,
    }
  });
  