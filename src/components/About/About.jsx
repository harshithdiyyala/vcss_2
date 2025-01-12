import React from "react"
import AboutUs from "../../assets/images/contact/about.jpg"
import "./About.css"
import Location from "../Location/Location"

const About = () => {
  return (
    <div className="about-card-container container mx-auto">
      <h1
        className="service-page-title  region-title hero-title"
        style={{ textAlign: "left" }}>
        About Us
      </h1>
      <p className="services-description about-us-tagline"> VCSS - V Connect Security Services</p>
      <div className="horizontal-card about-card">
        <p className="content-card-content">
          At VCSS, we are a leading security services company dedicated to providing top-notch protection and peace of mind. With our team of highly trained professionals, cutting-edge technology, and customized solutions, we strive to exceed our clients' expectations by delivering comprehensive security services for construction sites, events,
          executives, residential and commercial properties, as well as offering risk assessment, alarm response, and facility management. Our unwavering commitment to excellence and our focus on ensuring safety and security make us the trusted choice for all your security needs.
        </p>
        <img
          src={AboutUs}
          alt="about_us"
          className="content-card-image"
        />
      </div>
      <Location />
    </div>
  )
}

export default About
