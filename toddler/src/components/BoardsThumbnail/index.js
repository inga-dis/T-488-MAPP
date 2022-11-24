import React from "react";
import { Image, View, Text } from "react-native";
import styles from "./styles";

const BoardsThumbnail = ({ id, name, thumbnailPhoto }) => (
    <View style={styles.board}> 
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: thumbnailPhoto}} />
        <Text style={styles.boardText}>{name}</Text>
    </View>
);

export default BoardsThumbnail;