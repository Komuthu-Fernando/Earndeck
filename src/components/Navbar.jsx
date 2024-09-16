import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Logo from '../assets/logo.webp';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
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
					<Link to="/" onClick={closeMenu}>Home</Link>
				</li>
				<li>
					<Link to="/aboutus" onClick={closeMenu}>About Us</Link>
				</li>
				<li>
					<Link to="/services" onClick={closeMenu}>Services</Link>
				</li>
				<li>
					<Link to="/careers" onClick={closeMenu}>Careers</Link>
				</li>
				<li>
					<Link to="/certificates" onClick={closeMenu}>Certificates</Link>
				</li>
				<li>
					<Link to="/contactus" onClick={closeMenu}>Contact Us</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
