import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import NativeModal from "react-native-modal";
import { addTask } from "../../redux/taskSlice";
import mainStyles from "../../styles/styles";

const AddTask = ({ listidfor }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(
            addTask({
                name: name,
                description: description,
                isFinished: false,
                listId: listidfor,
            })
        );
        setName("");
        setDescription("");
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
                            placeholder="Task name"
                            value={name}
                            onChangeText={setName}
                            style={mainStyles.input}
                        />
                        <TextInput
                            placeholder="Task description"
                            value={description}
                            onChangeText={setDescription}
                            style={mainStyles.input}
                        />
                        <TouchableOpacity
                            style={[
                                mainStyles.buttonAdd,
                                mainStyles.buttonAddClose,
                            ]}
                            onPress={() => {
                                handleSubmit(listidfor);
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
                <Text style={mainStyles.ButtonAddtextStyle}>Add task</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddTask;
