import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchGuitarById} from "../api/Api";
import Loader from "./Loader";
import Error from "./Error";


const Product = () => {
    const {id} = useParams()
    const [guitar, setGuitar] = useState({})
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setGuitar(await fetchGuitarById(id))
                setLoading(false)
            } catch (e) {
                setIsError(true)
                console.log("the error is", e)
            }
        }
        fetchData()
    }, [])

    if (loading) return <Loader/>

    if (isError) return <Error/>

    return (
        <main className="product-container">
            <h1>{guitar.model}</h1>
            <img src={`https://new-guitar-shop.herokuapp.com/${guitar.imgURL}`} alt={guitar.model}/>
            <p>Type: <strong>{guitar.type}</strong></p>
            <p>Build by <strong>{guitar.builder}</strong></p>
            <p>The wood from the back is {guitar.backWood} and wood in the front
                is the type of {guitar.topWood}</p>
            <div className="price"> <p> Price: <strong>{guitar.price}&#36;</strong></p></div>
            <button>Add to cart</button>

        </main>
    );
};

export default Product;
