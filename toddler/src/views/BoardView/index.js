import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text, Button } from 'react-native';
import List from '../../components/Lists';
import styles from '../../styles/styles';



const BoardView = ({ route }) => {

    const board = route.params;


    return (
        <View >
            <Text style={styles.header}>{board.boardName}</Text>
            {/* <Button title="pressme"/>  */}
            <List boardid={board.boardId} ></List>
        </View>
    );
}

export default BoardView;