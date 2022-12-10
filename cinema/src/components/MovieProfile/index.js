import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const MovieProfile = ({movie}) => (
    <View style={styles.container}>
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: movie.poster }} />
        <View style={styles.movieText}>
            <Text style={styles.movieName}>
                {movie.title} <Text style={styles.movieYear}>({movie.year})</Text>
            </Text>

        </View>
        <View style={styles.movieGerne}>
            {movie.genres.map((genre, i) => (
                <Text key={i} style={styles.movieGerneText}>{genre.Name}</Text>
            ))}
        </View>

        <Text style={styles.moviePlot}>{movie.plot}</Text>
        <Text style={styles.movieDuration}>{movie.durationMinutes} mín</Text>
    </View>
);  

export default MovieProfile
