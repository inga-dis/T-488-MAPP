import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import BoardsList from '../../components/BoardsList'; // ToDolist


const BoardsView = () => {
    
    const boards = useSelector((state) => state.boards); // Sækir öll boards
    const lists = useSelector((state) => state.lists);
    const tasks = useSelector((state) => state.tasks);

    return (
        <ScrollView>
            <View>
                {/* <Navbar/> */}
                <BoardsList />
            </View>
        </ScrollView>
    )
};
export default BoardsView;
