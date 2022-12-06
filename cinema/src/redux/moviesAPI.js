import React from 'react'
import axios from 'axios'
import { token } from './token'

export const fetchAll = () => {
    axios.get('https://api.kvikmyndir.is/movies', {
        headers:  {
            'x-access-token' : token
        }    
    })
        .then(response => {
            console.log(response.data)
            return response
        })
        .catch(error => {
            console.log(error)
            return error
        })
}