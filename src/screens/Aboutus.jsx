import React, {useEffect} from 'react';
import '../css/Aboutus.css';
import owner from '../assets/owner-image.jpg';
import ship from '../assets/homeimg.png';

const AboutusPage = () => {
	const teamMembers = [
		{ name: "John Doe", position: "Software Engineer", photo: "https://via.placeholder.com/150" },
		{ name: "Jane Smith", position: "Product Manager", photo: "https://via.placeholder.com/150" },
		{ name: "Mike Johnson", position: "Designer", photo: "https://via.placeholder.com/150" },
		{ name: "Emily Davis", position: "Marketing Specialist", photo: "https://via.placeholder.com/150" },
		{ name: "Chris Brown", position: "Data Scientist", photo: "https://via.placeholder.com/150" },
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
						Our company is a leading marine surveying and consultation company
						in Sri Lanka. We have a team of
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
						At Earndeck shipping, it is our mission to be a leading provider of
						progressive and exceptional service in the disciplines of Marine
						Surveying and Consultation while maintaining the highest standards
						of professionalism and environmentally responsible practices.
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
					<p>
						All our surveyors are ex Master Mariners and Chief Engineers and
						with their wealth of experience they can provide case-by-case
						solutions dealing with technical issues in line with or on top of
						the market regulatory framework.
					</p>
					<p>
						The company and the surveyors are registered with the Ceylon Chamber
						of Commerce.
					</p>
				</div>
			</div>
			<div className="team-section">
				<h2>Our Team</h2>
				<div className="team-member">
					<div className="member">
						<img src={owner} alt="Member 1" />
						<h3>Thusith Fonseka</h3>
						<h4>Managing Director</h4>
					</div>
					<div className="member">
						<img src="https://via.placeholder.com/150" alt="Member 1" />
						<h3>Ajith Fernando</h3>
						<h4>Director</h4>
					</div>
					<div className="member">
						<img src="https://via.placeholder.com/150" alt="Member 1" />
						<h3>G F Dias</h3>
						<h4>Director</h4>
					</div>
					<div className="member">
						<img src={owner} alt="Member 1" />
						<h3>Janaka Sri Warnasingha</h3>
						<h4>Position 1</h4>
					</div>
					<div className="member">
						<img src="https://via.placeholder.com/150" alt="Member 1" />
						<h3>Komuthu Fernando</h3>
						<h4>IT Specialist</h4>
					</div>
				</div>
			</div>
			<div className='values-section'>
				<h2>Our Values as Marine Surveying & Consultation</h2>
				<div className='values-container'>
					<div className='value'>
						<img src="" alt="" className='icon'/>
						<p>
						Customer satisfaction is the reason for our existence
						</p>
					</div>
					<div className='value'>
						<img src="" alt="" className='icon'/>
						<p>
						Customer satisfaction is the reason for our existence
						</p>
					</div>
					<div className='value'>
						<img src="" alt="" className='icon'/>
						<p>
						Customer satisfaction is the reason for our existence
						</p>
					</div>
					<div className='value'>
						<img src="" alt="" className='icon'/>
						<p>
						Customer satisfaction is the reason for our existence
						</p>
					</div>
					<div className='value'>
						<img src="" alt="" className='icon'/>
						<p>
						Customer satisfaction is the reason for our existence
						</p>
					</div>
					<div className='value'>
						<img src="" alt="" className='icon'/>
						<p>
						Customer satisfaction is the reason for our existence
						</p>
					</div>
				</div>

			</div>
		</div>
	);
};

export default AboutusPage;
