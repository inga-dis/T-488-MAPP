import React from "react";
import {View, FlatList} from 'react-native';
import styles from './styles';


const BoardsList = ({ text }) => (
    <View style={styles.listContainer}>
        <FlatList
            numColumns={1}
            data={text}
            renderItem={({ board }) => (
                <BoardName {...board} />
            )} 
            keyExtractor={image => image.id}
            />
    </View>
)

export default BoardsList;
