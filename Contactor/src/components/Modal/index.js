import React from 'react'
import NativeModal from 'react-native-modal'
import { View, Text } from 'react-native'
import styles from './styles'

const Modal = ({ isOpen, closeModal, title, children }) => {
    return (
        <NativeModal
            isVisible={isOpen}
            hasBackdrop={true}
            onBackButtonPress={closeModal}
            onSwipeComplete={closeModal}
            swipeDirection={['up', 'down']}
            style={styles.modal}
        >
            <View>
                <Text>{title}</Text>
                <Text>Swipe to close!</Text>
                {children}
            </View>
        </NativeModal>
    )
}

export default Modal
