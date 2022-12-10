import { StyleSheet } from 'react-native'
import { lightBlue, darkBrown } from '../../styles/colors'

export default StyleSheet.create({

//Bíómyndir í hverju bíóhúsi
    movies: {
        flex: 2,
        flexDirection: 'row',
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 10,
        backgroundColor: lightBlue
    },
    moviesImage: {
        width:52,
        height:86,
        marginLeft: 5,
        marginRight: 2,
        borderRadius: 2
    },
    moviesText: {
        paddingLeft: 10,
        marginRight: 10,
    },
    moviesList: {
        fontSize: 20, 
        color: darkBrown,
        marginRight: 40,
    },
    moviesYear: {
        fontSize: 15,
    },
    moviesGenre: {
        flex: 1,
        flexWrap:'wrap',
        flexDirection: 'row',
        marginRight: 60,
    }, 
    movieGerneText: {
        paddingRight: 15,
    }
})