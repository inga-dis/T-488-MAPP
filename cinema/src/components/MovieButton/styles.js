import { StyleSheet } from 'react-native'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({

//Um bíóhusið
    cinemaName: {
        fontSize: 34, 
        fontWeight: 'bold', 
        color: lightBlue, 
        textAlign: 'center',
        padding: 5
    },
    cinemaInfo: {
        textAlign: 'center', 
        fontSize: 20,
        color: 'white',
        marginTop: 20, 
        marginBottom: 20
    },
    cinemaInfoText: {
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 25
    },

//Bíómyndir í hverju bíóhúsi
    movies: {
        flex: 2,
        flexDirection: 'row',
        marginHorizontal: 20,
        borderRadius: 10,
        // marginVertical: 10,
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
        flexWrap:'wrap',
        flexDirection: 'row',
        marginRight: 50
    },
})