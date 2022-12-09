import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "./styles";

const VideoPlayer = ({ youtubeId }) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);


    return (
        <View style={{flex: 1}}>
            <YoutubePlayer
                height={220}
                play={playing}
                videoId={youtubeId}
                onChangeState={onStateChange}
            />
        </View>
    );
};

export default VideoPlayer;
