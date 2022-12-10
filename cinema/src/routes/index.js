import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { logoColor } from '../styles/colors'

// Views
import Main from '../view/Main'
import Cinema from '../view/Cinema'
import Movie from '../view/Movie'
import Icon from '../components/Icon'

const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Main" component={Main}>
            <Stack.Screen name="main" component={Main} options={{
                title: 'Dr. Cinema',
                headerStyle: {
                    backgroundColor: logoColor,
                },
                headerTintColor: '#000',
                headerRight: () => <Icon size={56.9}></Icon>

            }} />
            <Stack.Screen name="Cinema" component={Cinema} options={{
                title: 'Cinema',
                headerStyle: {
                    backgroundColor: logoColor,
                },
                headerTintColor: '#000',
                headerRight: () => <Icon size={56.9}></Icon>
                }} />
            <Stack.Screen name="Movie" component={Movie} options={{
                title: 'Movie',
                headerStyle: {
                    backgroundColor: logoColor,
                },
                headerTintColor: '#000',
                headerRight: () => <Icon size={56.9}></Icon>
                }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes