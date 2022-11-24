import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import BoardsList from '../../components/BoardsList';
import data from '../../resources/data.json';
import Navbar from '../../components/Nav';

const BoardsView = () => {
    return (
        <View>
            <Navbar></Navbar>
            <BoardsList boards={data.boards} />
        </View>
    )
};
export default BoardsView;