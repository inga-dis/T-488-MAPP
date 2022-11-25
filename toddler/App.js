import React from 'react';
import AppContainer from './src/routes';
import { store } from './src/redux/store'
import { Provider } from 'react-redux';



export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) 

};
