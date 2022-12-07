import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, Text, TouchableOpacity} from "react-native";
import styles from "../../view/Main/styles";

const CinemaButton = () => {
    const { navigate } = useNavigation();
    return (
        <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.theater}
            onPress={() => navigate('Cinema')}>
                <Text style={styles.theatertext}>Sambíó</Text>
                <Text style={styles.theaterUndertext}>www.sambio.is</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theater}
            onPress={() => navigate('Cinema')}>
                <Text style={styles.theatertext}>Sambíó</Text>
                <Text style={styles.theaterUndertext}>www.sambio.is</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theater}
            onPress={() => navigate('Cinema')}>
                <Text style={styles.theatertext}>Sambíó</Text>
                <Text style={styles.theaterUndertext}>www.sambio.is</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theater}
            onPress={() => navigate('Cinema')}>
                <Text style={styles.theatertext}>Sambíó</Text>
                <Text style={styles.theaterUndertext}>www.sambio.is</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theater}
            onPress={() => navigate('Cinema')}>
                <Text style={styles.theatertext}>Sambíó</Text>
                <Text style={styles.theaterUndertext}>www.sambio.is</Text>
        </TouchableOpacity>
        </ScrollView>
    );
};

export default CinemaButton;