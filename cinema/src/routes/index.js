import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Views
import Main from '../view/Main'
import Cinema from '../view/Cinema'
import Movie from '../view/Movie'
import Test from '../view/Test'
import Movies from '../view/Movies'

const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer >
        {/* <Stack.Navigator initialRouteName="Test" component={Test}>
            <Stack.Screen name="Test" component={Test} options={{
            }} /> */}
        <Stack.Navigator initialRouteName="Main" component={Main}>
            <Stack.Screen name="main" component={Main} options={{
            }} />
            <Stack.Screen name="Cinema" component={Cinema} options={{
                title: 'Cinema'
                }} />
            <Stack.Screen name="Movie" component={Movie} options={{
                title: 'Movie'
                }} />
            <Stack.Screen name="Movies" component={Movies} options={{
                title: 'In theaters'
                }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes
