import React from "react";
import { useSelector } from "react-redux";
import {View } from 'react-native';

import AddList from '../AddList'
import List from '../List'


const Lists = ( {boardid}) => {
    const lists = useSelector((state) => state.lists);
    const list = lists.filter((item) => item.boardId == boardid).map(({id, name, color, boardId}) => ({id, name, color, boardId}));

    return (
    <View>
        <AddList boardidfor={boardid}></AddList>
            
        {list.map((list) => (
            <List  list={list} />
                
            
        ))}
    </View>
 );
}
export default Lists;


{/* <Text>{list.name}<Task list={list}></Task></Text> */}