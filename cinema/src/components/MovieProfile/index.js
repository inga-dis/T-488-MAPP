import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import defaultStyles from '../../styles/styles'



const MovieProfile = ({movie}) => (
    <View style={styles.container}>
        {/* Allar upplýsingar um myndina: */}
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: movie.poster }} />
        <View style={styles.movieText}>
            <Text style={[styles.movieName, , defaultStyles.font]}>
                {movie.title} <Text style={[styles.movieYear, , defaultStyles.font]}>({movie.year})</Text>
            </Text>

        </View>
        <View style={styles.movieGerne}>
            {movie.genres.map((genre, i) => (
                <Text key={i} style={[styles.movieGerneText, defaultStyles.font]}>{genre.Name}</Text>
            ))}
        </View>

        <Text style={[styles.moviePlot, defaultStyles.font]}>{movie.plot}</Text>
        <Text style={[styles.movieDuration, defaultStyles.font]}>{movie.durationMinutes} mín</Text>
    </View>
);  

export default MovieProfile
