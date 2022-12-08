import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import styles from './styles'


const MovieProfile = ({movie}) => (
    <ScrollView style={styles.movie}>
        {/* Allar upplýsingar um myndina: */}
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: movie.poster }} />
        </View>
        <View style={styles.movieText}>
            <Text style={styles.movieName}>{movie.title}</Text>
            <Text style={styles.movieYear}>{movie.year}</Text>
            {movie.genres.map((genre) => (
                <Text style={styles.movieGerne}>{genre.Name}</Text>
            ))}
        </View>
        <Text style={styles.moviePlot}>{movie.plot}</Text>
        <Text style={styles.movieDuration}>{movie.durationMinutes}</Text>
    </ScrollView>
);  

export default MovieProfile
