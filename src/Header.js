import "./Header.css";
import logo from './amazon1.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
const Header=()=>{
    const [{basket},dispatch]=useStateValue();
return(
    <div className="header">
           <Link to ="/">
        <img className="header_logo"
        src={logo}
        />
        </Link>
        
        <div className="header_search">
            <input className="header_searchInput" type="text"/>
            <SearchIcon class="header-search-icon"/>
           
            </div>
           
           
           
               <div className="header_nav">
                    <div className="header_option">
                           <span className="header_optionLineOne">
                           hello guest </span>
                           <span className="header_optionLineTwo">
                           Sign In </span>
                    </div>
                    <div className="header_option">
                           <span className="header_optionLineOne">
                           Return </span>
                           <span className="header_optionLineTwo">
                           &Orders </span>
                    </div>
                    <div className="header_option">
                           <span className="header_optionLineOne">
                           Your </span>
                           <span className="header_optionLineTwo">
                           Prime </span>
                    </div>
                    <Link to="/checkout">
                      <div className="header_optionBasket">
                     
                           <ShoppingBasketIcon/>
                           <span className="header_BasketCount header_optionLineTwo">{basket.length}
                               </span>

                          </div>
                          </Link>
             
                  
                </div>
            </div>
                
)
}
export default Header;