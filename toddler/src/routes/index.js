import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import MainView from '../views/Main';

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="MainView">
            <Stack.Screen name="MainView" component={MainView} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;