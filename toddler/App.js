import React from 'react';
import 'react-native-gesture-handler';
import AppContainer from './src/routes';
import moment from 'moment';
moment.locale('en');

export default function App() {
  return (
    <AppContainer />
  );
}
