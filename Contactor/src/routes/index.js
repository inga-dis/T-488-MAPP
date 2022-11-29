import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import HeaderStyle from '../components/Header/styles'



const Stack = createStackNavigator();

// Views
import Main from "../view/Main";
import Contacts from "../view/Contacts";
import Contact from "../view/Contact";


const Routes = () => (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Main" >
            <Stack.Screen name="Main" component={Main} options={{
                // headerStyle: styles.navStack,
                // headerStyle: () => {HeaderStyle}
                
                // headerTintColor: darkBlue,
                // headerTitleStyle: {
                //     fontWeight: '300',
                //     fontSize: 20,
                // },
            }} />
            <Stack.Screen name="Contacts" component={Contacts} options={{
                // headerStyle: styles.navStack,
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