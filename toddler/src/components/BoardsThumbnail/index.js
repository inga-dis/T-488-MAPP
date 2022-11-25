import React from "react";
import PropTypes from 'prop-types';
import { Image, View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

const BoardsThumbnail = ({ id, name, thumbnailPhoto }) => (
    <TouchableHighlight>
        <View style={styles.board}> 
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: thumbnailPhoto}} />
            <Text style={styles.boardText}>{name}</Text>
        </View>
    </TouchableHighlight>
);
BoardsThumbnail.propTypes  = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired
    }
;
export default BoardsThumbnail;