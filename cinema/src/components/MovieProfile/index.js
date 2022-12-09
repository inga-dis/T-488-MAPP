import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import defaultStyles from '../../styles/styles'



const MovieProfile = ({movie}) => (
    <View>
        {/* Allar upplýsingar um myndina: */}
        {/* <View style={defaultStyles.image}> */}
            <Image
                style={defaultStyles.image}
                resizeMode="cover"
                source={{ uri: movie.poster }} />
        {/* </View> */}
        <View style={defaultStyles.movieText}>
            <Text style={defaultStyles.movieName}>
                {movie.title} <Text style={defaultStyles.movieYear}>({movie.year})</Text>
            </Text>
            
        </View>
        <View style={defaultStyles.movieGerne}>
            {movie.genres.map((genre) => (
                <Text style={defaultStyles.movieGerneText}>{genre.Name}</Text>
            ))}
        </View>
            
        
        <Text style={defaultStyles.moviePlot}>{movie.plot}</Text>
        <Text style={defaultStyles.movieDuration}>{movie.durationMinutes} mín</Text>
    </View>
);  

export default MovieProfile
