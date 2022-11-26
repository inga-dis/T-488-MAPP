import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity  } from "react-native";
import styles from "./styles";


const List = ({ list }) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigate('ListView', { listName: list.name, listId: list.id, color: list.color})}>
            <View style={styles.list}> 
                <Text style={styles.listText}>{list.name}</Text>
            </View>
    </TouchableOpacity>
    );
};

export default List;