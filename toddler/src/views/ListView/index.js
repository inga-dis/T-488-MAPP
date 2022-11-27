import React from 'react';
import { View, Text } from 'react-native';
import Task from '../../components/Tasks';
import styles from '../../styles/styles';




const ListView = ({ route }) => {

    const tasks = route.params;


    return (
        
        <View >
            <Text style={styles.header}>{tasks.listName}</Text>
            <Task listid={tasks.listId} ></Task>
        </View>
        
    );
}

export default ListView;