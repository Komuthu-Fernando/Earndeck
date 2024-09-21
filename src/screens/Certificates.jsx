import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { client } from '../constraint/contentful';
import '../css/Certificate.css';

const CertificateSkeleton = () => (
  <div className="certificate">
    <SkeletonTheme baseColor="#f2f2f2" highlightColor="#cccccc">
      <Skeleton height={150} width={250} />
      <div className="certificate-text">
        <h4><Skeleton width={150} /></h4>
        <h4><Skeleton width={100} /></h4>
        <h4><Skeleton width={100} /></h4>
      </div>
    </SkeletonTheme>
  </div>
);

const CertificateItem = ({ certificate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="certificate">
      {!imageLoaded && (
        <SkeletonTheme baseColor="#f2f2f2" highlightColor="#cccccc">
          <Skeleton height={150} width={250} />
        </SkeletonTheme>
      )}

      <img
        src={certificate.fields.image.fields.file.url}
        alt={certificate.fields.title}
        style={{ display: imageLoaded ? 'block' : 'none' }} 
        onLoad={() => setImageLoaded(true)} 
      />

      <div className="certificate-text">
        <h4>{certificate.fields.title}</h4>
        <h4>Date Earned</h4>
        <h4>{certificate.fields.date}</h4>
      </div>
    </div>
  );
};

const CertificatePage = () => {
  const [certificates, setCertificates] = useState([]);
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [certificateCount, setCertificateCount] = useState(0);
  const [licenseCount, setLicenseCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [certResponse, licenseResponse] = await Promise.all([
          client.getEntries({ content_type: 'certificates' }),
          client.getEntries({ content_type: 'licenses' }),
        ]);

        setCertificates(certResponse.items);
        setLicenses(licenseResponse.items);

        setCertificateCount(certResponse.items.length);
        setLicenseCount(licenseResponse.items.length);
        
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
          ? Array(certificateCount || 3).fill().map((_, index) => <CertificateSkeleton key={index} />)
          : certificates.map((certificate, index) => (
              <CertificateItem key={index} certificate={certificate} />
            ))}
      </div>

      <h3>Licenses</h3>
      <div className="certificate-grid">
        {loading
          ? Array(licenseCount || 3).fill().map((_, index) => <CertificateSkeleton key={index} />)
          : licenses.map((license, index) => (
              <div className="certificate" key={index}>
                <img
                  src={license.fields.image.fields.file.url}
                  alt={license.fields.title}
                  style={{ display: 'block' }} 
                />
                <div className="certificate-text">
                  <h4>{license.fields.title}</h4>
                  <h4>Date Earned</h4>
                  <h4>{license.fields.earnedDate}</h4>
                  {/* <h4>Valid Till - {license.fields.expireDate}</h4> */}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CertificatePage;
