import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import List from '../../components/Lists';
import styles from '../../styles/styles';



const BoardView = ({ route }) => {

    const board = route.params;


    return (
        <View >
        <Text style={styles.header}>{board.boardName}</Text>
        <ScrollView>
                <List boardid={board.boardId} ></List>
        </ScrollView>
        </View>  

    );
}

export default BoardView;