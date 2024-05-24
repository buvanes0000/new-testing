// src/Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMobileAlt, faSearch, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const services = [
  {
    icon: faPalette,
    title: "Web Design",
    description: "Beautiful and functional web design services."
  },
  {
    icon: faMobileAlt,
    title: "Responsive Web",
    description: "Websites that look great on all devices."
  },
  {
    icon: faSearch,
    title: "SEO",
    description: "Optimize your site for search engines."
  },
  {
    icon: faBullhorn,
    title: "Social Media Marketing",
    description: "Boost your presence on social media."
  }
];

const Services = () => {
  return (
    <div className="services">
        <h2 style={{textAlign: 'center',color: '#fff',fontSize: '30px'}}>Our premium services</h2>
<div className="service-cards">  {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="icon-container">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}</div>
    
    </div>
  );
};

export default Services;
