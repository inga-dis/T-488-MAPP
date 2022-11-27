import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { editList } from "../../redux/listSlice";
import mainStyles from "../../styles/styles";

const EditList = ({ listid, newValue, category }) => {
    const [name, setName] = useState();
    const [color, setColor] = useState();

    const dispatch = useDispatch();

    function handleSubmit() {
        if (setName != "") {
            const category = "name"
        }
        
        dispatch(editList({ id: listid, category: category, value: newValue }));
        setName("");
        setColor("");
    }

    return (
        <View>
            <Text style={mainStyles.header2}> Add List </Text>
            <TextInput
                placeholder="List name"
                value={name}
                onChangeText={setName}
                style={mainStyles.input}
            />
            <TextInput
                placeholder="List color #"
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
            <Button title="Edit" onPress={handleSubmit} />
        </View>
    );
};

export default EditList;
