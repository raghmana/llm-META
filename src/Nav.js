import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Logo from '/Assets/images/Logo.svg';

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About US</Link>
                    <Link>Menu</Link>
                    <Link>Reservations</Link>
                    <Link>Book a Table</Link>
                    <Link>Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;