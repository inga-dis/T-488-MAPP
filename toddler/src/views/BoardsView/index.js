import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import BoardsList from '../../components/BoardsList'
import data from '../../resources/data.json'

const BoardsView = () => {
    return (
        <View>
            <BoardsList boards={data.boards} />
        </View>
    )
};
export default BoardsView;