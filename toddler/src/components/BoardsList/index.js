import React from "react";
import {View } from 'react-native';
import BoardsButton from "../BoardsButton";
import { useSelector } from "react-redux";
import styles from './styles';

const BoardsList = () => { 
    const boards = useSelector((state) => state.boards);
    
    return (
    <View style={styles.listContainer}>
        {boards.map((board) => (
            <BoardsButton board={board} />
        ))}
    </View>
 );
}
export default BoardsList;