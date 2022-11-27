import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import mainStyles from "../../styles/styles";

import EditList from "../EditList";
import DeleteList from "../DeleteList";

const List = ({ list }) => {
    const { navigate } = useNavigation();
    console.log(list.color);

    return (
        <TouchableOpacity
            onPress={() =>
                navigate("ListView", {
                    listName: list.name,
                    listId: list.id,
                    color: list.color,
                })
            }
        >
            <View
                style={[mainStyles.itemCard, { backgroundColor: list.color }]}
            >
                <Text style={mainStyles.itemText}>{list.name}</Text>
                <DeleteList listid={list.id} />
            </View>
        </TouchableOpacity>
    );
};

export default List;
