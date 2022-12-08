import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity} from "react-native";
import styles from "../../view/Main/styles";

const CinemaButton = ({cinema}) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity style={styles.theater}
            onPress={() => navigate('Cinema', cinema)}>       
            <Text style={styles.theatertext}>{cinema.name}</Text>
            <Text style={styles.theaterUndertext}>{cinema.website}</Text>
        </TouchableOpacity>
    );
};

export default CinemaButton;