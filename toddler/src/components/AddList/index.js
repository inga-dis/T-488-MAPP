import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listSlice";
import mainStyles from "../../styles/styles";

const AddList = ({ boardidfor }) => {
    const [name, setName] = useState();
    const [color, setColor] = useState();
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(
            addList({ name: name, color: color, boardId: boardidfor })
        );
        console.log(boardidfor)
        setName("");
        setColor("");
    }

    return (
        <View style={mainStyles.containerAdd}>
            <Text style={mainStyles.header2}> Add List </Text>
            <TextInput
                placeholder="List name"
                value={name}
                onChangeText={setName}
                style={mainStyles.input}
            />
            <TextInput
                placeholder="List color"
                value={color}
                onChangeText={setColor}
                style={mainStyles.input}
            />
            <TouchableOpacity
                style={[mainStyles.button, mainStyles.buttonAdd]}
                onPress={handleSubmit}
            >
                <Text style={mainStyles.buttonText}> Add </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddList;
