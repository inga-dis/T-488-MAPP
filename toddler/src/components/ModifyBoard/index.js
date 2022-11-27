import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import NativeModal from "react-native-modal";
import { editBoard } from "../../redux/boardSlice";
import mainStyles from "../../styles/styles";

const EditBoard = ( {boardid} ) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState();
    const [thumbnailImage, setThumbnailImage] = useState();
    const dispatch = useDispatch();

    function handleSubmit() {
        if (setName === "") {
            dispatch(editBoard({id: boardid, thumbnailImage: thumbnailImage}))
        } else if (setThumbnailImage === "") {
            dispatch(editBoard({id: boardid, name: name}))
        } else if ((setName != "") && (setThumbnailImage != "")) {
            dispatch(editBoard({id: boardid, name: name, thumbnailImage: thumbnailImage}))

        }
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
                        <Text style={mainStyles.header3}> Modify Board, empty fields will not update</Text>
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
                                handleSubmit();
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
                <Text style={mainStyles.ButtonAddtextStyle}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditBoard;
