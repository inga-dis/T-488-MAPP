import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

// Views
import Main from "../view/Main";
import Contacts from "../view/Contacts";


const Routes = () => (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} options={{
                // headerStyle: styles.navStack,
                title: 'Main',
                
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

        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;