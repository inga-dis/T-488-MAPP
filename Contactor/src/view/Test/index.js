import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as fileService from "../../services/fileservice";



const TestView = () => {
    // const [images, setImages] = useState([]);
    // const [loadingContacts, setLoadingContacts] = useState(true);

    const addContact = async (contact) => {
        // setLoadingImages(true);
        const newContact = await fileService.addContact(contact);

        // setContacts([...contacts, newContact]); // Þörf á þessu?
        // setIsAddModalOpen(false);
        // setLoadingContact(false);
    };
    const testContact = {name: "Inga", phoneNumber: 22222, photo: "img"}

    return (
        <View style={{
            flexDirection: "row",
            // height: 100,
            padding: 20
        }}>
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <View style={{ backgroundColor: "red", flex: 0.5 }} />
            <Text>Hello World!</Text>
            <TouchableOpacity style={{color:'pink'}} onPress={() => addContact(testContact)}>
                <Text>Button</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TestView;
