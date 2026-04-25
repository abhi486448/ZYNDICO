import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={navRef} className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-header">
                    {/* Burger / Toggle */}
                    <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "✕" : "⋮"}
                    </div>

                    <Link to="/" className="logo-link" onClick={() => setIsOpen(false)}>
                        <h2 className="logo1">ZYNDICO</h2>
                    </Link>

                    <div className="spacer"></div>
                </div>

                <div className={`nav-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/shirts" onClick={() => setIsOpen(false)}><button className="nav-button">Shirts</button></Link></li>
                        <li><Link to="/tshirts" onClick={() => setIsOpen(false)}><button className="nav-button">T-Shirts</button></Link></li>
                        <li><Link to="/hoodies" onClick={() => setIsOpen(false)}><button className="nav-button">Hoodies</button></Link></li>
                        <li><Link to="/sneakers" onClick={() => setIsOpen(false)}><button className="nav-button">Sneakers</button></Link></li>
                        <li><Link to="/shoes" onClick={() => setIsOpen(false)}><button className="nav-button">Shoes</button></Link></li>
                        <li><Link to="/highend" onClick={() => setIsOpen(false)}><button className="nav-button">Bharat Bespoke</button></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
