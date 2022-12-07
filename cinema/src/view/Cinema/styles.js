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
    cinemaInfoText: {
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 25
    },

    movieList: {
        fontSize: 20, 
        color: darkBrown, 
        // marginTop: 20,
        marginRight: 40
    },
    image: {
        width:60,
        height:80,
        
    },
    movie: {
        flex: 2,
        flexDirection: 'row',
        // backgroundColor: 'pink',
        // paddingTop: 20,
        // paddingBottom: 25,
        borderWidth: 2,
        // borderColor: 'white',
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        backgroundColor: lightBlue
    },
    movieGenre: {
        // position: 'absolute',
        // top: 70,
        color: darkBrown,
        // paddingLeft: 70
    },
    movieText: {
        paddingLeft: 10,
        // marginTop:-6,
        marginRight: 10
    }
})



// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: purple,
//         paddingBottom: 300
//     }

// })