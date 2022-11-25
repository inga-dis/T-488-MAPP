import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'
import AppContainer from './src/routes';



export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) 

};
