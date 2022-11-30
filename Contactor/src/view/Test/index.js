import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Add from "../../components/Add"
import * as fileService from "../../services/fileservice";



const TestView = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    
    
    // const [images, setImages] = useState([]);
    // const [loadingContacts, setLoadingContacts] = useState(true);

    const addContact = async (contact) => {
        // setLoadingImages(true);
        const newContact = await fileService.addContact(contact);

        // setContacts([...contacts, newContact]); // Þörf á þessu?
        setIsAddModalOpen(false);
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
            <TouchableOpacity style={{color:'pink'}} onPress={() => addContact(testContact)}>
                <Text>Test fileService</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{color:'pink'}} onPress={() => setIsAddModalOpen(true)}>
                <Text>Open modal</Text>
            </TouchableOpacity>
            <Add isOpen={isAddModalOpen} closeModal={() => setIsAddModalOpen(false)}></Add>
        </View>
    );
}

export default TestView;
