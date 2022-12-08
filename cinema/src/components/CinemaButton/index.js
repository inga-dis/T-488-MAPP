import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity} from "react-native";
import styles from "../../view/Main/styles";
import defaultStyles from '../../styles/styles'

const CinemaButton = ({cinema, id}) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity style={defaultStyles.button}
            onPress={() => navigate('Cinema', cinema)}>       
            <Text style={defaultStyles.buttonText}>{cinema.name}</Text>
            <Text style={defaultStyles.buttonUnderText}>{cinema.website}</Text>
        </TouchableOpacity>
    );
};

export default CinemaButton;