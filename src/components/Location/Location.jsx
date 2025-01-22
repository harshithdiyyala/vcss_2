import React, { useContext } from "react"
import { footerContent } from "../../content"
import { FiMail } from "react-icons/fi"
import { FaPhoneAlt } from "react-icons/fa"
import "./Location.css"
import { RegionContext } from "../../context/RegionContext"

const Location = () => {
  const { region } = useContext(RegionContext)
  return (
    <>
      <h1>Our Locations</h1>
      <div className=" services-container  location-card-container container mx-auto">
        {(region === "Global" || region === "UK") && (
          <div className="card">
            {/* <div className="map-container"> */}
            <iframe
              title="UK Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.7621919203734!2d-0.2424004235143324!3d51.75567197187075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763c62e0ac0969%3A0x9659b62a388c92e1!2s18%20Fern%20Dells%2C%20Hatfield%20AL10%209HX%2C%20UK!5e0!3m2!1sen!2sin!4v1736684170340!5m2!1sen!2sin"
              style={{ border: "0px" }}
              className="card-image"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* </div> */}
            <div className="card-content">
              {/* <p>{footerContent.UK?.additionalData}</p> */}
              <p>{footerContent.UK?.addressLine1}</p>
              <p>{footerContent.UK?.addressLine2}</p>
              {footerContent.UK?.mail && (
                <a
                  href={`mailto:${footerContent.UK?.mail}`}
                  className="footer-contact"
                  style={{ margin: "15px 0px", fontSize: "16px" }}>
                  <FiMail /> {footerContent.UK?.mail}
                </a>
              )}
              {footerContent.UK?.tel && (
                <a
                  href={`tel:${footerContent.UK?.tel}`}
                  className="footer-contact"
                  style={{ margin: "15px 0px", fontSize: "16px" }}>
                  <FaPhoneAlt /> {footerContent.UK?.tel}
                </a>
              )}
            </div>
          </div>
        )}

        {(region === "Global" || region === "Canada") && (
          <div className="card">
            <iframe
              title="Canada Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23762392.645177633!2d-93.69955070065313!3d39.6717556649767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa2b041e95f71%3A0x8668b8b3e2bc5ebb!2sBarrie%2C%20ON%20L4N%207C9%2C%20Canada!5e0!3m2!1sen!2sin!4v1736684425048!5m2!1sen!2sin"
              style={{ border: "0px" }}
              allowFullScreen=""
              className="card-image"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="card-content">
              <p>{footerContent.Canada?.additionalData}</p>
              <p>{footerContent.Canada?.addressLine1}</p>
              <p>{footerContent.Canada?.addressLine2}</p>
              {footerContent.Canada?.mail && (
                <a
                  href={`mailto:${footerContent.Canada?.mail}`}
                  className="footer-contact"
                  style={{ margin: "15px 0px", fontSize: "16px" }}>
                  <FiMail /> {footerContent.Canada?.mail}
                </a>
              )}
              {footerContent.Canada?.tel && (
                <a
                  href={`tel:${footerContent.Canada?.tel}`}
                  className="footer-contact"
                  style={{ margin: "15px 0px", fontSize: "16px" }}>
                  <FaPhoneAlt /> {footerContent.Canada?.tel}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Location
