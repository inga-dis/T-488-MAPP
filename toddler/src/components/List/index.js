import React from "react";
import { useSelector } from "react-redux";
import {View, Text } from 'react-native';
import Task from '../Task';
import styles from './styles';

const List = ( {boardid}) => {
    const lists = useSelector((state) => state.lists);
    const list = lists.filter((item) => item.boardId == boardid).map(({id, name, color, boardId}) => ({id, name, color, boardId}));

    return (
    <View style={styles.listContainer}>
        {list.map((list) => (
            <Text>{list.name}<Task list={list}></Task></Text>
        ))}
    </View>
 );
}
export default List;

