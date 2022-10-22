import React from 'react';
import "./Header.css";
import Logo from "../../Image/Logo1.png";
// import BackImage from "../../Image/Rectangle1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo-image">
                    <img src={Logo} alt="Logo not found" />
                </div>
                <div className="inline">
                    <input className="control" type="search" placeholder="Search your destination..." />
                </div>
                <div className="item">

                    <Link className="link" to="/">News</Link>
                    <Link className="link" to="/destination">Destination</Link>
                    <Link className="link" to="/blog">Blog</Link>
                    <Link className="link" to="/contact">Contac</Link>
                    <Link className="link" to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;