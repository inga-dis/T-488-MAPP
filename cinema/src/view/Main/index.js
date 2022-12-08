/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useDispatch } from "react-redux";

import { ScrollView } from "react-native";

// import the data into the states
import { getCinemas } from "../../store/cinemasSlice";
import { getMovies } from "../../store/moviesSlice";
import { getUpcoming } from "../../store/upcomingSlice";

import defaultStyles from '../../styles/styles'
import CinemasList from "../../components/CinemasList";
import UpcomingList from '../../components/UpcomingList'
import MainHeader from "../../components/MainHeader";

const Main = () => {
    const [appIsReady, setAppIsReady] = useState(false);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState('cinema');

    const updatePage = (list) => {
        setCurrentPage(list)
     }


    // Keeps the splashscreen on then loads all data and turns it off.
    useEffect(() => {
        const getData = async () => {
            try {
                SplashScreen.preventAutoHideAsync();
                dispatch(getCinemas());
                dispatch(getMovies());
                dispatch(getUpcoming());
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
            <MainHeader updatePage={updatePage} ></MainHeader>
            {currentPage === 'cinema' 
            ? <CinemasList></CinemasList>
            : <UpcomingList></UpcomingList>
            }

        </ScrollView>
    );
};
export default Main;
