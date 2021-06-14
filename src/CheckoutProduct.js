import React from 'react'
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";
 const CheckoutProduct=(props)=>{
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id
        })
    }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct_image" src={props.logo}/>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{props.title}</p>
                <p className="checkoutproduct_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                   </p>
                <p className="checkoutproduct_rating">{props.rating}</p>
                <button className="checkoutproduct_button" onClick={removeFromBasket}>Remove from Basket</button>
                </div>
        </div>
    )
}

export default CheckoutProduct
