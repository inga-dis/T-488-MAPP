<<<<<<< HEAD
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store'
import AppContainer from './src/routes';



export default function App() {
  return (
      <AppContainer />
  ) 

=======
import React from 'react';
import TestView from './src/view/Test'

export default function App() {

    return (
		<TestView></TestView>
	);
>>>>>>> 8be5c44bf35da17da329065d03674f4d2dca4396
};
