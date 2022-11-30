import React, { useState } from "react";
import NativeModal from "react-native-modal";
import { View, Text } from "react-native";
import styles from "./styles";

const Modal = ({ isOpen, closeModal, title, children }) => {
    return (
        <NativeModal
            isVisible={isOpen}
            hasBackdrop={true}
            swipeDirection={["up", "down"]}
            onSwipeComplete={closeModal}
            style={styles.modal}
            onRequestClose={() => closeModal}
        >
            <View>
                <Text>{title}</Text>
                {children}
            </View>
        </NativeModal>
    );
};

export default Modal;