import React from 'react'
import { Image } from 'react-native'

const Icon = ({ size }) => {
    return (
        <Image
            style={{
                height: size,
                width: size
            }}
            source={require('../../../assets/icon-background-free.png')}
        >
        </Image>
    )
}

export default Icon
