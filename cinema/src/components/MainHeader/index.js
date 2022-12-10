import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import defaultStyles from '../../styles/styles'
import { accent, lighterbackground } from '../../styles/colors'

const MainHeader = ({ updatePage }) => {
    const [isCinema, setCinema] = useState(true)

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
            <TouchableOpacity style={[defaultStyles.header, {
                backgroundColor: isCinema ? lighterbackground : accent

            }]}
            onPress={() => handlePress('upcoming')}
            >
                <Text style={[defaultStyles.headerText, defaultStyles.font]}>Á döfinni</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[defaultStyles.header, defaultStyles.font, {
                backgroundColor: isCinema ? accent : lighterbackground

            }]}
            onPress={() => handlePress('cinema') }>
                <Text style={[defaultStyles.headerText, defaultStyles.font]}>Bíóhús</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainHeader
