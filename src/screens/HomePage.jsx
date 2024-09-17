import React, { useEffect } from 'react';

import '../css/HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LandingImage from '../assets/homeimg.webp';

import service_icon1 from '../assets/icon1.webp';
import service_icon2 from '../assets/icon2.webp';
import service_icon3 from '../assets/icon3.webp';
import service_icon4 from '../assets/icon4.webp';
import service_icon5 from '../assets/icon5.webp';
import service_icon6 from '../assets/icon6.webp';
// import service_icon7 from '../assets/icon7.png';
// import service_icon8 from '../assets/icon8.png';

const HomePage = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<div className="home">
				{/* Landing Section */}
				<div className="landing">
					<div className="landing-container">
						<div className="landing-text">
							<h1 className="landing-title">
								Your One Stop <br /> Surveying Solutions
							</h1>
							<p className="landing-paragraph">
								We are your global partner for marine surveying and consulting.
								Our seasoned ex-captains and engineers bring a wealth of
								experience to every project. Let us be your trusted advisor for
								all your maritime needs
							</p>
							<button className="button">
								<span><a href="/services">Discover Now</a></span>
							</button>
						</div>
						<div className="landing-image">
							<img src={LandingImage} alt="landingimg" />
						</div>
					</div>
				</div>

				{/* Services Section */}
				<div className="services-section">
					<h2>OUR SERVICES</h2>
					<div className="service-cards-home">
						<div className="service-card-home">
							<img src={service_icon1} alt="" />
							<p>Bunker Surveys</p>
							<button> <a href="/services">Read more</a></button>
						</div>
						<div className="service-card-home">
							<img src={service_icon1} alt="" />
							<p>Draft Survey</p>
							<button> <a href="/services">Read more</a></button>
						</div>
						<div className="service-card-home">
							<img src={service_icon1} alt="" />
							<p>Off Hire / On Hire Condition Survey
							</p>
							<button> <a href="/services">Read more</a></button>
						</div>
						<div className="service-card-home">
							<img src={service_icon3} alt="" />
							<p>Cargo surveys</p>
							<button> <a href="/services">Read more</a></button>
						</div>
						<div className="service-card-home">
							<img src={service_icon6} alt="" />
							<p>Internal ISM Audits on Board</p>
							<button> <a href="/services">Read more</a></button>
						</div>
						<div className="service-card-home">
							<img src={service_icon2} alt="" />
							<p>Container Inspections / Reefer Inspections</p>
							<button> <a href="/services">Read more</a></button>
						</div>
						<div className="service-card-home">
							<img src={service_icon4} alt="" />
							<p>Hull and Machinery inspections</p>
							<button> <a href="/services">Read more</a></button>
						</div>
						<div className="service-card-home">
							<img src={service_icon5} alt="" />
							<p>Harmonised Internal Audits</p>
							<button> <a href="/services">Read more</a></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
