import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import List from '../../components/List';



const BoardView = ({ route }) => {

    const board = route.params;


    return (
        <View >
            <Text style={{ backgroundColor: 'pink'}}>{board.boardName}</Text>
            <List boardid={board.boardId} ></List>
        </View>
    );
}

export default BoardView;