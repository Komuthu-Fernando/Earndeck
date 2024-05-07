import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Logo from '../assets/logo.png';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar">
			<div className="logo">
				<img src={Logo} alt="Company Logo" />
			</div>
			<div className="menu-toggle" onClick={toggleMenu}>
				<i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
			</div>
			<ul className={`menu-items ${isOpen ? 'open' : ''}`}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/aboutus">About Us</Link>
				</li>
				<li>
					<Link to="/services">Services</Link>
				</li>
				<li>
					<Link to="/careers">Careers</Link>
				</li>
				<li>
					<Link to="/certificates">Certificates</Link>
				</li>
				<li>
					<Link to="/contactus">Contact Us</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
