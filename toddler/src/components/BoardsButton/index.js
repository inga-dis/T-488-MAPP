import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, TouchableOpacity, Button  } from "react-native";
import styles from "./styles";
import mainStyles from '../../styles/styles'
import DeleteBoard from "../DeleteBoard";

const BoardsButton = ({ board }) => {
    const { navigate } = useNavigation();

    
    return (
        <TouchableOpacity
            onPress={() => navigate('BoardView', { boardName: board.name, boardId: board.id, boardImg: board.thumbnailPhoto})}>
            <View style={mainStyles.itemCard}> 
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: board.thumbnailPhoto}} />
                <Text style={mainStyles.itemText}>{board.name}</Text>
                <DeleteBoard boardid = {board.id}/>
            </View>
    </TouchableOpacity>
    );
};

export default BoardsButton;