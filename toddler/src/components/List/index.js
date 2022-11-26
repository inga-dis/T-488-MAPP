import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Button  } from "react-native";
import styles from "./styles";


const List = ({ list }) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigate('ListView', { listName: list.name, listId: list.id, color: list.color})}>
            <View style={styles.list}> 
                <Text style={styles.listText}>{list.name}</Text>
            
            <Button 
                title="X"
                onPress={() => console.log(list.name)}
            />
            </View>
    </TouchableOpacity>
    );
};

export default List;