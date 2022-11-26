import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Task from '../../components/Task';
import styles from '../../styles/styles';



const ListView = ({ route }) => {

    const tasks = route.params;


    return (
        <View >
            <Text style={styles.header}>{tasks.id}</Text>
            <Task listid={tasks.id} ></Task>
        {/* <Task /> */}
        </View>
        
    );
}

export default ListView;


// import React from "react";
// import {View, Text,ScrollView } from 'react-native';
// // import Swiper from 'react-native-swiper'
// import styles from './styles';

// const ListView = () => (

//     <ScrollView horizontal={true}>
//         <View style={styles.TaskList}>
//             <Text style={styles.TaskListName}>DUMMY DATA</Text>
//             <Text style={styles.Task}>TODO</Text>
            
//         </View> 
//         <View style={styles.TaskList}>
//             <Text style={styles.TaskListName}>DUMMY DATA</Text>
//             <Text style={styles.Task}>TODO</Text>
            
//         </View> 
//     </ScrollView>
    
// )

// export default ListView;