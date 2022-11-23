import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
// import { headings } from '../../styles'
// import styles from './styles'
import BoardsList from '../../components/BoardsList'
import data from '../../resources/data.json'


// import logo from '../../resources/logo.png'

const BoardsView = () => {
    return (
        <View>
            {/* toolbar or navigation header */}
            <BoardsList images={data.boards} />
        </View>
    )
};
export default BoardsView;