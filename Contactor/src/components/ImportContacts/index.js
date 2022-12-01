import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.PHONE_NUMBERS],
                });

                if (data.length > 0) {
                    const contact = data;
                    console.log(contact);
                    console.log(contact[45].firstName);
                    console.log(contact[45].phoneNumbers[0].number);
                }
            }
        })();
    }, []);

    // return (
    //     <View style={styles.container}>
    //         <Text>Contacts Module Example</Text>
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});