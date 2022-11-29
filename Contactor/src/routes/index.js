import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

// Views
import TestView from "../view/Test";


const Routes = () => (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="TestView">
            <Stack.Screen name="TestView" component={TestView} options={{
                // headerStyle: styles.navStack,
                title: 'TestView',
                
                // headerTintColor: darkBlue,
                // headerTitleStyle: {
                //     fontWeight: '300',
                //     fontSize: 20,
                // },
            }} />

        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;