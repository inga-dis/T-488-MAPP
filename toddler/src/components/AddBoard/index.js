import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import NativeModal from "react-native-modal";
import { addBoard } from "../../redux/boardSlice";
import mainStyles from "../../styles/styles";

const AddBoard = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState();
    const [thumbnailImage, setThumbnailImage] = useState();
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(addBoard({ name: name, thumbnailImage: thumbnailImage }));
        setName("");
        setThumbnailImage("");
    }

    return (
        <View style={mainStyles.centeredView}>
            <NativeModal
                hasBackdrop={true}
                isVisible={modalVisible}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={["up", "down"]}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={mainStyles.centeredView}>
                    <View style={mainStyles.modalView}>
                        <Text style={mainStyles.header3}> Add Board </Text>
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
                            style={[
                                mainStyles.buttonAdd,
                                mainStyles.buttonAddClose,
                            ]}
                            onPress={() => {
                                handleSubmit(boardidfor);
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={mainStyles.ButtonAddtextStyle}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </NativeModal>
            <TouchableOpacity
                style={[mainStyles.buttonAdd, mainStyles.buttonAddOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={mainStyles.ButtonAddtextStyle}>Add List</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddBoard;
