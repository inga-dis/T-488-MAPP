import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from "../../view/Cinema/styles";
import { getGenres } from "../../services/dataservice";


const MovieButton = ({ movie, cinema }) => {
    
    const { navigate } = useNavigation();

    const genre = getGenres(movie)


    return (
        <TouchableOpacity
            style={styles.movie}
            onPress={() => navigate("Movie", {
                movie: movie, 
                cinema: cinema
                })}
        >
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{
                    uri: movie.poster,
                }}
            />
            <View style={styles.movieText}>
                <Text style={styles.movieList}>{movie.title}</Text>
                <Text style={styles.movieList}>{movie.year}</Text>
                <View>
                {!cinema 
                ? <Text>{movie['release-dateIS']}</Text>
                
                : <Text style={styles.movieGenre}>{genre}</Text>
                }
                
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MovieButton;
