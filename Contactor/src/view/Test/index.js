import React from "react";
import { Text, View, Button } from "react-native";
import * as fileService from "../../services/fileservice";



const TestView = () => {
    // const [images, setImages] = useState([]);
    // const [loadingContacts, setLoadingContacts] = useState(true);

    const addContact = async (contact) => {
		console.log(contact)
        // setLoadingImages(true);
        // const newContact = await fileService.addContact(contact);

        // setContacts([...contacts, newContact]); // Þörf á þessu?
        // setIsAddModalOpen(false);
        // setLoadingContact(false);
    };

    return (
        <View style={{
            flexDirection: "row",
            // height: 100,
            padding: 20
        }}>
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <View style={{ backgroundColor: "red", flex: 0.5 }} />
            <Text>Hello World!</Text>
            <Button style={{color:'pink'}}>button</Button>
        </View>
    );
}

export default TestView;
