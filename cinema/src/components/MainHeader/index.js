/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../view/Main/styles'
import { brown, red } from '../../styles/colors'



const MainHeader = ({updatePage}) => {
    const [isCinema, setCinema] = useState(true);

    const handlePress = (list) => {
        updatePage(list)
        if (list === 'cinema') {
            setCinema(true)
        } else {
            setCinema(false)
        }
    }


    return (
        <View style={styles.mainHeader}>
            <TouchableOpacity style={styles.header}>
                <Text style={styles.headerText}>...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.header, {
                backgroundColor: isCinema ? '#472E1F' : red

            }]}
                onPress={() => handlePress('upcoming')}
                >
                <Text style={styles.headerText}>Á döfinni</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.header,  {
                backgroundColor: isCinema ? red : '#472E1F'

            }]}
                onPress={() => handlePress('cinema') }>
                <Text style={styles.headerText}>Bíóhús</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainHeader
