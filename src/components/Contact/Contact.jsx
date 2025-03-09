import React from "react"
import "./Contact.css"
import { useNavigate } from "react-router-dom"

const Contact = () => {
  const navigate = useNavigate()
  return (
    <section id="contact">
      <div className="container mx-auto">
        <div className="contact-banner-container">
          <h3 className="services-title">Connect with V Connect Security Services</h3>
          <p className="services-description">We’re here to ensure your safety. Get in touch with us today!</p>
          <button
            className="contact-btn"
            onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
