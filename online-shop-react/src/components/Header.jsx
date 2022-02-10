import React from 'react';
import {useState} from 'react';
import './Header.scss';
import Currency from '../assets/Currency';
import ShopingCart from '../assets/ShopingCart';
import BagLogo from '../assets/BagLogo';
import Counter from '../components/Counter';




const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [counterisActive, setCounterIsActive] = useState(false)
    

    const colorGreen = {
        color: "#1D1F22",
    };

    return (
        
        <nav className="header" style={colorGreen}>
        <ul className="ul_products">
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>  
        </ul>
        <h1><BagLogo/></h1>
        <ul className="ul_cart">

        {/* Dropdown and select currency */}
        <li className="dropdown-currency">
        <div className="dropbtn" onClick = {(e) => 
        setIsActive(!isActive)}><Currency/></div>
           {isActive && (
                <div className="dropdown-content">
                <a href="#"><b>$ USD</b></a>
                <a href="#"><b>€ EUR</b></a>
                <a href="#"><b>¥ JPY</b></a>
            </div>
           )}
        </li> 
        
        <li id="dropdown-cart">
        <div className="drop-cart-btn" onClick = {(e) => 
        setCounterIsActive(!counterisActive)}><ShopingCart/></div>
           {counterisActive && (
             <Counter/>
            )}
           </li>
        </ul>
        </nav>
    )
};

export default Header;

