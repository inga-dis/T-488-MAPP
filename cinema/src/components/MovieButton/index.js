import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from './styles'
import defaultStyles from '../../styles/styles'

const MovieButton = ({ movie, cinema, key}) => {
    const { navigate } = useNavigation();

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
            <View style={[styles.moviesText]}>
                <Text style={styles.moviesList}>{movie.title} <Text style={styles.moviesYear}>{movie.year}</Text></Text>
                
                <View style={styles.moviesGenre}>
                    {movie.genres.map((genre) => (
                        <Text>{genre.Name}   </Text>
                    ))}
                
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MovieButton;
