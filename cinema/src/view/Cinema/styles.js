import { StyleSheet } from 'react-native'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({
    background: {
        backgroundColor: darkBrown
    },

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
        color: gold,
        marginTop: 20, 
        marginBottom: 20
    },

    movieList: {
        fontSize: 25, 
        color: lightBlue, 
        marginTop: 20

    }
})



// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: purple,
//         paddingBottom: 300
//     }

// })