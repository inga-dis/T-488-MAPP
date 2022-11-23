import React from "react";
import { Image, View, Text } from "react-native";
import styles from "./styles";

const BoardsThumbnail = ({ id, name, thumbnailPhoto }) => (
    <View> 
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: thumbnailPhoto}} />
        <Text>{name}:{id}</Text>
    </View>
);

export default BoardsThumbnail;