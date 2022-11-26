import React from "react";
import { useSelector } from "react-redux";
import {View, Button } from 'react-native';
import AddList from '../AddList'
import List from '../List'
import styles from './styles';

const Lists = ( {boardid}) => {
    const lists = useSelector((state) => state.lists);
    const list = lists.filter((item) => item.boardId == boardid).map(({id, name, color, boardId}) => ({id, name, color, boardId}));

    return (
    <View style={styles.listContainer}>
        <AddList boardidfor={boardid}></AddList>
            
        {list.map((list) => (
            <List  list={list} />
                
            
        ))}
    </View>
 );
}
export default Lists;


{/* <Text>{list.name}<Task list={list}></Task></Text> */}