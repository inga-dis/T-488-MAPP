import React from "react";
import { View } from "react-native";
import Navbar from "../../components/Nav";


import AddBoard from "../../components/AddBoard";


const AddView = ( whichAdd ) => {
    if ( whichAdd == "Board")

    return (
        <View>
            <Navbar></Navbar>
            <AddBoard></AddBoard>
        </View>
    );
};
export default AddView;
