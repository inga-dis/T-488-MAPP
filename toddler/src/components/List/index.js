import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity  } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
import mainStyles from '../../styles/styles'

import DeleteList from "../DeleteList";



const List = ({ list }) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigate('ListView', { listName: list.name, listId: list.id, color: list.color})}>
            <View style={mainStyles.itemCard}> 
                <Text style={mainStyles.itemText}>{list.name}</Text>
                <DeleteList listid = {list.id}/>
                
            </View>
    </TouchableOpacity>
    );
};

export default List;