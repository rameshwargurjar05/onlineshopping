import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Product() {
    const navigate=useNavigate()
    const [products,setProducts]=useState([])
    useEffect(()=>{
        setProducts(['Shirt','Tshirt','Book','Pen'])
    },[])
    return (
        <>
            <h1>Product Page</h1>
            <h1 onClick={()=>navigate('/cart/'+products[0])}>Product 1 : {products[0]} </h1>
            <h1 onClick={()=>navigate('/cart/'+products[1])}>Product 2 : {products[1]} </h1>
            <h1 onClick={()=>navigate('/cart/'+products[2])}>Product 3 : {products[2]} </h1>
            <h1 onClick={()=>navigate('/cart/'+products[3])}>Product 4 : {products[3]} </h1>
        </>
    )
}

export default Product
