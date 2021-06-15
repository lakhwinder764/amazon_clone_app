import React,{useState} from 'react'
import "./Payment.css";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"; 
import {Link} from "react-router-dom";
import { useElements,useStripe,CardElement } from '@stripe/react-stripe-js';
const Payment=()=> {


    const [{basket,user},dispatch]=useStateValue();
    const stripe=useStripe();
    const elements=useElements(); 
    const [error,seterror]=useState();
    const [disabled,setdisabled]=useState(true);

    const HandleSubmit=(event)=>{
                        
     
    }

    const HandleChange=(event)=>{
          setdisabled(event.empty);
          seterror(event.error?event.error.message:"")  
    
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    checkout(<Link to="/checkout">{basket.length}
                    </Link>)
                    </h1>
              <div className="payment_section">
                  <div className="payment_title">
                      <h3> Payment</h3>
                      </div>
                      <div className="payment_address">
                          <p>{user?.email}</p>
                          <p>p1</p>
                          <p>p2</p>
                          </div>

                  </div>

                  
                  <div className="payment_section">
                      <div className="payment_title">
                       <h3>review items</h3>
                          </div>
                          <div className="payment_items">
                              {
                                  basket.map((item)=>{
                                    return(
                                    <CheckoutProduct
                                      id={item.id}
                                      title={item.title}
                                      logo={item.image}
                                      price={item.price}
                                      rating={item.rating}
                                      />
                                    )
                                  })
                              }
                              </div> 
                  </div>


                  <div className="payment_section">
                  <div className="payment_title">
                      <h3>Payment method</h3>
                      </div>
                      <div className="payment_details">
                          <form onSubmit={HandleSubmit}> 
                              <CardElement onChange={HandleChange}/>
                              </form>
                          </div>


                  </div>
                </div>

           
        </div>
    )
}

export default Payment
 