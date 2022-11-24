import React from "react";
import PropTypes from 'prop-types';
import {View, FlatList, Text } from 'react-native';
import BoardsThumbnail from '../BoardsThumbnail'
import styles from './styles';


const BoardsList = ({ boards }) => (
    <View style={styles.listContainer}>
        <FlatList
            numColumns={1}
            data={boards}
            renderItem={({ item }) => (
                <BoardsThumbnail {...item } /> )}
            keyExtractor={item => item.id}
            />
    </View>
);

BoardsList.PropTypes = {
    //List of all boards 
    boards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        thumbnailPhoto: PropTypes.string
    }))
};
export default BoardsList;
