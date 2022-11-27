import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,}
from "react-native";
import { useDispatch } from "react-redux";
import { addBoard } from "../../redux/boardSlice";
import mainStyles from "../../styles/styles";

const AddBoard = ( {itemToAdd} ) => {
    const [name, setName] = useState();
    const [thumbnailImage, setThumbnailImage] = useState();
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(addBoard({ name: name, thumbnailImage: thumbnailImage }));
        setName("");
        setThumbnailImage("");
    }

    return (
        <View style={mainStyles.containerAdd}>
            <Text style={mainStyles.header2}> Add Board </Text>
            <TextInput
                placeholder="Board name"
                value={name}
                onChangeText={setName}
                style={mainStyles.input}
            />
            <TextInput
                placeholder="Board image"
                value={thumbnailImage}
                onChangeText={setThumbnailImage}
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

export default AddBoard;
