import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>

                <ul className="right">
                    <Link to="/"     ><li>Shop</li></Link>
                    <Link to="/cart" ><li>Cart</li></Link>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;