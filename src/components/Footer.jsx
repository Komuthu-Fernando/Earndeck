import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import license from '../assets/license.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
	return (
		<div className="footer">
			<div className="sb__footer section__padding">
				<div className="sb__footer-links">
					<div className="sb__footer-links-div">
						<h4 className="footer_title" style={{ textAlign: 'left' }}>
							LEADING MARINE
							<br /> SURVEYING & CONSULTATION
							<br />
							IN SRI LANKA
						</h4>
						<br />
						<img src={license} className="" alt="" />
					</div>
					<div className="sb__footer-links-div footer_mid">
						<FaLocationDot className="reacticon" />
						<h4 className="mid_title">Address</h4>
						<span className="span">
							No. 5/5 Nagahawatha Road Wathtegedara, Maharagama 10280
						</span>
					</div>
					<div className="sb__footer-links-div footer_mid">
						<FaPhoneAlt className="reacticon" />
						<h4>Phone</h4>
						<span className="span">+94 77 308 1208</span>
					</div>
					<div className="sb__footer-links-div footer_mid">
						<MdEmail className="reacticon" />
						<h4>Email</h4>
						<span className="span">earndeckshipping@gmail.com</span>
					</div>
					<div className="sb__footer-links-div">
						<h4>Follow us</h4>
						<div className="socialmedia">
							<p>
								<a href="/employer">
									<FontAwesomeIcon
										icon={faFacebook}
										className="socialmedia_icon"
									/>
								</a>
							</p>
							<p>
								<a href="/employer">
									<FontAwesomeIcon
										icon={faInstagram}
										className="socialmedia_icon"
									/>
								</a>
							</p>
							<p>
								<a href="/employer">
									<FontAwesomeIcon
										icon={faLinkedin}
										className="socialmedia_icon"
									/>
								</a>
							</p>
							<p>
								<a href="/employer">
									<FontAwesomeIcon
										icon={faYoutube}
										className="socialmedia_icon"
									/>
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sb__footer-below">
				<div className="sb__footer-copyright">
					<span className="copyright">
						@{new Date().getFullYear()} <b>Sparkhaus</b>. All Right Reserved.
						<br />
					</span>
					<br />
				</div>
			</div>
		</div>
	);
};
export default Footer;
