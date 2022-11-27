import React, { useState } from "react";
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listSlice";
import mainStyles from "../../styles/styles";

const AddList = ({ boardidfor }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState();
    const [color, setColor] = useState();
    const dispatch = useDispatch();

    function handleSubmit(boardidfor) {
        dispatch(
            addList({ name: name, color: "#" + color, boardId: boardidfor })
        );
        setName("");
        setColor("");
    }

    return (
        <View style={mainStyles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={mainStyles.centeredView}>
                    <View style={mainStyles.modalView}>
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
                            style={[mainStyles.buttonAdd, mainStyles.buttonAddClose]}
                            onPress={() => {
                                handleSubmit(boardidfor); setModalVisible(!modalVisible)
                            }}
                        >
                            <Text style={mainStyles.ButtonAddtextStyle}>Add list</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[mainStyles.buttonAdd, mainStyles.buttonAddOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={mainStyles.ButtonAddtextStyle}>Add List</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddList;

