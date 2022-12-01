import React, { useEffect } from 'react'

import * as Contacts from 'expo-contacts'

const ImportContacts = () => {
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.PHONE_NUMBERS]
                });

                if (data.length > 0) {
                    const contact = data;
                }
            }
        })()
    }, [])
}
export default ImportContacts