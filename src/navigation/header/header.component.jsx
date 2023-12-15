import React from "react";
import logo from '../../assets/Images/Car 1.jpg';
import {Link} from 'react-router-dom';
import './header-styles.css';


const Header = () => {
    return (
        <>
        <nav>
            <div className="heading">
              <img src={logo} alt="#" className="logo-image"/>
            </div>
            <ul className="nav-links">
                <li className="nav-list">
                    <Link to="/Home" className="nav-active">Home</Link>
                </li>
                <li className="nav-list">
                <Link to="/product" className="nav-active">Our product</Link>
                </li>
                <li className="nav-list">
                <Link to="/contact us" className="nav-active">Contact us</Link>
                </li>
                <li className="nav-list">
                <Link to="/about us" className="nav-active">About us</Link>
                </li>
                <li className="nav-list">
                <Link to="" className="nav-active">Advertisment</Link>
                </li>
                <li className="nav-list">
                <Link to="/Walmart" className="nav-active">Walmart</Link>
                </li>
                <li className="nav-list">
                <Link to="/" className="nav-active">Logout</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Header;