import React from "react";
import { useSelector } from "react-redux";
import {View } from 'react-native';

import AddBoard from "../AddBoard";
import BoardsButton from "../BoardsButton";

const BoardsList = ({}) => { 
    const boards = useSelector((state) => state.boards);
    
    return (
    <View>
        <AddBoard />
        {boards.map((board) => (
            <BoardsButton board={board} />
        ))}
    </View>
 );
}
export default BoardsList;