import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from "../../view/Cinema/styles";

const MovieButton = ({ movie, cinema, key}) => {
    const { navigate } = useNavigation();

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
                    {movie.genres.map((genre) => (
                        <Text style={styles.movieGenre}>{genre.Name}</Text>
                    ))}
                
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MovieButton;
