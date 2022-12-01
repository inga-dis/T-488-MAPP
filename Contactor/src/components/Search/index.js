import React, { useState } from 'react'
import { FlatList, TextInput, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Virkar en með smá galla, data uppfærist og það minkar þegar search er notað
// Þarf að fara í Main til að fá allt data til baka

const Search = ({ contacts }) => {
    console.log("  ")
    console.log("HALLÓ? ",contacts)
    const { navigate } = useNavigation()


    const [dataFromState, setData] = useState(contacts)

    const item = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigate('Contact', { name: item.name, id: item.id })}>
                <View style={{ backgroundColor: '#CDF0EA', marginBottom: 10 }}>
                    <Text style={{ fontSize: 34 }}>{item.name} {item.id}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const searchName = (input) => {
        // let data = dataFromState ÞAÐ ÞURFTI BARA AÐ KOMMENTA ÞETTA ÚT!!!
        const searchData = contacts.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setData(searchData)
        // console.log('search  ', searchData)
        // console.log('input   ', input)
        // console.log('data    ', contacts)
    }

    return (
        <View >
            <View>
                <TextInput
                    placeholder="Search Name!"
                    onChangeText={(input) => {
                        searchName(input)
                    }}
                    style={{ fontSize: 35 }}
                />
            </View>
            <FlatList
                data={dataFromState}
                renderItem={item}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>

    )
}

export default Search
