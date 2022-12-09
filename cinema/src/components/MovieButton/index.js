import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from './styles'
import defaultStyles from '../../styles/styles'
import { getGenresInMovie } from '../../services/dataservice'


const MovieButton = ({ movie, cinema }) => {
    const { navigate } = useNavigation();

    const genreList = getGenresInMovie(movie)


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
                <View>

                    {!cinema 
                    ?   <Text>{movie['release-dateIS']}</Text>
                    
                    :   <View>
                            <Text style={[styles.moviesList]}>({movie.year})</Text>
                        </View>
                    }
                    {genreList.map((genre, i) => (
                        <Text key={i}>{genre}</Text>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default MovieButton;
