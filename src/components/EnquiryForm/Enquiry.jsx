import React, { useContext, useEffect, useState } from "react"
import * as emailjs from "emailjs-com"
import { servicesContent } from "../../content"
import { RegionContext } from "../../context/RegionContext"
import "./Enquiry.css"

const Enquiry = ({ category }) => {
  const { region } = useContext(RegionContext)
  const initialFormState = { name: "", email: "", phone: "", message: "", service: category }
  const [enquiryFormData, setEnquiryFormData] = useState(initialFormState)
  const imgLink = servicesContent[region].filter((item) => item.title === category)[0]?.imgLink
  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const handleFormData = (e) => {
    errorMsg && setErrorMsg("")
    successMsg && setSuccessMsg("")
    setEnquiryFormData({ ...enquiryFormData, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    return () => {
      setEnquiryFormData({ ...initialFormState })
      setErrorMsg("")
      setSuccessMsg("")
    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    if (!enquiryFormData.name || enquiryFormData.name.length < 3) {
      setErrorMsg("Please enter your name")
    } else if (!enquiryFormData.email) {
    }
    var template_params = {
      name: enquiryFormData.name,
      email: enquiryFormData.email,
      phone: enquiryFormData.phone,
      message: enquiryFormData.message,
      service: enquiryFormData.service,
    }

    let API_KEY = "UbJHPhLhejsepapye"
    let TEMPLATE_ID = "template_kuzjvon"
    try {
      const response = await emailjs.send("service_68lljnc", TEMPLATE_ID, template_params, API_KEY)

      if (response.status === 200) {
        setSuccessMsg("Your message has been sent successfully. We will contact you soon.")
      } else {
        setErrorMsg("Something went wrong. Please try again.")
      }
      setEnquiryFormData({ ...initialFormState })
    } catch (e) {
      setErrorMsg("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="container mx-auto">
      <div className="enquirypage-container contactpage-container">
        <form onSubmit={submitHandler} >
          <h1>Get Service at your Doorstep</h1>
          <p
            className="services-description"
            style={{ fontSize: "18px" }}>
            {" "}
            Please fill out the form below and we will get back to you as soon as possible.
          </p>
          <label htmlFor="service">Service</label>
          <input
            className="form-input"
            type="text"
            id="service"
            name="service"
            placeholder="Enter service"
            disabled="true"
            value={enquiryFormData.service}
            onChange={handleFormData}
          />
          <label htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
            value={enquiryFormData.name}
            onChange={handleFormData}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            name="email"
            required
            placeholder="Enter Email"
            value={enquiryFormData.email}
            onChange={handleFormData}
          />

          <label htmlFor="phone"> Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            required
            placeholder="Enter Tel.No"
            value={enquiryFormData.phone}
            onChange={handleFormData}
          />

          <label htmlFor="message"> Message </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message"
            value={enquiryFormData.message}
            required
            className="form-input message-textarea"
            onChange={handleFormData}></textarea>

          <input
            type="submit"
            className="contact-btn submit-btn"
            style={{ background: "#cba406", textAlign: "center" }}
          />
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
          {successMsg && <p>{successMsg}</p>}
        </form>
      
      </div>
    </div>
  )
}

export default Enquiry
