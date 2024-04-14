import { useState } from 'react';
import styles from '../css/Navbar.module.css'; // Import Navbar styles
import homeStyles from '../css/HomePage.module.css';
import logo from '../assets/logo.png';

function Navbar() {
	// adding the states
	const [isActive, setIsActive] = useState(false);
	//add the active class
	const toggleActiveClass = () => {
		setIsActive(!isActive);
	};
	//clean up function to remove the active class
	const removeActive = () => {
		setIsActive(false);
	};
	return (
		<div className="App">
			<header className="App-header">
				<nav className={`${styles.navbar}`}>
					{/* logo */}
					<img
						src={logo}
						alt="Logo"
						className={`${styles.logo}`}
						style={{ width: '60px', height: '50px' }}
					/>
					<ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
						<li onClick={removeActive}>
							<a href="#careers" className={`${styles.navLink}`}>
								Careers
							</a>
						</li>
						<li onClick={removeActive}>
							<a href="#services" className={`${styles.navLink}`}>
								Services
							</a>
						</li>
						<li onClick={removeActive}>
							<a href="#home" className={`${styles.navLink}`}>
								Home
							</a>
						</li>
						<li onClick={removeActive}>
							<a href="#aboutus" className={`${styles.navLink}`}>
								About Us
							</a>
						</li>
						<li onClick={removeActive}>
							<a href="#contactus" className={`${styles.navLink}`}>
								Contact Us
							</a>
						</li>
					</ul>
					<div
						className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
						onClick={toggleActiveClass}
					>
						<span className={`${styles.bar}`}></span>
						<span className={`${styles.bar}`}></span>
						<span className={`${styles.bar}`}></span>
					</div>
				</nav>
			</header>
		</div>
	);
}
export default Navbar;
