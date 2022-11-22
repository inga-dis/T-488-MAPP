import React from 'react';
import Main from './src/views/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyConten: 'center' 
  },
});
