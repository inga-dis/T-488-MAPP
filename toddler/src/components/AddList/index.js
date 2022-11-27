import React, { useState } from "react";
import {
    Modal,
    View,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listSlice";
import mainStyles from "../../styles/styles";

const AddList = ({ boardidfor }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState();
    const [color, setColor] = useState();
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(
            addList({ name: name, color: "#" + color, boardId: boardidfor })
        );
        console.log('test')
        setName("");
        setColor("");
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
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
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                handleSubmit
                            }}
                        >
                            <Text style={styles.textStyle}>Add list</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {

                                setModalVisible(!modalVisible)
                            }}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Add List</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddList;
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
