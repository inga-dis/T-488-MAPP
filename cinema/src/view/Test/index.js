import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getCinemas, selectAllCinemas } from '../../store/cinemasSlice'
import Spinner from '../../components/Spinner';

const Test = () => {
    const dispatch = useDispatch()
    const [loadingData, setLoadingData] = useState(true);
  
    useEffect(() => {
        dispatch(getCinemas())
        setLoadingData(false)
    }, [dispatch])




    const cinemas = useSelector((state) => selectAllCinemas(state))
    console.log(cinemas)

    return (
        <View>
            {
                loadingData
                    ?
                    <Spinner />
                    :
                    <>
                    <TouchableOpacity ><Text> Testing síða </Text></TouchableOpacity>
                    <Text> Testing síða </Text>
                    {cinemas.map((cinema) => (
                        <Text> {cinema.name} </Text>
                    ))}
                    </>
            }

        </View>
    )
};
export default Test;