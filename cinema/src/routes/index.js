import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Views
import Main from '../view/Main'
import Cinema from '../view/Cinema'
import Movie from '../view/Movie'

const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Main" component={Main}>
            <Stack.Screen name="main" component={Main} options={{
            }} />
            <Stack.Screen name="Cinema" component={Cinema} options={{
                title: 'Cinema'
                }} />
            <Stack.Screen name="Movie" component={Movie} options={{
                title: 'Movie'
                }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes