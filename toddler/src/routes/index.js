import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/styles';

const Stack = createStackNavigator();

import MainView from '../views/MainView';
import BoardsView from '../views/BoardsView';

const Routes = () => (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="MainView">
            <Stack.Screen name="MainView" component={MainView} options={{
                headerStyle: styles.navstack
            }} />
            <Stack.Screen name="BoardsView" component={BoardsView} options={{
                headerStyle: styles.navstack
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;