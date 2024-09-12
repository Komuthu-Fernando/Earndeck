import React, { useState } from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTiktok,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import license from '../assets/license.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Modal = ({ show, onClose, title, children }) => {
	if (!show) return null;

	const handleOverlayClick = (e) => {
		if (e.target.className.includes('modal-overlay')) {
			onClose();
		}
	};

	return (
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<div className="modal-content-footer">
				<button className="modal-close" onClick={onClose}>
					&times;
				</button>
				<h3>{title}</h3>
				<div className="modal-body">{children}</div>
			</div>
		</div>
	);
};

const Footer = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState({ title: '', body: '' });

	const openModal = (title, body) => {
		setModalContent({ title, body });
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const termsConditionsContent = (
		<>
			<h4 className="modal-heading">
				GERNERAL TERMS AND CONDITIONS FOR SURVEYORS & CONSULTANTS
			</h4>
			<dl className="modal-definitions">
				<dt className="modal-term-title">1. Definitions</dt>
				<dd className="modal-term-description">
					“Company / Surveyor / Consultant” is the Company Surveyor, Consultant
					working under these conditions. “Company” is the entity which employs
					the Company / Surveyor / Consultant. “Client” is the party at whose
					request or on whose behalf the Company / Surveyor / Consultant,
					undertakes surveying services. “Report” means any report or statement
					supplied by the Company / Surveyor / Consultant in connection with
					instructions received from the client. “Disbursements” means the cost
					of all reasonable photography, reproduction of drawings, diagrams,
					sketches and printing duplicating and where applicable, electronic
					transmission fees and all reasonable and appropriate expenses
					including travel, subsistence and hotel accommodation where an
					overnight stay is necessary. “Fees” Fees means the fees charged by the
					Company / Surveyor / Consultant, to the client and including any value
					added tax where applicable and any disbursements. “Lumpsum” means an
					all-inclusive amount charged to client to include all fees and costs
					excluding launch hire.
				</dd>
				<dt className="modal-term-title">2. Scope</dt>
				<dd className="modal-term-description">
					The Company / Surveyor / Consultant shall provide its services, solely
					in accordance with these terms and conditions.
				</dd>

				<dt className="modal-term-title">3. Work</dt>
				<dd className="modal-term-description">
					The Client will set out in writing the services, which it requires the
					Company / Surveyor / Consultant, to Provide. The Company / Surveyor /
					Consultant will confirm in writing that it accepts those instructions
					or Alternatively what services it will perform in connection with the
					client’s instructions. Once the company / surveyor / consultant and
					the client have agreed what services are to be performed any
					subsequent changes or additions must be agreed to by both parties in
					writing. When working on assignments with limited time the
					Company/Surveyor/Consultant will make best efforts to assess the
					condition of all accessible areas of the vessel (hull & machinery).
					Testing of machinery and entry into the vessel’s internal
					structure/tanks may not always be possible. It is the responsibility
					of the Client on a condition survey to ensure that the surveyor is
					authorized to board the vessel. The Company/Surveyor will always aim
					to see cargo spaces and ballast tanks, but this is dependent on the
					port and the master’s agreement. If ballast and cargo spaces are not
					available within a 2-day time span further attendance may be required
					at additional cost.
				</dd>

				<dt className="modal-term-title">4. Fees</dt>
				<dd className="modal-term-description">
					The Company reserves the right to charge any additional unexpected
					costs due to excessive delays – the Client will be kept advised of
					these costs
				</dd>

				<dt className="modal-term-title">5. Payment Terms</dt>
				<dd className="modal-term-description">
					Payment terms are as agreed at commencement of work and in the event
					of no prior agreement payment shall be no later than 30 days following
					the invoice date Late payments may incur penalty of 2.5% per month.
					The client shall be responsible for any bank charges or fees
					associated with the payment.
				</dd>

				<dt className="modal-term-title">
					6. Obligations and Responsibilities
				</dt>
				<dd className="modal-term-description">
					(a) Client <br />
					The Client undertakes to ensure that full instructions are given to
					the Company/Surveyor/Consultant and are provided in sufficient time to
					enable the required services to be performed effectively and
					efficiently and to procure all necessary access for the
					Company/Surveyor/Consultant, to goods, premises, vessels,
					installations and transport and to ensure that all appropriate safety
					measures are taken to provide safe and secure working conditions. The
					Company/Surveyor/Consultant shall not be liable for the consequences
					of late, incomplete, inadequate, inaccurate or ambiguous instructions.
					(b) Company/Surveyor/Consultant. <br />
					The Company/Surveyor/Consultant shall use every reasonable care and
					skill in the performance of the services in accordance with sound
					marine surveying practice. (c) Reporting <br />
					The Company/Surveyor/Consultant, shall submit a final written Report
					to the Client following completion of the agreed services describing
					the Company/Surveyor’s/Consultant’s, findings and the condition and/or
					quality of the object and/or purpose of the assignment, unless
					otherwise expressly instructed by the Client not to do so. Preliminary
					survey reports will be provided as required by the Client. Any
					opinions expressed in reports submitted by the
					Company/Surveyor/Consultant are without prejudice to the interests of
					any or all of the parties concerned. Reports on condition surveys will
					typically be issued within 48-72 hours of survey completion, but the
					Company/Surveyor/Consultant, cannot be held responsible for delays
					occurring beyond our control. (d) Confidentiality <br />
					The Company / Surveyor / Consultant undertakes not to disclose any
					information provided in confidence by the Client to any third party
					and will not permit access to such information by any third party
					unless the Client expressly grants permission save where required to
					do so by an order of a competent court of law. (e) Property <br />
					The right of ownership in respect of all original work created by the
					Company/Surveyor/Consultant, remains the property of the Company.
					Clients are respectfully reminded that the Company survey reports are
					copyright and for the client’s exclusive use unless otherwise agreed
					with the Company/Client. The Report may not be relied upon by any
					other party without the express written consent of the Supplier. In
					the event of any agreement on exclusivity on a condition survey, this
					will apply for one month from the date of survey. (f) Conflict of
					Interest/Qualification. <br />
					The Company/Surveyor/Consultant, shall promptly notify the Client of
					any matter including conflict of interest or lack of suitable
					qualifications and experience, which would render it undesirable for
					the Company/Surveyor/Consultant, to continue its involvement with the
					appointment. The Client shall be responsible for payment of the
					Company/Surveyor/Consultant, Fees up to the date of notification.
				</dd>

				<dt className="modal-term-title">7. Liability</dt>
				<dd className="modal-term-description">
					The Company/Surveyor/Consultant, shall not be liable to the Client or
					shipowner, whether in contract, tort (including negligence), breach of
					statutory duty, or otherwise, for any consequential, indirect or
					special losses including, without limitation: (i) financial or
					economical loss; (ii) loss of profit, (iii) loss of business or
					business opportunity; (iv) corruption, loss of or loss of use of data;
					(v) loss of revenue; (vi) loss of anticipated savings; or (vii) loss
					of contracts, by the Supplier howsoever arising out of or in
					connection with the Report, save where otherwise provided by statute;
					and the Supplier's total liability to the Report in respect of all
					other losses arising under or in connection with the Report, whether
					in contract, tort (including negligence), breach of statutory duty, or
					otherwise, including losses caused by the Supplier's deliberate
					personal repudiatory breach shall not exceed an amount equal to ten
					(10) times the Charges payable for the Report. The
					Company/Surveyor/Consultant shall not be liable for loss of or damage
					to equipment and other items placed at its disposal by or on behalf of
					the Client however such loss or damage occurs.
				</dd>

				<dt className="modal-term-title">8. Indemnity</dt>
				<dd className="modal-term-description">
					Except to the extent and solely for the amount therein set out that
					the Company/Surveyor/Consultant would be liable under Clause 7, the
					Client hereby undertakes to keep the Company/Surveyor/Consultant and
					its employees, agents and subcontractors indemnified and to hold them
					harmless against all actions, proceedings, claims, demands or
					liabilities whatsoever or howsoever arising which may be brought
					against them or incurred or suffered by them, and against and in
					respect of all costs, loss, damages and expenses (including legal
					costs and expenses on a full indemnity basis) which the
					Company/Surveyor/Consultant may suffer or incur (either directly or
					indirectly) in the course of the services under these Conditions.
				</dd>

				<dt className="modal-term-title">9. Third Party Rights</dt>
				<dd className="modal-term-description">
					Nothing in these Conditions shall create any rights for third parties
					under the Contracts (Rights of Third Parties) Act 1999
				</dd>

				<dt className="modal-term-title">10. Right to sub-contract</dt>
				<dd className="modal-term-description">
					The Company/Surveyor/Consultant shall have the right to subcontract
					any of the services provided under the Conditions, subject to the
					Client’s right to object on reasonable grounds. In the event of such a
					sub-contract the Company/Surveyor/Consultant shall remain fully liable
					for the due performance of its obligations under these Conditions, and
					the company’s PI insurance will apply to the sub-contract It is hereby
					expressly agreed that no employee or agent of the
					Company/Surveyor/Consultant, (Including every sub-contractor from time
					to time employed by the Company/Surveyor/Consultant, and the employees
					or agents of any such sub-contractor) shall in any circumstance
					whatsoever be under any liability whatsoever to the Client or
					shipowner for any loss, damage, delay arising or resulting directly or
					indirectly from any neglect or default on his part while acting in the
					course of or in connection with his employment and, without prejudice
					to the generality of the foregoing provisions in this condition, every
					exemption, limitation, condition and liberty herein contained and
					every right, exemption from liability defense and immunity of
					whatsoever nature applicable to the Company/Surveyor or to which the
					Company/Surveyor/Consultant is entitled hereunder shall also be
					available and shall extend to protect every such employee or agent of
					the Company/Surveyor/Consultant acting aforesaid.
				</dd>

				<dt className="modal-term-title">11. Force Majeure</dt>
				<dd className="modal-term-description">
					Neither the Company/Surveyor/Consultant nor the Client shall, except
					as otherwise provided in these Conditions, be responsible for any
					loss, damage, delay or failure in performance hereunder arising or
					resulting from act of God, act of war, seizure under legal process,
					quarantine restrictions, strikes, boycotts, lockouts, riots, civil
					commotions and arrest or restraint of princes, rulers or people.
				</dd>

				<dt className="modal-term-title">12. Insurance</dt>
				<dd className="modal-term-description">
					The Company/Surveyor/Consultant shall affect and maintain, at no cost
					to the Client, Professional Liability Insurance provides full coverage
					for such loss and damage for which the Company/Surveyor/Consultant may
					be held liable to the Client.
				</dd>

				<dt className="modal-term-title">13. Time Bar</dt>
				<dd className="modal-term-description">
					Any claims against the Company/Surveyor by the Client shall be deemed
					to be waived and absolutely time barred upon the expiry of one year
					from the submission date of the Report to the Client.
				</dd>

				<dt className="modal-term-title">14. Termination Rights </dt>
				<dd className="modal-term-description">
					Either party may terminate the Agreement with 30 days’ written notice
					to the other party. The Company may terminate the Agreement
					immediately if the Client breaches any material term of the Agreement,
					including failure to pay fees or provide necessary access for the
					inspection.
				</dd>

				<dt className="modal-term-title">15. Consequences of Termination</dt>
				<dd className="modal-term-description">
					Upon termination, the Client shall pay for all Services rendered up to
					the date of termination. Any outstanding fees shall become immediately
					due and payable.
				</dd>

				<dt className="modal-term-title">16. Governing Law and Jurisdiction</dt>
				<dd className="modal-term-description">
					(a) Applicable Law: <br />
					This Agreement shall be governed by and construed in accordance with
					the laws of Sri Lanka. Any disputes arising out of or in connection
					with this Agreement shall be subject to the exclusive jurisdiction of
					the courts of Sri Lanka. (b)Dispute Resolution: <br />
					In the event of a dispute, the parties agree to attempt to resolve the
					matter amicably through good faith negotiations. If the dispute cannot
					be resolved through negotiations, it shall be referred to arbitration
					in Colombo, Sri Lanka in accordance with the rules of Sri Lanka
					National Arbitration Centre. The decision of the arbitrator shall be
					final and binding on the parties.
				</dd>

				<dt className="modal-term-title">17. Amendments</dt>
				<dd className="modal-term-description">
					Modification Process: <br />
					These GTC may be amended by the Company at any time. The Client will
					be notified of any changes in writing, and continued use of the
					Services constitutes acceptance of the revised terms. Any amendments
					requested by the Client must be agreed upon in writing by both
					parties.
				</dd>

				<dt className="modal-term-title">18. Miscellaneous</dt>
				<dd className="modal-term-description">
					Entire Agreement: <br />
					These GTCs, along with any agreed-upon proposals, quotations, or work
					orders, constitute the entire agreement between the parties and
					supersede any prior agreements or understandings, whether written or
					oral. Severability: <br />
					If any provision of these GTCs is found to be invalid or
					unenforceable, the remaining provisions will continue in full force
					and effect. The invalid or unenforceable provision shall be replaced
					by a valid and enforceable provision that most closely matches the
					intent of the original provision. Notices: <br /> All notices required
					under this Agreement shall be sent to the addresses specified above
					and shall be deemed received upon delivery. Notices may be delivered
					by hand, sent by registered mail, or transmitted by email, provided
					that proof of receipt can be obtained.
				</dd>
			</dl>
		</>
	);

	const companyPolicyContent = (
		<>
			<h4>COMPANY POLICY</h4>
			<p>
				It is the policy of Earndeck Shipping Pvt. Ltd., to strive to satisfy
				the requirements of all of our customers, stakeholders and interested
				parties whenever possible, meeting and exceeding their expectations. We
				comply with all National, International rules Regulations IMO Codes and
				legal obligations, codes of practice and all other requirements
				applicable to our activities including the nature, scale and
				environmental impacts of its activities, products and services. We
				proactively promote the reduction of hazards, prevention of injury, ill
				health, protection of the environment, including prevention of
				pollution, sustainable resource use, climate change mitigation and
				adaptation, the protection of biodiversity and ecosystems and any other
				specific commitments which are relevant to the context of the
				organization.
			</p>
		</>
	);

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
						<img src={license} className="license" alt="" />
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
						<center>
							<span className="span">earndeckshipping@gmail.com</span>
						</center>
						<center>
							<span className="span">earndeckshipping@gmail.com</span>
						</center>
					</div>
					<div className="sb__footer-links-div">
						<h4>Follow us</h4>
						<div className="socialmedia">
							<p>
								<a href="/" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon
										icon={faFacebook}
										className="socialmedia_icon"
									/>
								</a>
							</p>
							<p>
								<a href="/" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon
										icon={faInstagram}
										className="socialmedia_icon"
									/>
								</a>
							</p>
							<p>
								<a href="https://www.linkedin.com/company/earndeck-shipping-pvt-ltd/" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon
										icon={faLinkedin}
										className="socialmedia_icon"
									/>
								</a>
							</p>
							<p>
								<a href="https://www.tiktok.com/@eandeckshipping" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon
										icon={faTiktok}
										className="socialmedia_icon"
									/>
								</a>
							</p>
						</div>
						<div className="footer-policies">
							<p
								className="policy-link"
								onClick={() =>
									openModal('Company Policy', companyPolicyContent)
								}
							>
								Company Policy
							</p>
							<p
								className="policy-link"
								onClick={() =>
									openModal('Terms & Conditions', termsConditionsContent)
								}
							>
								Terms & Conditions
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
			<Modal show={isModalOpen} onClose={closeModal} title={modalContent.title}>
				{modalContent.body}
			</Modal>
		</div>
	);
};
export default Footer;
