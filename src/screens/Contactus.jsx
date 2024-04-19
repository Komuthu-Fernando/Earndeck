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
			</div><br />
			{/* Contact Form and Map Locator */}
			<div className={Styles.contactContainer}>
				{/* Contact Form */}
				<div className={Styles.contactForm}>
					<h2 className={Styles.formHeading}>Get in Touch</h2>
					<form>
						<label htmlFor="name">Name:</label>
						<input type="text" id="name" name="name" />
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" />
						<label htmlFor="phone">Phone Number:</label>
						<input type="tel" id="phone" name="phone" />
						<label htmlFor="inquiry">Inquiry/Message:</label>
						<textarea id="inquiry" name="inquiry" rows="4" cols="50"></textarea>
						<button type="submit">Submit</button>
					</form>
				</div>
				{/* Google Map Locator */}
				<div className={Styles.mapLocator}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.087446857001!2d79.9224079!3d6.8527431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2511e7faf2ca5%3A0xf5d0a37d88161258!2sEarndeck%20Shipping%20(Pvt)%20Ltd!5e0!3m2!1sen!2sus!4v1625514475096!5m2!1sen!2sus"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowfullscreen=""
						loading="lazy"
					></iframe>
				</div>
			</div>
		</div >
	);
}

export default ContactusPage;
