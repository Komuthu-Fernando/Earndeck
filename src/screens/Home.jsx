import homeStyles from '../css/HomePage.module.css';
import { useRef } from 'react';
import Card from '../components/Card';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../assets/image.png';
import { FaQuoteRight } from 'react-icons/fa';

function HomePage() {
	const cardRef = useRef(null);

	const handleButtonClick = () => {
		if (cardRef.current) {
			const cardPosition =
				cardRef.current.getBoundingClientRect().top + window.pageYOffset;
			window.scrollTo({
				top: cardPosition,
				behavior: 'smooth',
			});
		}
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5, // Number of slides to show at once
		slidesToScroll: 1, // Number of slides to scroll at a time
		autoplay: true, // Enable auto sliding
		autoplaySpeed: 2000, // Slide change interval in milliseconds
	};

	const settings2 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true, // Enable auto sliding
		autoplaySpeed: 2000, // Slide change interval in milliseconds
	};

	return (
		<div>
			<div className={homeStyles.background}>
				<div className={homeStyles.content}>
					<h1 className={homeStyles.heading}>
						Your One Stop
						<br /> Surveying Solutions
					</h1>
					<p className={homeStyles.paragraph}>
						This is a sample text paragraph This is a sample text <br /> paragraph
						This is a sample text paragraph This is a sample
						<br /> text paragraph
					</p>
					<button className={homeStyles.button} onClick={handleButtonClick}>
						Discover Now
					</button>
				</div>
			</div>
			<h1 className={homeStyles.heading2} ref={cardRef}>
				Our Serivces
			</h1>
			<div className={homeStyles.content2}>
				<div className={homeStyles.cards}>
					<Card content="Serivce 01" backgroundColor="#F0F0F0" />
					<Card content="Serivce 02" backgroundColor="#F0F0F0" />
					<Card content="Serivce 03" backgroundColor="#F0F0F0" />
					<Card content="Serivce 04" backgroundColor="#F0F0F0" />
				</div>
				<div className={homeStyles.cards2}>
					<Card content="Serivce 05" backgroundColor="#F0F0F0" />
					<Card content="Serivce 06" backgroundColor="#F0F0F0" />
					<Card content="Serivce 07" backgroundColor="#F0F0F0" />
					<Card content="Serivce 08" backgroundColor="#F0F0F0" />
				</div>
			</div>
			<div className={homeStyles.content3}>
				<div className={homeStyles.card3}>
					<h2 className={homeStyles.heading2}>Our Clients</h2>
					<Slider {...settings}>
						<div>
							<img src={logo} alt="Client 1" className={homeStyles.logo} />
						</div>
						<div>
							<img src={logo} alt="Client 2" className={homeStyles.logo} />
						</div>
						<div>
							<img src={logo} alt="Client 3" className={homeStyles.logo} />
						</div>
						<div>
							<img src={logo} alt="Client 4" className={homeStyles.logo} />
						</div>
						<div>
							<img src={logo} alt="Client 5" className={homeStyles.logo} />
						</div>
						<div>
							<img src={logo} alt="Client 6" className={homeStyles.logo} />
						</div>
					</Slider>
				</div>
			</div><br />
			<div className={homeStyles.content4}>
				<div className={homeStyles.card5}>
					<p className={homeStyles.test}>Testimonials</p>
					<h2 className={homeStyles.heading2}>What clients say</h2>
					<Slider {...settings2}>
						{/* First Card */}
						<div className={homeStyles.card4}>
							<div className={homeStyles.imageContainer}>
								<img src={logo} alt="Testimonial 01" className={homeStyles.circleImage} />
							</div><br />
							<h3 className={homeStyles.title}>Testimonials 01</h3>
							<p className={homeStyles.text}>Captian</p><br />
							<FaQuoteRight className={homeStyles.black} />
							<p className={homeStyles.black}>
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
							</p>
						</div>

						{/* Second Card */}
						<div className={homeStyles.card4}>
							<div className={homeStyles.imageContainer}>
								<img src={logo} alt="Testimonial 02" className={homeStyles.circleImage} />
							</div><br />
							<h3 className={homeStyles.title}>Testimonials 02</h3>
							<p className={homeStyles.text}>Captian</p><br />
							<FaQuoteRight className={homeStyles.black} />
							<p className={homeStyles.black}>
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
							</p>
						</div>

						{/* Third Card */}
						<div className={homeStyles.card4}>
							<div className={homeStyles.imageContainer}>
								<img src={logo} alt="Testimonial 03" className={homeStyles.circleImage} />
							</div><br />
							<h3 className={homeStyles.title}>Testimonials 03</h3>
							<p className={homeStyles.text}>Captian</p><br />
							<FaQuoteRight className={homeStyles.black} />
							<p className={homeStyles.black}>
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
							</p>
						</div>

						{/* forth Card */}
						<div className={homeStyles.card4}>
							<div className={homeStyles.imageContainer}>
								<img src={logo} alt="Testimonial 04" className={homeStyles.circleImage} />
							</div><br />
							<h3 className={homeStyles.title}>Testimonials 04</h3>
							<p className={homeStyles.text}>Captian</p><br />
							<FaQuoteRight className={homeStyles.black} />
							<p className={homeStyles.black}>
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
								This is a sample text paragraph<br />
							</p>
						</div>
					</Slider>
				</div>
			</div >
		</div >
	);
}

export default HomePage;
