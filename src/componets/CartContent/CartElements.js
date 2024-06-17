import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

import React from 'react'
import Products from "../Products/Products";
import "./CartConten.css"

const CartElements = () => {

    const {cart} = useContext(DataContext);

    return cart.map((product)=>{
        return(
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-cart"/>
                <h3 className="name">{product.name}</h3>
                <h4 className="Price">{product.price}$</h4>
            </div>
        )
    })
}

export default CartElements
