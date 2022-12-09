import React from "react";
import { Text, ScrollView, View } from "react-native";
import MovieScreen from "../../components/MovieProfile";
import ShowTimes from "../../components/ShowTimes";
import VideoPlayer from "../../components/VideoPlayer";
import styles from "./styles";
import defaultStyles from '../../styles/styles'

const Movie = ({ route }) => {
    const { movie, cinema } = route.params;
    const trailer = () => {
        if (movie.trailers.length && (movie.trailers[0].results.length)) {
            return true;
        }
    };
    trailer();
    return (
        <ScrollView style={defaultStyles.container}>
            <View style={defaultStyles.cinemaheader}>
                <Text style={defaultStyles.cinemaName}>{cinema.name}</Text>
            </View>
            <MovieScreen movie={movie} />

            {trailer() ? (
                <VideoPlayer
                    youtubeId={movie.trailers[0].results[0].key}
                ></VideoPlayer>
            ) : null}

            {cinema ? <ShowTimes movie={movie} CId={cinema.id} /> : null}
        </ScrollView>
    );
};
export default Movie;
