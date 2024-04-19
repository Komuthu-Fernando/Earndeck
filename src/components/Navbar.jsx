import { useState } from 'react';
import { Link } from 'react-router-dom';
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
					<Link to="/">
						<img
							src={logo}
							alt="Logo"
							className={`${styles.logo}`}
							style={{ width: '60px', height: '50px' }}
						/>
						{/* home about us services careers certificates contact us*/}
					</Link>
					<ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
						<li onClick={removeActive}>
							<Link to="/" className={`${styles.navLink}`}>
								Home
							</Link>
						</li>
						<li onClick={removeActive}>
							<Link to="/aboutus" className={`${styles.navLink}`}>
								About Us
							</Link>
						</li>
						<li onClick={removeActive}>
							<Link to="/services" className={`${styles.navLink}`}>
								Services
							</Link>
						</li>
						<li onClick={removeActive}>
							<Link to="/careers" className={`${styles.navLink}`}>
								Careers
							</Link>
						</li>
						<li onClick={removeActive}>
							<Link to="/certificates" className={`${styles.navLink}`}>
								Certificates
							</Link>
						</li>
						<li onClick={removeActive}>
							<Link to="/contactus" className={`${styles.navLink}`}>
								Contact Us
							</Link>
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
