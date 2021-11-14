import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
        <a className="brand" href="">Mundo Electronica</a>
        <ul className="nav-item">
            <li className="nav-link"><a className="nav-title" href="">Home</a></li>
            <li className="nav-link"><a className="nav-title" href="">Ofertas</a></li>
            <li className="nav-link"><a className="nav-title" href="">Login</a></li>
        </ul>
        <CartWidget />
    </nav>
    )
}

export default NavBar
