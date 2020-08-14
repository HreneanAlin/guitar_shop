import React from "react";
import axios from 'axios';

const URL = 'https://new-guitar-shop.herokuapp.com/guitars'



export const fetchGuitars = async () => {

        const {data} = await axios.get(URL)

        return data;


}

export const fetchGuitarById = async (id) =>{

        const {data} = await axios.get(`https://new-guitar-shop.herokuapp.com/guitar/${id}`)

        return data

}