import Styles from '../css/Careers.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/careers1.png';
import image2 from '../assets/careers2.png'
import image3 from '../assets/careers3.png'
import Slider from 'react-slick';

function CareersPage() {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3, // Number of slides to show at once
		slidesToScroll: 1, // Number of slides to scroll at a time
		autoplay: true, // Enable auto sliding
		autoplaySpeed: 2000, // Slide change interval in milliseconds
	};

	return (
		<div className={Styles.content} >
			<h1 className={Styles.heading}>
				Working at Earndeck Shipping
			</h1>
			<p className={Styles.paragraph}>
				This is a sample text paragraph This is a sample text<br />
				paragraph This is a sample text paragraph This is a sample<br />
				text paragraph
			</p>
			<div className={Styles.card3}>
				<Slider {...settings}>
					<div>
						<img src={image1} alt="Client 1" className={Styles.image} />
					</div>
					<div>
						<img src={image2} alt="Client 2" className={Styles.image} />
					</div>
					<div>
						<img src={image3} alt="Client 3" className={Styles.image} />
					</div>
				</Slider>
			</div>
			<p className={Styles.paragraph}>
				This is a sample text paragraph This is a sample text<br />
				paragraph This is a sample text paragraph This is a sample<br />
				text paragraph
			</p>
		</div >
	);
}

export default CareersPage;
