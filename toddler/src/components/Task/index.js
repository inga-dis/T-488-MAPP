import React from "react";
import { useSelector } from "react-redux";
import {View, Text } from 'react-native';
import styles from './styles';

const Task = ( {list}) => {
    const tasks = useSelector((state) => state.tasks);
    const currentTasks = tasks.filter((item) => item.listId == list.id).map(({id, name, listId}) => ({id, name, listId}));

    return (
    <View style={styles.listContainer}>
        {currentTasks.map((currentTasks) => (
            <Text>{currentTasks.name}</Text>
        ))}
    </View>
 );
}
export default Task;

