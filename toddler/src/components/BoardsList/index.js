import React from "react";
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
)

export default BoardsList;
