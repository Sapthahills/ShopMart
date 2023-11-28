import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const {getTotalCartItems}=useContext(ShopContext);
    const [menuOpen,SetMenuOpen]=useState(false);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p><Link style={{textDecoration:'none',color:'black'}} to='/'>Shop Mart</Link></p>
        </div>
       
       <div className="nav-menu">
            <ul className={menuOpen?"open":" "}>
                <li><Link style={{textDecoration:'none'}} to='/'>Shop</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/mens'>Men</Link></li>
                <li><Link style={{textDecoration:'none'}} to='womens'>Women</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link></li>
            </ul>
            </div>
            <div className="nav-login-cart">
                <Link to='login'><button>Login</button></Link>
                <Link to='cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <div className="nav-ham" onClick={()=>SetMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
  )
}

export default Navbar
