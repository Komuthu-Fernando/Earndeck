import React, { useState, useEffect } from 'react';
import Styles from '../css/Footer.module.css'
import license from '../assets/license.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Modal from '../components/Popupmodal';

function Footer() {
	const [showCompanyPolicyModal, setShowCompanyPolicyModal] = useState(false);
	const [showTermsModal, setShowTermsModal] = useState(false);

	const openCompanyPolicyModal = () => {
		setShowCompanyPolicyModal(true);
	};

	const openTermsModal = () => {
		setShowTermsModal(true);
	};

	const closeCompanyPolicyModal = () => {
		setShowCompanyPolicyModal(false);
	};

	const closeTermsModal = () => {
		setShowTermsModal(false);
	};

	return (
		<div>
			<footer className={Styles.footer}>
				<div className={Styles.row}>
					<div className={Styles.column}>
						<h1>LEADING MARINE<br /> SURVERYING & CONSULTATION<br />IN SRI LANKA</h1><br />
						<img src={license} className={Styles.img}></img>
					</div>
					<div className={Styles.column}>

					</div>
					<div className={Styles.column}>
						<p className={Styles.Follow}>Follow us</p><br />
						<div className={Styles.row2}>
							<div>
								<FontAwesomeIcon icon={faFacebook} size="2x" />
							</div>
							<div>
								<FontAwesomeIcon icon={faInstagram} size="2x" />
							</div>
							<div>
								<FontAwesomeIcon icon={faLinkedin} size="2x" />
							</div>
							{/* <div>
								<FontAwesomeIcon icon={faTiktok} size="2x" />
							</div> */}
							<div>
								<FontAwesomeIcon icon={faYoutube} size="2x" />
							</div>
						</div>
						<div className={Styles.policy}>
							<div>
								<span style={{ cursor: 'pointer' }} onClick={openCompanyPolicyModal}>Company Policy</span>
								{showCompanyPolicyModal && (
									<Modal
										title="Company Policy"
										content="This is the company policy content."
										onClose={closeCompanyPolicyModal}
									/>
								)}
							</div>
							<div>
								<span style={{ cursor: 'pointer' }} onClick={openTermsModal}>Terms & Conditions</span>
								{showTermsModal && (
									<Modal
										title="Terms & Conditions"
										content="These are the terms and conditions."
										onClose={closeTermsModal}
									/>
								)}
							</div>
						</div>
					</div>
				</div><br />
				<div className={Styles.row}>
					<p className={Styles.cp}>Copyright 2024, designed by Sparkhaus</p>
				</div>
			</footer >

		</div >
	);
}

export default Footer;
