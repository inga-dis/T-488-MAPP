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
                    ?   <Text style={defaultStyles.font}>{movie['release-dateIS']}</Text>
                    
                    :   <View>
                            <Text style={[styles.moviesList, defaultStyles.font]}>({movie.year})</Text>
                        </View>
                    }
                    <View style={styles.moviesGenre}>
                        {genreList.map((genre, i) => (
                        <Text style={styles.movieGerneText} key={i}>{genre}</Text>
                    ))}
                    </View>
                    
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default MovieButton;
