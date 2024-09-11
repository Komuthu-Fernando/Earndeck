import React, { useEffect, useState } from 'react';
import { client } from '../constraint/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '../css/Certificate.css';
import c1 from '../assets/1.jpg';

const CertificatePage = () => {
	const [certificates, setCertificates] = useState([]);
	const [licenses, setLicenses] = useState([]);

	useEffect(() => {
		const fetchCertificates = async () => {
			try {
				const response = await client.getEntries({
					content_type: 'certificates',
				});
				setCertificates(response.items);
			} catch (error) {
				console.error('Error fetching certificates from Contentful:', error);
			}
		};

		const fetchLicenses = async () => {
			try {
				const response = await client.getEntries({
					content_type: 'licenses',
				});
				setLicenses(response.items);
			} catch (error) {
				console.error('Error fetching licenses from Contentful:', error);
			}
		};

		fetchCertificates();
		fetchLicenses();
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="certificate-container">
			<h2>Certifications & Licenses</h2>
			<h3>Certificates</h3>
			<div className="certificate-grid">
				{certificates.map((certificate, index) => (
					<div className="certificate" key={index}>
						<img
							src={certificate.fields.image.fields.file.url} 
							alt={certificate.fields.title}
						/>
						<div className="certificate-text">
							<h4>{certificate.fields.title}</h4>
							<h4>Date Earned</h4>
							<h4>{certificate.fields.date}</h4>{' '}

						</div>
					</div>
				))}
			</div>
			<h3>Licenses</h3>
			<div className="certificate-grid">
				{licenses.map((license, index) => (
					<div className="certificate" key={index}>
						<img
							src={license.fields.image.fields.file.url} 
							alt={license.fields.title}
						/>
						<div className="certificate-text">
							<h4>{license.fields.title}</h4>
							<h4>Date Earned</h4>
							<h4>{license.fields.earnedDate}</h4>{' '}
							<h4>Valid Till - {license.fields.expireDate}</h4>{' '}

						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CertificatePage;
