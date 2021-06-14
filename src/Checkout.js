import React from 'react';
import "./Checkout.css";
import logo from "./ads.jpg";
import Subtotal from "./Subtotal";
import Product from "./Product";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
const  Checkout=(props)=> {
  const [{basket,user},dispatch]=useStateValue();
    return (
        
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src={logo}/>
               
              <div className="checkout_title">
              <h3>{user?.email}</h3>
                <h1>Your Shopping Basket</h1>
              </div>
              {
                basket.map((val)=>{
                    return(
                     <CheckoutProduct id={val.id} title={val.title} price={val.price} rating={val.rating} logo={val.image} />
                    ); 
                })
              }
            
            </div>

            <div className="checkout_right">
                <Subtotal/>
                </div>
        </div>
    );
}

export default Checkout;