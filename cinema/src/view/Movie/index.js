import React from "react";
import { Text, ScrollView } from "react-native";
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
            <Text style={styles.cinema}>{cinema.name}</Text>
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
