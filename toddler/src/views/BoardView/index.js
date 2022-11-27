import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import List from '../../components/Lists';
import styles from '../../styles/styles';



const BoardView = ({ route }) => {

    const board = route.params;


    return (
        <ScrollView>
            <View >
                <Text style={styles.header}>{board.boardName}</Text>
                <List boardid={board.boardId} ></List>
            </View>
        </ScrollView>

    );
}

export default BoardView;