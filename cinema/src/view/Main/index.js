/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useDispatch } from "react-redux";

import { ScrollView } from "react-native";

// import the data into the states
import { getCinemas } from "../../store/cinemasSlice";
import { getMovies } from "../../store/moviesSlice";

import defaultStyles from '../../styles/styles'
import CinemasList from "../../components/CinemasList";
import MainHeader from "../../components/MainHeader";

const Main = () => {
    const [appIsReady, setAppIsReady] = useState(false);
    const dispatch = useDispatch();

    // Set's the splashscreen on then loads all data and turns it off.
    useEffect(() => {
        const getData = async () => {
            try {
                SplashScreen.preventAutoHideAsync();
                dispatch(getCinemas());
                dispatch(getMovies());
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
                SplashScreen.hideAsync();
            }
        };
        getData();
    }, []);

    if (!appIsReady) {
        return null;
    }

    return (
        <ScrollView style={defaultStyles.container}>
            <MainHeader></MainHeader>
            <CinemasList></CinemasList>
        </ScrollView>
    );
};
export default Main;
