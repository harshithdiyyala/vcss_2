import React, { useContext, useState } from "react"
import ContactUs from "../../assets/images/contact/contact_2.jpeg"
import "./Contact.css"
import { RegionContext } from "../../context/RegionContext"
import { socialContactLinks } from "../../content"
import Location from "../Location/Location"

const ContactPage = () => {
  const { region } = useContext(RegionContext)
  const [contactFormData, setContactFormData] = useState({ name: "", email: "", phone: "", message: "" })

  const handleFormData = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value })
  }
  return (
    <div
      className="container mx-auto contactpage"
      style={{ marginTop: "5rem" }}>
      <h1 className="contact-us-message-heading"> Drop Us a Message!</h1>
      <p className="card-description">Feel free to contact us for any query, feedback or suggestion. We will be happy to assist you as soon as possible.</p>
      <div className="contactpage-icon-container">
        {region !== "Global"
          ? socialContactLinks[`${region}`].map((social) => {
              return (
                <a
                  href={social.link}
                  key={social.name}
                  className="contactpage-icon-container"
                  target="_blank"
                  rel="noopener noreferrer">
                  {social.icon}
                  <span className="capitalize"> {social.name}</span>
                </a>
              )
            })
          : null}
      </div>
      <div className="contactpage-container">
        <form>
          <label htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={contactFormData.name}
            onChange={handleFormData}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            name="email"
            placeholder="Enter Email"
            value={contactFormData.email}
            onChange={handleFormData}
          />

          <label htmlFor="phone"> Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="Enter Tel.No"
            value={contactFormData.phone}
            onChange={handleFormData}
          />

          <label htmlFor="message"> Message </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message"
            value={contactFormData.message}
            className="form-input message-textarea"
            onChange={handleFormData}></textarea>

          <input
            type="submit"
            value={"Send Message"}
            className="contact-btn submit-btn"
            style={{ background: "#cba406", textAlign: "center" }}
          />
        </form>
        <div className="contactpage-banner-img">
          <img
            src={ContactUs}
            alt="contact_us"
          />
        </div>
      </div>
      <Location />
    </div>
  )
}

export default ContactPage
