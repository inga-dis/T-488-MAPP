import React from "react";
import {View, Text,ScrollView } from 'react-native';
import styles from './styles';

const ListView = () => (

    <ScrollView horizontal={true}>
        <View style={styles.TaskList}>
            <Text style={styles.Task}>TODO</Text>
            <Text style={styles.Task}>TODOO</Text>
            <Text style={styles.Task}>TOODOO</Text>
            <Text style={styles.Task}>TODO</Text>
            <Text style={styles.Task}>TODOO</Text>
            <Text style={styles.Task}>TOODOO</Text>
        </View> 
        <View style={styles.TaskList}>
            <Text style={styles.TaskListName}>DUMMY DATA</Text>
            <Text style={styles.Task}>TODO</Text>
            <Text style={styles.Task}>TODOO</Text>
            <Text style={styles.Task}>TOODOO</Text>
        </View> 
    </ScrollView>
    
)

export default ListView;