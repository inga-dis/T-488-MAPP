import React from 'react'
import { Alert } from 'react-native'

const AlertUser = ({
    heading,
    text
}) => {
    return (
        Alert.alert(
            heading,
            text,
            [
                {
                    text: 'Close'
                }
            ]
        )
    )
}
export default AlertUser
