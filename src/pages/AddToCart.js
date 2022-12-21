import React from 'react'
import { useParams } from 'react-router-dom'
function AddToCart() {
    const myProduct=useParams();
    return (
        <>
        <h1>My Cart Values</h1>
        <h2>Product Name {myProduct.proname} </h2>
        </>
    )
}

export default AddToCart
