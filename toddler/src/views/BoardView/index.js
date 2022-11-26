import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import List from '../../components/List';
import style from './styles'
import { ListItem } from '@rneui/themed';



const BoardView = ({ route }) => {

    const board = route.params;

    return (
        

        <View >
            <Text style={style.boardHeader}>{board.boardName}</Text>
            <List boardid={board.boardId} ></List>
        </View>
    );
}

export default BoardView;