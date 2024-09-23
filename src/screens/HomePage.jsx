import React, { useState, useEffect } from 'react';
import '../css/HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import service_icon1 from '../assets/icon1.webp';
import service_icon2 from '../assets/icon2.webp';
import service_icon3 from '../assets/icon3.webp';
import service_icon4 from '../assets/icon4.webp';
import service_icon5 from '../assets/icon5.webp';
import service_icon6 from '../assets/icon6.webp';

const HomePage = () => {
	const [imageLoaded, setImageLoaded] = useState(false);

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
								all your maritime needs.
							</p>
							<a href="/services">
								<button className="button">
									<span>Discover Now</span>
								</button>
							</a>
						</div>
						<div className="landing-image">
							{/* Conditionally show Skeleton or image */}
							{!imageLoaded && <Skeleton height={400} width="100%" />}
							<img
								src="https://res.cloudinary.com/dapi7sixh/image/upload/v1726655643/rhqyxb9mg9vr1bl7mmgp.webp"
								alt="landingimg"
								onLoad={() => setImageLoaded(true)}
								style={{ display: imageLoaded ? 'block' : 'none' }}
							/>
						</div>
					</div>
				</div>

				{/* Services Section */}
				<div className="services-section">
					<h2>OUR SERVICES</h2>
					<div className="service-cards-home">
						<div className="service-card-home">
							<img src={service_icon1} alt="" loading="lazy" />
							<p>Bunker Surveys</p>
						</div>
						<div className="service-card-home">
							<img src={service_icon2} alt="" loading="lazy" />
							<p>Draft Survey</p>
						</div>
						<div className="service-card-home">
							<img src={service_icon3} alt="" loading="lazy" />
							<p>
								Off Hire / On Hire <br /> Condition Survey
							</p>
						</div>
						<div className="service-card-home">
							<img src={service_icon4} alt="" loading="lazy" />
							<p>Cargo surveys</p>
						</div>
						<div className="service-card-home">
							<img src={service_icon5} alt="" loading="lazy" />
							<p>Internal ISM Audits on Board</p>
						</div>
						<div className="service-card-home">
							<img src={service_icon6} alt="" loading="lazy" />
							<p>Container Inspections / Reefer Inspections</p>
						</div>
						<div className="service-card-home">
							<img src={service_icon4} alt="" loading="lazy" />
							<p>Hull and Machinery inspections</p>
						</div>
						<div className="service-card-home">
							<img src={service_icon5} alt="" loading="lazy" />
							<p>
								Harmonised <br />
								Internal Audits
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
