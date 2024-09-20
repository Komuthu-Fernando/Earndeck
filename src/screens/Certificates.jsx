import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { client } from '../constraint/contentful';
import '../css/Certificate.css';

const CertificateSkeleton = () => (
  <div className="certificate">
    <Skeleton height={250} width={250} />
    <div className="certificate-text">
      <h4><Skeleton width={100} /></h4>
      <h4><Skeleton width={80} /></h4>
      <h4><Skeleton width={100} /></h4>
    </div>
  </div>
);

const CertificatePage = () => {
  const [certificates, setCertificates] = useState([]);
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [certResponse, licenseResponse] = await Promise.all([
          client.getEntries({ content_type: 'certificates' }),
          client.getEntries({ content_type: 'licenses' }),
        ]);
        setCertificates(certResponse.items);
        setLicenses(licenseResponse.items);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="certificate-container">
      <h2>Certifications & Licenses</h2>

      <h3>Certificates</h3>
      <div className="certificate-grid">
        {loading
          ? Array(3).fill().map((_, index) => <CertificateSkeleton key={index} />)
          : certificates.map((certificate, index) => (
              <div className="certificate" key={index}>
                <img
                  src={certificate.fields.image.fields.file.url}
                  alt={certificate.fields.title}
                />
                <div className="certificate-text">
                  <h4>{certificate.fields.title}</h4>
                  <h4>Date Earned</h4>
                  <h4>{certificate.fields.date}</h4>
                </div>
              </div>
            ))}
      </div>

      <h3>Licenses</h3>
      <div className="certificate-grid">
        {loading
          ? Array(3).fill().map((_, index) => <CertificateSkeleton key={index} />)
          : licenses.map((license, index) => (
              <div className="certificate" key={index}>
                <img
                  src={license.fields.image.fields.file.url}
                  alt={license.fields.title}
                />
                <div className="certificate-text">
                  <h4>{license.fields.title}</h4>
                  <h4>Date Earned</h4>
                  <h4>{license.fields.earnedDate}</h4>
                  <h4>Valid Till - {license.fields.expireDate}</h4>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CertificatePage;
