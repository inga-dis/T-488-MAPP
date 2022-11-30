import React, { useState } from 'react'
import { FlatList, TextInput, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Virkar en með smá galla, data uppfærist og það minkar þegar search er notað
// Þarf að fara í Main til að fá allt data til baka

const homeScreen = () => {
    const { navigate } = useNavigation()
    const data = [
        {
            id: 1,
            name: 'Sigga'
        },
        {
            id: 2,
            name: 'Krissi!'
        },
        {
            id: 3,
            name: 'Unnar'
        },
        {
            id: 4,
            name: 'Halldór'
        },
        {
            id: 5,
            name: 'Magga'
        },
        {
            id: 6,
            name: 'Gulla'
        }
    ]

    const [dataFromState, setData] = useState(data)

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
        const searchData = data.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setData(searchData)
        console.log('search  ', searchData)
        console.log('input   ', input)
        console.log('data    ', data)
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

export default homeScreen

/// ///////////////////////////////////

// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';

// const Search = () => {
//     const DATA = [
//         {
//           id: 1,
//           name: 'Sigga',
//         },
//         {
//           id: 2,
//           name: 'Steinn',
//         },
//         {
//           id: 3,
//           name: 'Kallli',
//         },
//     ];

//     const searchData = [

//       ];

//     console.log("HAHAHA   ", searchData)
//     function handleSearch(search) {
//         const searchData = DATA.filter((item)=>{

//             return item.name.toLowerCase().includes(search.toLowerCase())

//         });
//         // setSearch("");

//         console.log("hæ?   ",DATA)
//         console.log("hæ?   ",searchData)

//     }

//     const Item = ({ name }) => (

//         <View style={styles.item}>
//             <Text style={styles.name}>{name}</Text>
//         </View>

//         );

//     // const Item = ({ name }) => (

//     // <View style={styles.item}>
//     //     <Text style={styles.name}>{name}</Text>
//     // </View>

//     // );

// //   const renderItem = ({ item }) => (
// //     <Item name={item.id} />
// //   );

//   return (
//     <SafeAreaView style={styles.container}>
//         <TextInput
//             placeholder="Name"

//         />
//         <TouchableOpacity onPress={()=> {c("k")}}>
//             <Text style={styles.text}>Presss</Text>
//         </TouchableOpacity>
//         {/* <FlatList
//             data={DATA}
//             renderItem={renderItem}
//             keyExtractor={item => item.id}
//         /> */}
//     </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'green',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   name: {
//     fontSize: 32,
//   },
//   text: {
//     fontSize: 40,
//     backgroundColor: "orange"
//   }
// });

// export default Search;

// // import React, { useState } from "react";
// // import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
// // import ContactButton from '../ContactButton'
// // import {lightPurple, lightBlue} from '../../styles/colors';

// // const Search = () => {

// //     const data = [
// //         {id: 1, name: "sigga"},
// //         {id: 2, name: "steinn"},
// //         {id: 3, name: "valdi"},
// //         {id: 4, name: "kalli"},
// //     ]

// //     // const [search, setSearch] = useState();

// //     // const [dataFromState, setData] = useState(data)

// //     function handleSearch(search) {
// //         let searchData = data.filter((item)=>{
// //             return item.name.toLowerCase().includes(search.toLowerCase())
// //         });
// //         // setSearch("");
// //         console.log("hæ?   ",searchData)

// //     }
// //     // Breyta í component
// //     const item = ({item})=> {
// //         return(
// //             <View style={{backgroundColor: "green"}}>
// //                 <Text style={{fontSize:34}}>{item.name}</Text>
// //             </View>
// //         )
// //     }

// //     // const searchName = (input)=> {
// //     //     let data = dataFromState
// //     //     let searchData = data.filter((item)=>{
// //     //         return item.name.toLowerCase().includes(input.toLowerCase())
// //     //     });
// //     //     setData(searchData)
// //     //     console.log("hæ?   ",data)
// //     // }

// //     return (
// //         <View>
// //             <View>
// //                 <TextInput
// //                     placeholder="Search Name!"
// //                     // onChangeText={setSearch()}
// //                     style={{fontSize: 35}}
// //                 />
// //                 <TouchableOpacity onPress={()=> {handleSearch("s")}}><Text>Presss</Text></TouchableOpacity>
// //             </View>
// //             {/* <FlatList>
// //                 data= {data}
// //                 renderItem={item}
// //                 keyExtractior={(item, index)=>index.toString()}
// //             </FlatList> */}
// //         </View>
// //  );
// // }

// // // const xxx = ({}) => {

// // //     return (
// // //         <View>
// // //             <Text>SEARCH HERE...</Text>
// // //             <TextInput
// // //                 placeholder="Contact name"

// // //             />
// // //             <TouchableOpacity
// // //                 // style={[mainStyles.buttonAdd, mainStyles.buttonAddOpen]}
// // //                 // onPress={() => setModalVisible(true)}
// // //             >
// // //                 <Text>Add Board</Text>
// // //             </TouchableOpacity>
// // //         </View>

// // //  );
// // // }
// // export default Search;
