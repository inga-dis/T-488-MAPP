import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
// import MovieScreen from '../../components/MovieScreen';
import styles from './styles'

const Movie = () => (
    // Þetta á að vera annarstaðar, í components, MovieScreen, ShowTimes...
    <ScrollView>
        
        <Text>Sambíó</Text> {/* Hvaða bíóhús var valið */}

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
        
        <View> {/* Allir sýningar tímar, bara einn gæji sem gerist svo eins oft og fjöldi sýningatíma */}
            <Text style={styles.movieShowtime}>Sýningar tímar</Text>
            <View style={styles.movieShowtimeView}>
                <Text style={styles.movieShowtimeText}>6.Desember 19:00</Text>
                <Text style={styles.movieShowtimeText}>Kaupa miða</Text> {/* Linkur á miða kaup */}
            </View>
            <View style={styles.movieShowtimeView}>
                <Text style={styles.movieShowtimeText}>6.Desember 22:00</Text>
                <Text style={styles.movieShowtimeText}>Kaupa miða</Text>
            </View>
            <View style={styles.movieShowtimeView}>
                <Text style={styles.movieShowtimeText}>7.Desember 19:00</Text>
                <Text style={styles.movieShowtimeText}>Kaupa miða</Text>
            </View>
            <View style={styles.movieShowtimeView}>
                <Text style={styles.movieShowtimeText}>9.Desember 21:00</Text>
                <Text style={styles.movieShowtimeText}>Kaupa miða</Text>
            </View>
            <View style={styles.movieShowtimeView}>
                <Text style={styles.movieShowtimeText}>10.Desember 18:00</Text>
                <Text style={styles.movieShowtimeText}>Kaupa miða</Text>
            </View>
            
        </View>
    </ScrollView>
    );  

export default Movie
