import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import List from '../../components/Lists';
import styles from '../../styles/styles';



const ListView = ({ route }) => {

    const list = route.params;


    return (
        <View >
            <Text style={styles.header}>{list.listName}</Text>
            <List boardid={list.listId} ></List>
        </View>
    );
}

export default ListView;