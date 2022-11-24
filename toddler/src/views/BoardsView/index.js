import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import BoardsList from '../../components/BoardsList';
import AddModal from '../../components/AddModal';
import data from '../../resources/data.json';
import Navbar from '../../components/Nav';

const BoardsView = () => {
    const onBoardPress = id => {
        //
    }
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <View>
            <Navbar
                onAdd={()=> setIsAddModalOpen(true)} />
            <BoardsList boards={data.boards} />
            <AddModal 
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                something={() => {}}
                somethingElse={() => {}} />
        </View>
    )
};
export default BoardsView;