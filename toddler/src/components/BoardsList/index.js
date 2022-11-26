
import React from "react";
import {View } from 'react-native';
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
    </View>
 );
}
export default BoardsList;