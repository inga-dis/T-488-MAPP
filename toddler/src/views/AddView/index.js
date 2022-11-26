import React, { useEffect, useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { useSelector } from "react-redux";
import Navbar from "../../components/Nav";


import AddBoard from "../../components/AddBoard";


import AddList from "../../components/AddList"; // EKKI RÉTTUR STAÐUR
import AddTask from "../../components/AddTask"; // EKKI RÉTTUR STAÐUR

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
