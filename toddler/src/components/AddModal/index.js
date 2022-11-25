import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Modal from '../Modal';
import styles from './styles';


const AddModal = ({
    isOpen, 
    closeModal,
    something,
    somethingElse

}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
        <TouchableOpacity
            onPress={() => something}>
            <Entypo style={styles.icon} name='camera' />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => somethingElse}>
            <Entypo style={styles.icon} name='image' />
        </TouchableOpacity>
    </Modal>

);
AddModal.propTypes  = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    something: PropTypes.func.isRequired,
    somethingElse: PropTypes.func.isRequired
}

export default AddModal;