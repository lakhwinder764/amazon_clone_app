import React from "react";
import logo from './mirzapur.jpg';
import "./Home.css";
import Product from "./Product";
import logo2 from './item.png';
import logo1 from "./item1.jpg"
const Home=()=>{
    return( 
        <div className="home">
            <div className="home-container">
       <img className="home-image"
       src={logo} 
       /> 
  <div className="home-row">
        <Product id="1" title="hello" price="300" rating="⭐⭐" logo={logo2} />
        <Product  id="2"  title="world" price="400" rating="⭐⭐⭐⭐" logo={logo1}/>
              </div>
      <div className="home-row">
      <Product  id="3"  title="hello" price="300" rating="⭐⭐" logo={logo2} />
        <Product id="4"  title="world" price="400" rating="⭐⭐⭐⭐" logo={logo1}/>
        <Product id="5"  title="hello" price="300" rating="⭐⭐" logo={logo2} />
        
      </div>
      <div className="home-row">
      <Product id="7" title="hello" price="300" rating="⭐⭐" logo={logo2} />
        <Product id="8"  title="world" price="400" rating="⭐⭐⭐⭐" logo={logo1}/>
        <Product id="9"  title="hello" price="300" rating="⭐⭐" logo={logo2} />
        
      </div>
     
  </div>
  </div>
   );

}
export default Home;