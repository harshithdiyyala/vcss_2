import {useState} from 'react';
import CareersImage from "../../assets/images/contact/careers.jpg"
import './Careers.css'


const Careers = () => {
    return(
        <div className='about-card-container container mx-auto'>
            <h1
        className="service-page-title  region-title hero-title"
        style={{ textAlign: "left" }}>
Careers      </h1>
        
<div className="horizontal-card about-card">
        <p className="content-card-content">
        At V Connect Security Services, we believe that safety starts with dedicated professionals like you. Whether you’re looking to build a career in security, emergency response, or facility management, we offer a range of opportunities that make a real difference. From protecting businesses and events to responding to emergencies and ensuring clean, secure environments, our team is at the forefront of safety and service.
        Join a company that values your skills, invests in your growth, and provides a dynamic work environment with competitive pay, training, and career advancement. Be part of something bigger—protect, serve, and grow with us. Apply today!
        </p>
        <img
          src={CareersImage}
          alt="about_us"
          className="content-card-image"
        />
      </div>
      <div className='current-openings-container'>
        <h1 style = {{paddingBottom :'1.5rem'}}> Current Openings</h1>

        <p style = {{ fontSize:'20px'}}>No Active Positions</p>
      </div>
      </div>)
}

export default Careers
