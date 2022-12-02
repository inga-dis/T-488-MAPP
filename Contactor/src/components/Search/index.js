/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
// import all the components we are going to use
import {
    RefreshControl,
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput
} from 'react-native'
import ContactButton from '../ContactButton'
import defaultStyles from '../../styles/styles'
import styles from './styles'

const Search = ({ contacts }) => {
    const [search, setSearch] = useState('')
    const [filteredDataSource, setFilteredDataSource] = useState([])
    const [masterDataSource, setMasterDataSource] = useState([])

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            setFilteredDataSource(contacts)
            setMasterDataSource(contacts)
        }
        // call the function
        fetchData()
        // make sure to catch any error
            .catch(console.error)
    }, [])

    const strAscending = [...filteredDataSource].sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
    )

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setFilteredDataSource(newData)
            setSearch(text)
        } else {
            setFilteredDataSource(masterDataSource)
            setSearch(text)
        }
    }

    const ItemView = ({ item }) => {
        return (
            <ContactButton contact={item}></ContactButton>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <TextInput style={[defaultStyles.input, styles.input]}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Here"
                />
                <FlatList
                    data={strAscending}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF'
    }
})

export default Search
