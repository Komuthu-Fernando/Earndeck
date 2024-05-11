import '../css/Careers.css';
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
		<div className="content" >
			<h1 className="heading">
				Working at Earndeck Shipping
			</h1>
			<p className="paragraph">
				This is a sample text paragraph This is a sample text<br />
				paragraph This is a sample text paragraph This is a sample<br />
				text paragraph
			</p>
			<div className="card3">
				<Slider {...settings}>
					<div>
						<img src={image1} alt="Client 1" className="image" />
					</div>
					<div>
						<img src={image2} alt="Client 2" className="image" />
					</div>
					<div>
						<img src={image3} alt="Client 3" className="image" />
					</div>
				</Slider>
			</div>
			<p className="paragraph">
				This is a sample text paragraph This is a sample text<br />
				paragraph This is a sample text paragraph This is a sample<br />
				text paragraph
			</p>
			<h1 className="heading">Work with Earndeck Shipping?</h1>
			<p className="paragraph">
				Interested in working with us? Let us know your expectations and specific needs.<br />
				Reach out today, and let’s explore how we can collaborate effectively!
			</p>
			<div className="contactForm">
				<form>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" />
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" />
					<label htmlFor="phone">Phone Number:</label>
					<input type="tel" id="phone" name="phone" />
					<label htmlFor="inquiry">Upload your CV:</label>
					<input type="file" accept=".pdf,.doc,.docx" className="textarea" />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div >
	);
}

export default CareersPage;
