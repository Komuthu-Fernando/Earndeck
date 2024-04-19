import Styles from '../css/Contactus.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ContactusPage() {
	return (
		<div className={Styles.content}>
			<h1 className={Styles.heading}>
				How can we help?
			</h1>
			<p className={Styles.paragraph}>
				Looking to contact Earndeck Shipping? There’s a few ways <br /> to do it based on the your inquiry. Check out all<br />your options below
			</p>
			<div className={Styles.cardscontainer}>
				{/* First Card */}
				<div className={Styles.card}>
					<FaMapMarkerAlt className={Styles.icon} />
					<h3 className={Styles.title}>Address</h3><br />
					<p className={Styles.text}>No. 5/5 Nagahawatha Road,<br />Wathtegedara,<br />Maharagama 10280</p>
				</div>

				{/* Second Card */}
				<div className={Styles.card}>
					<FaPhone className={Styles.icon} />
					<h3 className={Styles.title}>Call us</h3>
					<p className={Styles.text}><b>+94 77 308 1208</b></p><br />
					<p className={Styles.text}>Mail Hours:<br />Monday - Friday<br />8.30 a.m - 5.15 p.m</p>
				</div>

				{/* Third Card */}
				<div className={Styles.card}>
					<FaEnvelope className={Styles.icon} />
					<h3 className={Styles.title}>Email us</h3>
					<p className={Styles.text}><b>earndeckshipping@gmail.com</b></p><br />
					<p className={Styles.text}>Submit an email and we will get back to you soon</p>
				</div>
			</div>
		</div >
	);
}

export default ContactusPage;
