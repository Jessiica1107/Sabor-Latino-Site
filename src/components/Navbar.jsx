import './Navbar.css';
import React from 'react';

export default function Navbar({ onNavigate }) {
    return (
        <nav className="navbar">
            <input type="checkbox" id="menu-toggle" style={{ display: 'none' }} />

            <label htmlFor="menu-toggle" className="hamburger">
                &#9776; 
            </label>

            <div className="logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
                <img src="./images/sabor-latino-img.avif" alt="sabor latino icon" className="nav-icon"/>
            </div>

            <ul className="nav-links">
                <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('menu'); }}>
                        MENU
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                        CONTACT US
                    </a>
                </li>
            </ul>
        </nav>
    );
}
