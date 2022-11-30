import React, { useState } from "react";
import Modal from "../Modal";
import {TouchableOpacity, TextInput, Text } from "react-native";

import defaultStyles from '../../styles/styles';

const Add = ({isOpen, closeModal}) => {
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [closeModal, setCloseModal] = useState(false)


    function handleSubmit() {
        // dispatch(addBoard({ name: name, thumbnailImage: thumbnailImage }));
        setName("");
        setImage("");
        setPhoneNumber("");
        setCloseModal(true);
    }

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            title={'Add Contact'}>
            <TextInput
                placeholder="Contact name"
                value={name}
                onChangeText={setName}
                style={defaultStyles.input}
            />
            <TextInput
                placeholder="Contact phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={defaultStyles.input}
            />
            <TextInput
                placeholder="Contact image"
                value={image}
                onChangeText={setImage}
                style={defaultStyles.input}
            />
            <TouchableOpacity 
                style={[defaultStyles.button]}
                onPress={() => {
                    handleSubmit();
                }}>
                <Text style={defaultStyles.ButtonText}>Submit</Text>
            </TouchableOpacity>
        </Modal>

    );
};

export default Add;