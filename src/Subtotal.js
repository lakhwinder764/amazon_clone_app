import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
const Subtotal=()=> {
    const history=useHistory();
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                 renderText={(value)=>{
                     return(
                         <>
                         <p>
                             Subtotal({basket.length} items)=<strong>{basket.price}</strong>
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
            <button className="subtotal_button" onClick={
                (e)=>{
              history.push("/payment")
                }
            }>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
