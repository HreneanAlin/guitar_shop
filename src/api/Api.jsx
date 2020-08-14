import React from "react";
import axios from 'axios';

const URL = 'https://new-guitar-shop.herokuapp.com/guitars'

export const fetchGuitars = async () => {
    try {
        const {data} = await axios.get(URL)

        return data;
    } catch (e) {


    }


}