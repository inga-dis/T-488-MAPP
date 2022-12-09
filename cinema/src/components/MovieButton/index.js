import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { getGenres } from "../../services/dataservice";
import styles from './styles'
import defaultStyles from '../../styles/styles'


const MovieButton = ({ movie, cinema, key}) => {
    const { navigate } = useNavigation();

    const genre = getGenres(movie)


    return (
        <TouchableOpacity
            style={[styles.movies, defaultStyles.button]}
            onPress={() => navigate("Movie", {
                movie: movie, 
                cinema: cinema
                })}
        >
            <Image
                style={styles.moviesImage}
                resizeMode="cover"
                source={{
                    uri: movie.poster,
                }}
            />
            <View style={styles.moviesText}>
                <Text style={styles.moviesList}>{movie.title}</Text>
                <Text style={styles.moviesList}>{movie.year}</Text>
                <View>
                {!cinema 
                ? <Text>{movie['release-dateIS']}</Text>
                
                : <Text style={styles.moviesGenre}>{genre}</Text>
                }
                
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default MovieButton;
