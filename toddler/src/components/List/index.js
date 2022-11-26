import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity  } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
import DeleteList from "../DeleteList";



const List = ({ list }) => {
    const { navigate } = useNavigation();
    console.log(list.id)

    return (
        <TouchableOpacity
            onPress={() => navigate('ListView', { listName: list.name, listId: list.id, color: list.color})}>
            <View style={styles.list}> 
                <Text style={styles.listText}>{list.name}</Text>
                <DeleteList listid = {list.id}/>
            </View>
    </TouchableOpacity>
    );
};

export default List;