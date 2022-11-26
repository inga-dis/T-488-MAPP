import React from "react";
import {View, FlatList, Text } from 'react-native';
import BoardsThumbnail from '../BoardsThumbnail'
import { useSelector } from "react-redux";
import styles from './styles';

const BoardsList = () => { 
    const boards = useSelector((state) => state.boards);
    
    return (
    <View style={styles.listContainer}>
        {boards.map((board) => (
            <BoardsThumbnail board={board} />
        ))}
        {/* <FlatList
            numColumns={1}
            data={boards}
            renderItem={({ item }) => (
                <BoardsThumbnail {...item } /> )}
            keyExtractor={item => item.id}
            /> */}
    </View>
 );
}
export default BoardsList;

