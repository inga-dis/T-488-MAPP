/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import defaultStyles from '../../styles/styles'
// import styles from './styles'
import { red } from '../../styles/colors'

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
        <View style={defaultStyles.mainHeader}>
            <TouchableOpacity style={defaultStyles.header}>
                <Text style={defaultStyles.headerText}>...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[defaultStyles.header, {
                backgroundColor: isCinema ? '#472E1F' : red

            }]}
                onPress={() => handlePress('upcoming')}
                >
                <Text style={defaultStyles.headerText}>Á döfinni</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[defaultStyles.header,  {
                backgroundColor: isCinema ? red : '#472E1F'

            }]}
                onPress={() => handlePress('cinema') }>
                <Text style={defaultStyles.headerText}>Bíóhús</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainHeader
