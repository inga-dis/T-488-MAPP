import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/styles';
import { darkBlue } from '../styles/colors';

const Stack = createStackNavigator();

import MainView from '../views/MainView';
import BoardsView from '../views/BoardsView';
// import BoardSettings from '../components/BoardSettings';


const Routes = () => (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="MainView">
            <Stack.Screen name="MainView" component={MainView} options={{
                headerStyle: styles.navStack,
                title: 'Main',
                headerTintColor: darkBlue,
                headerTitleStyle: {
                    fontWeight: '300',
                    fontSize: 20,
                },
            }} />
            <Stack.Screen name="BoardsView" component={BoardsView} options={{
                headerStyle: styles.navStack,
                title: 'Boards',
                headerTintColor: darkBlue,
                headerTitleStyle: {
                    fontWeight: '300',
                    fontSize: 20,
                },
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;