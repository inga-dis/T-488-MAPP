import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../view/Cinema/styles'

const Cinema = () => {
    const { navigate } = useNavigation()
    return (
        <View>
                <Text style={styles.cinemaName}>Sambíó</Text>
                <View style={styles.cinemaInfo}>
                    <Text style={styles.cinemaInfoText}>Smárabíó er eitt fullkomnasta kvikmyndahús landsins.{'\n'}Bíóið er með 5 sali og tekur rúmlega 1.000 manns í sæti..{'\n'}</Text>
                    <Text style={styles.cinemaInfoText}>Smáralind, 201 Kópavogur</Text>
                    <Text style={styles.cinemaInfoText}>564-0000</Text>
                    <Text style={styles.cinemaInfoText}>www.smarabio.is</Text>
                </View>
                
                <Text style={styles.cinemaInfo}>Myndir í sýningu:</Text>
                <TouchableOpacity style={styles.movie} onPress ={() => navigate('Movie')}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: 'https://kvikmyndir.is/images/poster/14043_500.jpg' }}/>
                    <View style={styles.movieText}>
                        <Text style={styles.movieList}>Violent Night 2022</Text>
                        <Text style={styles.movieGenre}>Spenna, Gaman, glæpa</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.movie} onPress ={() => navigate('Movie')}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: 'https://kvikmyndir.is/images/poster/14043_500.jpg' }} />
                    <View style={styles.movieText}>
                        <Text style={styles.movieList}>Violent Night Violent 1 2 3 4 5 Night 1 2 3 4 5 2022</Text>
                        <Text style={styles.movieGenre}>Spenna, Gaman, glæpa</Text>
                    </View>
                </TouchableOpacity>
                    
                <TouchableOpacity style={styles.movie} onPress ={() => navigate('Movie')}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: 'https://kvikmyndir.is/images/poster/14043_500.jpg' }} />
                    <View style={styles.movieText}>
                        <Text style={styles.movieList}>Violent Night 2022</Text>
                        <Text style={styles.movieGenre}>Spenna, Gaman, glæpa</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.movie} onPress ={() => navigate('Movie')}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: 'https://kvikmyndir.is/images/poster/14043_500.jpg' }} />
                    <View style={styles.movieText}>
                        <Text style={styles.movieList}>Violent Night 2022</Text>
                        <Text style={styles.movieGenre}>Spenna, Gaman, glæpa</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.movie} onPress ={() => navigate('Movie')}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: 'https://kvikmyndir.is/images/poster/14043_500.jpg' }} />
                    <View style={styles.movieText}>
                        <Text style={styles.movieList}>Violent Night 2022</Text>
                        <Text style={styles.movieGenre}>Spenna, Gaman, glæpa</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.movie} onPress ={() => navigate('Movie')}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: 'https://kvikmyndir.is/images/poster/14043_500.jpg' }} />
                    <View style={styles.movieText}>
                        <Text style={styles.movieList}>Violent Night 2022</Text>
                        <Text style={styles.movieGenre}>Spenna, Gaman, glæpa</Text>
                    </View>
                </TouchableOpacity>
            
        </View>
    )
}
export default Cinema
