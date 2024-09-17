import React, { useEffect } from 'react';
import '../css/Aboutus.css';
import owner from '../assets/owner-image.webp';
import ship from '../assets/homeimg.webp';

const AboutusPage = () => {
	const teamMembers = [
		{
			name: 'John Doe',
			position: 'Software Engineer',
			photo: 'https://via.placeholder.com/150',
		},
		{
			name: 'Jane Smith',
			position: 'Product Manager',
			photo: 'https://via.placeholder.com/150',
		},
		{
			name: 'Mike Johnson',
			position: 'Designer',
			photo: 'https://via.placeholder.com/150',
		},
		{
			name: 'Emily Davis',
			position: 'Marketing Specialist',
			photo: 'https://via.placeholder.com/150',
		},
		{
			name: 'Chris Brown',
			position: 'Data Scientist',
			photo: 'https://via.placeholder.com/150',
		},
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container">
			<div className="header-section">
				<div className="first-section">
					<h2>
						We are the leading marine surveying & consultation in Sri Lanka
					</h2>
					<p>
						EARNDECK SHIPPING PVT LTD is a trusted and authorized provider of
						marine surveying and consultancy services, operating across all
						ports in Sri Lanka. We offer a wide range of services including hull
						damage claims surveys, draught and bunker surveys (BQS, ROB),
						on-hire/off-hire assessments, and insurance claims inspections for
						leading banks.
					</p>
					<p>
						Our expertise also extends to wall washing surveys, sample
						collection, crude oil gauging and sampling, container and reefer
						container damage surveys, as well as ISM, MLC, ISPS, and P&I
						Club-related auditing services. In addition, we provide ships
						husbandry, ship chandling, medical services, drug and alcohol
						testing, legal support, and customs clearing and forwarding.
					</p>
					<p>
						With our comprehensive solutions, EARNDECK SHIPPING PVT LTD ensures
						precision, reliability, and exceptional service in the maritime
						sector.
					</p>
				</div>
				<div className="second-section">
					<img src={ship} alt="ship" className="header-img" />
				</div>
			</div>
			<div className="content-section">
				<div className="vision">
					<h2>Our Vision</h2>
					<p>
						To be among the leading one-stop surveying, consulting service and
						related marine surveying solutions providing company in the world
					</p>
				</div>
				<div className="mission">
					<h2>Our Mission</h2>
					<p>
						At Earndeck Shipping, it is our mission to be a leading provider of
						progressive and exceptional service in the disciplines of Marine
						Surveying and Consultation while maintaining the highest standards
						of professionalism and environmentally friendly practices.
					</p>
					<p>
						Our strengths are based on strong personal integrity and respect for
						client's needs, with the ability to report in an accurate, thorough
						and timely fashion to facilitate speedy follow-ups to the clients'
						benefit. Our worldwide and diverse experience lends itself to a wide
						range of expertise in appreciation of the clients' needs, which may
						be translated into detailed technical reports to assist them in
						their decision-making.
					</p>
					<p>
						Our mission is to become a regionally effective marine based
						consulting and surveying company meeting the demands of local and
						global clients and to be most desired and reliable company in Sri
						Lanka to work with. Also, to contribute to safeguard life, property
						and environment by delivering timely and quality services.
					</p>
				</div>
			</div>
			<div className="team-section">
				<h2>Our Team</h2>
				<div className="team-member">
					<div className="member">
						<img src={owner} alt="Member 1" />
						<h3>G. Thusith Fonseka</h3>
						<h4>Deputy Principal Marine Surveyor / Managing Director</h4>
						<h4>Chief Operations Manager Coordinator</h4>
						<h4>Custom House Agent, ICS Ship Broker</h4>
					</div>
					<div className="member">
						<img src="https://via.placeholder.com/150" alt="Member 1" />
						<h3>Capt. Ajith U Fernando</h3>
						<h4>Principal Mariner Surveyor / Director</h4>
					</div>
					<div className="member">
						<img src="https://via.placeholder.com/150" alt="Member 1" />
						<h3>G. F. Dias</h3>
						<h4>Director / Marine Surveyor</h4>
					</div>
					<div className="member">
						<img src="https://via.placeholder.com/150" alt="Member 1" />
						<h3>Komuthu Fernando</h3>
						<h4>IT Specialist</h4>
					</div>
				</div>
			</div>
			<div className="values-section">
				<h2>Our Values as Marine Surveying & Consultation</h2>
				<div className="values-container">
					<div className="value">
						<img src="" alt="" className="icon" />
						<p>The Level of service excellence</p>
					</div>
					<div className="value">
						<img src="" alt="" className="icon" />
						<p>Commitment, Compassion, Accountability to each other</p>
					</div>
					<div className="value">
						<img src="" alt="" className="icon" />
						<p>Innovation and upgrading of procedures</p>
					</div>
					<div className="value">
						<img src="" alt="" className="icon" />
						<p>
							Equity, Professional integrity, up to date with modern
							developments
						</p>
					</div>
					<div className="value">
						<img src="" alt="" className="icon" />
						<p>Continually growing to provide a wide sphere of service</p>
					</div>
					<div className="value">
						<img src="" alt="" className="icon" />
						<p>Exemplary service is our purpose in the industry</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutusPage;
