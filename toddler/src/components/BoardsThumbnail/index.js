import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

const BoardsThumbnail = ({ name, id, thumbnailPhoto }) => (
    <View> 
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: thumbnailPhoto}} />
            console.log(image) 
    </View>
);

export default BoardsThumbnail;