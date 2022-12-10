import { StyleSheet } from 'react-native'
import { logoColor } from '../../styles/colors'

export default StyleSheet.create({
    header: {
        backgroundColor: '#472E1F',
        fontSize: 20, 
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'rgba(50, 23, 13, 0.5)'
    },
    mainHeader: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: -20
    },
    headerText: {
        color: logoColor, 
        fontSize: 15
    }, 
})