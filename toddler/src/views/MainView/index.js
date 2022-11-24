import React from "react";
import {View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import Logo from '../../resources/logo.png'

const MainView = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
        <Image source={Logo} style={styles.logoStyle} />
        <Text>Testing some more</Text>
        <TouchableHighlight 
            onPress={() => navigate('BoardsView')}
            style={styles.button}>
            <Text style={styles.butttonText}>Board</Text>
        </TouchableHighlight>
  </View>
);

export default MainView;

// const word = data.boards;

// const onPress = () => (
//     <View>
//         <Text>hah</Text>
//     </View>
    
// );

// const Item = ({ name }) => (
//     <View style={styles.item}>
//         <TouchableHighlight onPress={onPress}>
//     {/* <Image source={logo} /> */}
//       <Text style={styles.name}>{name}</Text>
//       </TouchableHighlight>
//     </View>
//   );

//   const App = () => {
//     const renderItem = ({ item }) => (
        
//       <Item name={item.name} />
//     );
//     const onPress = () => setCount(count + 1);
  
//     return (
//         <View>
//                 <View style={styles.container}>
//                     <FlatList
//                     data={word}
//                     renderItem={renderItem}
//                     keyExtractor={item => item.id}
//                     />
                    
//                 </View>
           
//         </View>
//     );
//   }


// export default App;


