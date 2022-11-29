import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();

// Views
import Main from "../view/Main";
import Contacts from "../view/Contacts";
import Contact from "../view/Contact";


const Routes = () => (
    <NavigationContainer >

        <Stack.Navigator initialRouteName="Main" component={Main}>
            <Stack.Screen name="main" component={Main} options={{
            }} />
            <Stack.Screen name="Contacts" component={Contacts} options={{
                title: 'Contacts',
            }} />
            <Stack.Screen name="Contact" component={Contact} options={{
                // headerStyle: styles.navStack,
                title: 'Contact',
            }} />

        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;