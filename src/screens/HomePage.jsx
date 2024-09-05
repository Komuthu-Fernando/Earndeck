import React, {useEffect} from 'react';

import '../css/HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



import LandingImage from '../assets/homeimg.png';


import service_icon from '../assets/facebook.png';

const HomePage = () => {
	// const settings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 3000,
	// };

	// const settings2 = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 3000,
	// };

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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								congue orci ac <br />
								diam dapibus, ut malesuada nisl aliquet. Fusce non odio vitae
								sapien eleifend
								<br />
								tristique vitae vel purus.Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
								<br />
								Nullam congue orci ac <br />
							</p>
							<button className="button">
								<span>Discover Now</span>
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
							<img src={service_icon} alt="" />
							<p>Bunker Surveys</p>
							<button>Read more</button>
						</div>
						<div className="service-card-home">
							<img src={service_icon} alt="" />
							<p>Bunker Surveys</p>
							<button>Read more</button>
						</div>
						<div className="service-card-home">
							<img src={service_icon} alt="" />
							<p>Bunker Surveys</p>
							<button>Read more</button>
						</div>
						<div className="service-card-home">
							<img src={service_icon} alt="" />
							<p>Bunker Surveys</p>
							<button>Read more</button>
						</div>
						<div className="service-card-home">
							<img src={service_icon} alt="" />
							<p>Bunker Surveys</p>
							<button>Read more</button>
						</div>
						<div className="service-card-home">
							<img src={service_icon} alt="" />
							<p>Bunker Surveys</p>
							<button>Read more</button>
						</div>
						<div className="service-card-home">
							<img src={service_icon} alt="" />
							<p>Bunker Surveys</p>
							<button>Read more</button>
						</div>
						<div className="service-card-home">
							<img src={service_icon} alt="" />
							<p>Bunker Surveys</p>
							<button>Read more</button>
						</div>
					</div>
				</div>

				{/* Partners Section */}
				{/* <div className="partners">
					<h2>OUR CLIENTS</h2>
					<div className="slider-div">
						<center>
							<Slider {...settings}>
								<div className="partner-logo">
									<img src={partner1} alt="Partner 1" />
								</div>
								<div className="partner-logo">
									<img src={partner1} alt="Partner 2" />
								</div>
								<div className="partner-logo">
									<img src={partner1} alt="Partner 2" />
								</div>
								<div className="partner-logo">
									<img src={partner1} alt="Partner 2" />
								</div>
							</Slider>
						</center>
					</div>
				</div> */}

				{/* Testimonials Section
				<div className="testimonial-section">
					<h1>Testimonials</h1>
					<h2 >What clients say</h2>
					<TestimonialSlider />
				</div> */}

				{/* <div className="testimonial-section">
					<h2>OUR CLIENTS</h2>
					<div className="slider-div">
						<center>
							<Slider {...settings2}>
								<div className="testimonial-card">
									<div className="testimonial-top">
										<h3 className="testimonial-name">Hirusha</h3>
										<div
											className="testimonial-image"
											style={{ backgroundImage: `url(${partner1})` }}
										></div>
									</div>
									<div className="testimonial-description">dvdfvvdfvvvfv</div>
								</div>
								<div className="testimonial-card">
									<div className="testimonial-top">
										<h3 className="testimonial-name">teddy</h3>
										<div
											className="testimonial-image"
											style={{ backgroundImage: `url(${partner1})` }}
										></div>
									</div>
									<div className="testimonial-description">dvdfvvdfvvvfv</div>
								</div>
							</Slider>
						</center>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default HomePage;
