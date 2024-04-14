import homeStyles from '../css/HomePage.module.css';
import { useRef } from 'react';
import Card from '../components/Card';
import cardStyles from '../css/Card.module.css';

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

	return (
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
				<div>
					{/* <h2 className={homeStyles.heading2} >Our Serivces</h2> */}
					<div className={homeStyles.cards} ref={cardRef}>
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
					<div className={homeStyles.cards}>
						<Card content="Serivce 01" backgroundColor="#F0F0F0" />
						<Card content="Serivce 02" backgroundColor="#F0F0F0" />
						<Card content="Serivce 03" backgroundColor="#F0F0F0" />
						<Card content="Serivce 04" backgroundColor="#F0F0F0" />
					</div>
					<div className={homeStyles.cards}>
						<Card content="Serivce 01" backgroundColor="#F0F0F0" />
						<Card content="Serivce 02" backgroundColor="#F0F0F0" />
						<Card content="Serivce 03" backgroundColor="#F0F0F0" />
						<Card content="Serivce 04" backgroundColor="#F0F0F0" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
