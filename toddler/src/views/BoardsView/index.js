import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import BoardsList from '../../components/BoardsList';
// import AddModal from '../../components/AddModal';
import data from '../../resources/data.json';
import Navbar from '../../components/Nav';
import { getAllBoards, getAllLists, getAllTasks} from '../../services/getData'

// import * as fileService from '../../services/fileService';

console.log(data.boards)
console.log(getAllBoards)

const BoardsView = () => {
    // const [boards, setBoards] = useState(data.boards);
    const [boards, setBoards] = useState(data.boards)
    const [tasks, setTasks] = useState(data.tasks)
    const [lists, setLists] = useState(data.lists)


    // const [loadingBoards, setLoadingBoards] = useState(true);


    // useEffect(() => {
    //     (async () => {
    //         const boards = await fileService.getAllBoards();
    //         setLoadingBoards(false);
    //     })();
    // }, []);

    const onBoardPress = id => {
        //
    }

        const addBoard = async board => {
            const newBoard = await fileService.addBoard(image);

            setBoards([...boards, newBoard]);
            setIsAddModalOpen(false);

        };

    return (
        <View>
            <Navbar
                onAdd={()=> setIsAddModalOpen(true)} />
            <BoardsList boards={boards} lists={lists} tasks={tasks}/>
            {/* <AddModal 
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                something={() => {}}
                somethingElse={() => {}} /> */}
        </View>
    )
};



export default BoardsView;