import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';
const Subtotal=()=> {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                 renderText={(value)=>{
                     return(
                         <>
                         <p>
                             Subtotal({basket.length} items)=<strong>{basket.length}</strong>
                             </p>
                             <small className="subtotal_gift">
                                 <input type="checkbox"/>this order contains a gift
                                 </small>
                         </>
                     );
                     }
                 }
                 decimalScale={2}
                 value={getBasketTotal(basket)}
                 displayType={"text"}
                 thousandSeperator={true}
                 prefix={"$"}
            />
            <button className="subtotal_button">Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
