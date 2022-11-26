import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import BoardsList from '../../components/BoardsList'; // ToDolist

import AddBoard from '../../components/AddBoard';

import AddList from '../../components/AddList'; // EKKI RÉTTUR STAÐUR 
import AddTask from '../../components/AddTask'; // EKKI RÉTTUR STAÐUR 

const BoardsView = () => {
    
    const boards = useSelector((state) => state.boards); // Sækir öll boards
    const lists = useSelector((state) => state.lists);
    const tasks = useSelector((state) => state.tasks);
    // console.log(lists)

    return (
        <ScrollView>
            <View>
                {/* <Navbar/> */}
                <AddBoard />
                <BoardsList />
            </View>
        </ScrollView>
    )
};
export default BoardsView;
