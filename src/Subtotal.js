import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
const Subtotal=()=> {
    return (
        <div className="subtotal">
            <CurrencyFormat
                 renderText={(value)=>{
                     return(
                         <>
                         <p>
                             Subtotal(0 items)=<strong>{value}</strong>
                             </p>
                             <small className="subtotal_gift">
                                 <input type="checkbox"/>this order contains a gift
                                 </small>
                         </>
                     );
                     }
                 }
                 decimalScale={2}
                 value={230}
                 displayType={"text"}
                 thousandSeperator={true}
                 prefix={"$"}
            />
            <button className="subtotal_button">Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
