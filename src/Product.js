import React from 'react'
import "./Product.css";
import {useStateValue} from "./StateProvider";
function Product(props) {
    const [{basket},dispatch]=useStateValue();
    console.log("this is the basket>>" ,basket);
    const addtobasket=()=>{
         dispatch({
             type:"ADD_TO_BASKET",
             item:{
                 id:props.id,
                 title:props.title,
                 image:props.logo,
                 rating:props.rating
             }
         })
    }
    return (
        <div className="product">
            <div className="product-info">
            <p>{props.title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div class="product-rating">
               <p>{props.rating}</p>
               
                </div>
                </div>
              <img  className="product-image" src={props.logo}/>
              <button className="button" onClick={addtobasket}>Add to basket</button>
         </div>
    )
}

export default Product; 