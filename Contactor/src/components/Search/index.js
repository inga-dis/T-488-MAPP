/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
// import all the components we are going to use
import { SafeAreaView, Text, View, FlatList, TextInput } from 'react-native'
import ContactButton from '../ContactButton'
import defaultStyles from '../../styles/styles'
import styles from './styles'

const Search = ({ contacts }) => {
    const [search, setSearch] = useState('')
    const [filteredDataSource, setFilteredDataSource] = useState([])
    const [masterDataSource, setMasterDataSource] = useState([])

    useEffect(() => {
        setMasterDataSource(contacts)
        setFilteredDataSource(contacts)
    })
    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            console.log(newData)
            setFilteredDataSource(newData)
            setSearch(text)
        } else {
            setFilteredDataSource(masterDataSource)
            setSearch(text)
        }
    }

    const ItemView = ({ item }) => {
        return (
            <ContactButton contact={item}>
                <Text></Text>
            </ContactButton>
        )
    }

    const ItemSeparatorView = () => {
        return (
        // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8'
                }}
            />
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <TextInput style={[defaultStyles.input, styles.input]}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    placeholder="Search Here"
                />
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    )
}

export default Search
