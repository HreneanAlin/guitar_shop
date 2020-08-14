import React, {useEffect, useState} from 'react';
import {fetchGuitars} from "../api/Api";
import Loader from "./Loader";
import Error from "./Error";

const Products = () => {
    const [guitars, setGuitars] = useState([])
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setGuitars(await fetchGuitars());
                setLoading(false)
                console.log(guitars)

            } catch (e) {
                setIsError(true)


                console.log('the error is', e)
            }

        }
        fetchData()

    }, [])

    if(isError) return <Error/>

    if(loading ) return <Loader/>

   return (
        <main>
            <h1>Products</h1>
            <div className="guitars-container">

                {guitars.map(guitar => <div className='guitar-container' key={guitar.serialNumber}>
                    <h2>  {guitar.model} </h2>
                    <img src={`https://new-guitar-shop.herokuapp.com/${guitar.imgURL}`} alt={guitar.model}/>
                    <p>Type: <strong> {guitar.type} </strong></p>
                    <p>Price: <strong>{guitar.price} &#36;</strong></p>
                    <p> Add to Cart</p>
                    <p>more information</p>

                </div>)}
            </div>
        </main>
    );

};

export default Products;
