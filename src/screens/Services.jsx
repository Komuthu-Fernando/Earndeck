import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { client } from '../constraint/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '../css/ServicesPage.css';

const ServiceCard = React.memo(({ service, index }) => (
  <div>
    <div className={`service-card ${index % 2 === 0 ? 'left-card' : 'right-card'}`}>
      {index % 2 === 0 ? (
        <>
          <img
            src={service.fields.image.fields.file.url}
            alt={service.fields.title}
            className="service-image"
            loading="lazy"
          />
          <div className="service-text">
            <h3>{service.fields.title}</h3>
            <p>{documentToReactComponents(service.fields.description)}</p>
          </div>
        </>
      ) : (
        <>
          <div className="service-text">
            <h3>{service.fields.title}</h3>
            <p>{documentToReactComponents(service.fields.description)}</p>
          </div>
          <img
            src={service.fields.image.fields.file.url}
            alt={service.fields.title}
            className="service-image"
            loading="lazy"
          />
        </>
      )}
    </div>
  </div>
));

const ServiceCardSkeleton = ({ index }) => (
  <div>
    <div className={`service-card ${index % 2 === 0 ? 'left-card' : 'right-card'}`}>
      {index % 2 === 0 ? (
        <>
        <SkeletonTheme baseColor="#f2f2f2" highlightColor="#cccccc">
          <Skeleton height={250} width={150} className="service-image" />
          <div className="service-text">
            <h3><Skeleton width={100} /></h3>
            <p><Skeleton width={200} count={5} /></p>
          </div>
          </SkeletonTheme>
        </>
      ) : (
        <>
          <div className="service-text">
            <h3><Skeleton width={100} /></h3>
            <p><Skeleton count={5} /></p>
          </div>
          <Skeleton height={250} width={150} className="service-image" />
        </>
      )}
    </div>
  </div>
);

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'service',
        });
        setServices(response.items);
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
    <div className="service">
      <h2>Our Services</h2>
      <div className="service-container">
        {loading
          ? Array(3).fill().map((_, index) => <ServiceCardSkeleton key={index} index={index} />)
          : services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
      </div>
    </div>
  );
};

export default ServicesPage;
