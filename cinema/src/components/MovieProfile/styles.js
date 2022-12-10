import { StyleSheet } from 'react-native'
import { accenttwo, darkText, accent, lightText } from '../../styles/colors'

export default StyleSheet.create({
    container: {
        marginBottom: 20
    },
    header: {
        backgroundColor: '#472E1F',
        borderColor: 'rgba(50, 23, 13, 0.5)',
        paddingVertical: 10,
    },
    cinemaName: {
        fontSize: 30,
        fontWeight: 'bold', 
        color: accenttwo, 
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 300,
        alignSelf: 'center',
        marginBottom: 5
    },
    movieName: {
        fontSize: 30,
        paddingLeft: 20,
        paddingBottom: 10,
        color: lightText,
    },
    movieYear: {
        paddingLeft:10,
        fontSize: 20,
        color: accent
    },
    movieGerne: {
        paddingLeft: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    movieGerneText: {
        color: darkText,
        paddingHorizontal: 10,
        marginRight:5,
        backgroundColor: accenttwo,
        borderRadius: 10,
        marginTop: 10
    },
    moviePlot: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        color: lightText
    },
    movieDuration: {
        paddingLeft: 20,
        color: lightText
    },
})
