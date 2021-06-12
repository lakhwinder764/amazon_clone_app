import React from 'react';
import "./Checkout.css";
import logo from "./ads.jpg";
import Subtotal from "./Subtotal";
const  Checkout=(props)=> {
    return (
        
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src={logo}/>
               
              <div className="checkout_title">
                <h1>Your Shopping Basket</h1>
              </div>
            </div>

            <div className="checkout_right">
                <Subtotal/>
                </div>
        </div>
    );
}

export default Checkout;