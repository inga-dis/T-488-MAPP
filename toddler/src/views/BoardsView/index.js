import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { useSelector } from "react-redux";
import BoardsList from '../../components/BoardsList'; // ToDolist
import Navbar from '../../components/Nav';
import AddBoard from '../../components/AddBoard';
import AddModal from '../../components/AddModal';

import AddList from '../../components/AddList'; // EKKI RÉTTUR STAÐUR 
import AddTask from '../../components/AddTask'; // EKKI RÉTTUR STAÐUR 

const BoardsView = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    
    const boards = useSelector((state) => state.boards); // Sækir öll boards
    const lists = useSelector((state) => state.lists);
    const tasks = useSelector((state) => state.tasks);

    return (
        <View>
            <Navbar
                onAdd={()=> setIsAddModalOpen(true)} />
            {/* <AddBoard />
            <AddList /> 
            <AddTask />  */}
            <BoardsList />
            <AddModal 
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)} />
        </View>
    )
};
export default BoardsView;
