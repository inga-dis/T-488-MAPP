import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity} from "react-native";
import defaultStyles from '../../styles/styles'

const CinemaButton = ({cinema}) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity style={defaultStyles.button}
            onPress={() => navigate('Cinema', cinema)}>       
            <Text style={[defaultStyles.buttonText, defaultStyles.boldFont]}>{cinema.name}</Text>
            <Text style={[defaultStyles.buttonUnderText, defaultStyles.font]}>{cinema.website}</Text>
        </TouchableOpacity>
    );
};

export default CinemaButton;