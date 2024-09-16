import React, { useEffect, useState, useRef } from 'react';
import '../css/Careers.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/1.webp';
import image2 from '../assets/2.webp';
import image3 from '../assets/3.webp';
import image4 from '../assets/4.webp';
import image5 from '../assets/5.webp';
import image6 from '../assets/6.webp';
import image7 from '../assets/7.webp';
import image8 from '../assets/8.webp';
import image9 from '../assets/9.webp';
import image10 from '../assets/10.webp';
import Slider from 'react-slick';
import emailjs from 'emailjs-com';
import { storage } from '../constraint/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function CareersPage() {
	const [file, setFile] = useState(null);
	const [uploadProgress, setUploadProgress] = useState(0);
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const formRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!file) {
			alert('Please upload a file first!');
			return;
		}

		const storageRef = ref(storage, `cvs/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setUploadProgress(progress);
				console.log(`Upload is ${progress}% done`);
			},
			(error) => {
				console.error('File upload error:', error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log('File available at', downloadURL);

					emailjs
						.send(
							'service_vgisrpk',
							'template_0xptggb',
							{
								name: e.target.name.value,
								email: e.target.email.value,
								phone: e.target.phone.value,
								cv_link: downloadURL,
							},
							'szCkEAWZ0v89zbRC1'
						)
						.then((result) => {
							console.log('Email successfully sent!', result.text);
							setShowSuccessModal(true);

							formRef.current.reset();
							setFile(null);
							setUploadProgress(0);
						})
						.catch((error) => {
							console.error('Email sending error:', error);
						});
				});
			}
		);
	};

	return (
		<div className="content">
			<h1 className="heading">Working at Earndeck Shipping</h1>
			<p className="paragraph">
				A Marine Surveyor is a professional who assesses the condition of ships
				and cargo , as well as other maritime structures, to ensure compliance
				with safety standards and regulations. They conduct inspections, perform
				tests, and provide desired reports to stakeholders. The above is the
				description of the existing career lies ahead if you decides pursue a
				career in Marine Surveying
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
					<div>
						<img src={image4} alt="Client 3" className="image" />
					</div>
					<div>
						<img src={image5} alt="Client 3" className="image" />
					</div>
					<div>
						<img src={image6} alt="Client 1" className="image" />
					</div>
					<div>
						<img src={image7} alt="Client 2" className="image" />
					</div>
					<div>
						<img src={image8} alt="Client 3" className="image" />
					</div>
					<div>
						<img src={image9} alt="Client 3" className="image" />
					</div>
					<div>
						<img src={image10} alt="Client 3" className="image" />
					</div>
				</Slider>
			</div>
			<div className="contentForm">
				<h1 className="heading">Work with Earndeck Shipping?</h1>
				<p className="paragraph">
					Interested in working with us? Let us know your expectations and
					specific needs.
					<br />
					Reach out today, and let's explore how we can collaborate effectively!
				</p>
				<div className="contactFormCareers">
					<form ref={formRef} onSubmit={handleSubmit}>
						<label htmlFor="name">Name:</label>
						<input type="text" id="name" name="name" />
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" />
						<label htmlFor="phone">Phone Number:</label>
						<input type="tel" id="phone" name="phone" />
						<label htmlFor="inquiry">Upload your CV:</label>
						<input
							type="file"
							accept=".pdf,.doc,.docx"
							className="textarea"
							onChange={handleFileChange}
						/>
						<button type="submit">Submit</button>
						{uploadProgress > 0 && (
							<div className="progress-bar">
								<div
									className="progress-bar-fill"
									style={{ width: `${uploadProgress}%` }}
								></div>
							</div>
						)}
					</form>
				</div>
			</div>

			{/* Success Modal */}
			{showSuccessModal && (
				<div className="modal-overlay">
					<div className="modal-content">
						<h2>Success!</h2>
						<p>
							Your CV has been successfully uploaded and your form has been
							submitted.
						</p>
						<button onClick={() => setShowSuccessModal(false)}>Close</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default CareersPage;
