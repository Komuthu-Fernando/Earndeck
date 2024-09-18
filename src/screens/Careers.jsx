import React, { useEffect, useState, useRef } from 'react';
import '../css/Careers.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import image1 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/cnixdfiy8qtkyti2afhd.webp';
// import image2 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/gunidichh0layjux8lxg.webp';
// import image3 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/vklye5gdcdr7tqzrrgfq.webp';
// import image4 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/ghiesqplkvlejyka3s8p.webp';
// import image5 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656182/ednjg7ondletrytmzrgx.webp';
// import image6 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/rywtowwyg5uxnordm8y4.webp';
// import image7 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/lbi5ej3e8jdwm3atf2gx.webp';
// import image8 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656184/wcqrkkxxn8pkmouhk3xm.webp';
// import image9 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656184/v5pboeksz33zltv4yhkd.webp';
// import image10 from 'https://res.cloudinary.com/dapi7sixh/image/upload/v1726656184/o5k4vi6qfuebks9h7g9x.webp';
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
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/cnixdfiy8qtkyti2afhd.webp' alt="Client 1" className="image" loading='lazy'/>
					</div>
					<div>
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/gunidichh0layjux8lxg.webp' alt="Client 2" className="image" loading='lazy'/>
					</div>
					<div>
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/vklye5gdcdr7tqzrrgfq.webp' alt="Client 3" className="image" loading='lazy'/>
					</div>
					<div>
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/ghiesqplkvlejyka3s8p.webp' alt="Client 3" className="image" loading='lazy'/>
					</div>
					<div>
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656182/ednjg7ondletrytmzrgx.webp' alt="Client 3" className="image" loading='lazy'/>
					</div>
					<div>
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/rywtowwyg5uxnordm8y4.webp' alt="Client 1" className="image" loading='lazy'/>
					</div>
					<div>
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656183/lbi5ej3e8jdwm3atf2gx.webp' alt="Client 2" className="image" loading='lazy'/>
					</div>
					<div>
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656184/wcqrkkxxn8pkmouhk3xm.webp' alt="Client 3" className="image" loading='lazy'/>
					</div>
					<div>
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656184/v5pboeksz33zltv4yhkd.webp' alt="Client 3" className="image" loading='lazy'/>
					</div>
					<div>
						<img src='https://res.cloudinary.com/dapi7sixh/image/upload/v1726656184/o5k4vi6qfuebks9h7g9x.webp' alt="Client 3" className="image" loading='lazy'/>
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
						<input type="text" id="name" name="name"  required="true"/>
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" required="true"/>
						<label htmlFor="phone">Phone Number:</label>
						<input type="tel" id="phone" name="phone" required="true"/>
						<label htmlFor="inquiry">Upload your CV:</label>
						<input
							type="file"
							accept=".pdf,.doc,.docx"
							className="textarea"
							onChange={handleFileChange}
							required="true"
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
