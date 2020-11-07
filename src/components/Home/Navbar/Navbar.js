import React from 'react';
import './Navbar.css';
import brandLogo from '../../../utilities/images/logo1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
            <Link to='/home'><img className='brandLogo' src={brandLogo} alt="logo"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-3" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/imagePreView">Upload Image</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/tshirtPage">T-shirt</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;