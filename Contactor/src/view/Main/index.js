import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;


import { StyleSheet, Text, View, Button } from "react-native";
import * as fileService from "./src/services/fileservice";

export default function App() {
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
		<View style={styles.container}>
			<Button style={{color:'pink'}} onPress={addContact(test)}>button</Button>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
    },

});
