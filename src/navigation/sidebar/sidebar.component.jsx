import React from 'react';
import logo from '../../assets/Images/footer.webp'
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PortalIcon from '@mui/icons-material/Web';
import StatisticsIcon from '@mui/icons-material/Business';
import FinanceIcon from '@mui/icons-material/MonetizationOn';
import MerchantIcon from '@mui/icons-material/BarChart';
import FoodIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout'
import './sidebar-styles.css';



export default function Sidebar() {
    return (
        <>
        <div className="container">
            <nav className="side_nav">
                <ul>
                    <li>
                        <Link to="" className="logo">
                            <img src={logo} alt="#" className="logo-img" />
                        </Link>
                    </li>
                    <li>
                        <Link className="wall-side" to="">
                            <HomeIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className="nav-item">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="wall-side" to="">
                            <PortalIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className="nav-item">Portal</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="wall-side" to="">
                            <StatisticsIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className="nav-item">Statistics</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="wall-side" to="">
                            <FinanceIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className="nav-item">Finance</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="wall-side" to="/home">
                            <MerchantIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className="nav-item">Merchant</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="wall-side" to="">
                            <FoodIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className="nav-item">Food</span>
                        </Link>
                    </li>
                </ul>
                <div className="bottom">
                    <div className="side-link">
                        <span></span>
                        <Link className="wall-side" to="/">
                            <LogoutIcon
                            />
                            <span className="nav-item">Logout</span>
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
        </>
    );

    
}