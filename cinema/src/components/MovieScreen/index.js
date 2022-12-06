import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import styles from './styles'


const MovieScreen = () => (
    <ScrollView style={styles.movie}>
        {/* Allar upplýsingar um myndina: */}
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: 'https://kvikmyndir.is/images/poster/14043_500.jpg' }} />
            
        </View>
        <View style={styles.movieText}>
            <Text style={styles.movieName}>Violent Night</Text>
            <Text style={styles.movieYear}>2022</Text>
        </View>
        <Text style={styles.movieGerne}>Spenna, Gaman, glæpa</Text>
        <Text style={styles.moviePlot}>Hópur málaliða ræðst inn á heimili auðugrar fjölskyldu á aðfangadag Jóla og tekur alla viðstadda sem gísla. Jólasveinninn þarf nú að grípa til sinna ráða og bjarga Jólunum. Hann er um það bil að sýna öllum að hann er svo sannarlega enginn engill. </Text>
        <Text style={styles.movieDuration}>101min</Text>
    </ScrollView>
    );  

export default MovieScreen
