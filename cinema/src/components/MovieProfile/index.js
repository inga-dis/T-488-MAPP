import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import defaultStyles from '../../styles/styles'
import { getGenresInMovie } from '../../services/dataservice'

const MovieProfile = ({ movie }) => {
    const genreList = getGenresInMovie(movie)

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: movie.poster }} />
            <View style={styles.movieText}>
                <Text style={[styles.movieName, defaultStyles.boldFont]}>
                    {movie.title} <Text style={[styles.movieYear, defaultStyles.boldFont]}>({movie.year})</Text>
                </Text>

            </View>
            <View style={styles.movieGerne}>
                {genreList.map((genre, i) => (
                    <Text key={i} style={[styles.movieGerneText, defaultStyles.font]}>{genre}</Text>
                ))}
            </View>

            <Text style={[styles.moviePlot, defaultStyles.font]}>{movie.plot}</Text>
            {movie.durationMinutes
                ? <Text style={[styles.movieDuration, defaultStyles.font]}>{movie.durationMinutes} mín</Text>
                : null
            }
        </View>
    )
}
export default MovieProfile
