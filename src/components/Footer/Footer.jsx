import React from "react"
import "./Footer.css"
import Logo from "../../assets/images/logos/VCSS_Logo_f.png"
import { footerDescription, footerContent } from "../../content"
import { RegionContext } from "../../context/RegionContext"
import { useContext } from "react"

import { Link } from "react-router-dom"
import { FiMail } from "react-icons/fi"
import { FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa"
import { FaFacebook, FaLocationDot, FaWhatsapp, FaX } from "react-icons/fa6"

const currentYear = new Date().getFullYear()

const Footer = () => {
  const { region } = useContext(RegionContext)
  return (
    <section
      id="footer"
      style={{ backgroundColor: "#0501360D" }}>
      <div className="container mx-auto">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-description">
                <img
                  src={Logo}
                  alt="Logo"
                  className="footer-logo"
                />
                <div className="links">
                  <a href ="/" className="footer-link"> <FaWhatsapp/> </a>
                  <a href ="/" className="footer-link"><FaFacebook/> </a>
                  <a href ="/" className="footer-link"> <FaInstagram/> </a>
                  <a href ="/" className="footer-link"> <FaTwitter/></a>
                </div>
                {/* <p>{footerDescription}</p> */}
              </div>
              <div className="footer-links">
                <div>
                  <h4 className="footer-heading">Quick Links</h4>
                  <Link
                    to="/terms-and-conditions"
                    className="footer-link">
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/disclaimer"
                    className="footer-link">
                    Disclaimer
                  </Link>
                  <Link
                    to="/privacy"
                    className="footer-link">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  {/* <h4 className="footer-heading">Address</h4> */}
                  {region !== "Global" ? (
                    <>
                {footerContent[region]?.additionalData && (
                    <>
                      <p className="footer-address">{footerContent[region].additionalData}</p>
                      <br />
                    </>
                  )}
                  <h4 className="footer-heading">Address</h4>
                      <p className="footer-address"><FaLocationDot/> {footerContent[region]?.addressLine1}</p>
                      <p className="footer-address">{footerContent[region]?.addressLine2}</p>
                      {footerContent[region]?.mail && (
                        <a
                          href={`mailto:${footerContent[region]?.mail}`}
                          className="footer-contact footer-address">
                          <FiMail /> {footerContent[region]?.mail}
                        </a>
                      )}
                      {footerContent[region]?.tel && (
                        <a
                          href={`tel:${footerContent[region]?.tel}`}
                          className="footer-contact footer-address">
                          <FaPhoneAlt /> {footerContent[region]?.tel}
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                    <>
                      <h4 className="footer-heading">Address</h4>
                      <p className="footer-address"> <FaLocationDot/> {footerContent["UK"]?.addressLine1}</p>
                      <p className="footer-address">{footerContent["UK"]?.addressLine2}</p>
                      {footerContent["UK"]?.mail && (
                        <a
                          href={`mailto:${footerContent["UK"]?.mail}`}
                          className="footer-contact footer-address">
                          <FiMail /> {footerContent["UK"]?.mail}
                        </a>
                      )}
                      {footerContent["UK"]?.tel && (
                        <a
                          href={`tel:${footerContent["UK"]?.tel}`}
                          className="footer-contact footer-address">
                          <FaPhoneAlt /> {footerContent["UK"]?.tel}
                        </a>
                      )}
                    </>
                    <br/>
                    <>
                      <p className="footer-address"><FaLocationDot/> {footerContent["Canada"]?.addressLine1}</p>
                      <p className="footer-address">{footerContent["Canada"]?.addressLine2}</p>
                      {footerContent["Canada"]?.mail && (
                        <a
                          href={`mailto:${footerContent["Canada"]?.mail}`}
                          className="footer-contact footer-address">
                          <FiMail /> {footerContent["Canada"]?.mail}
                        </a>
                      )}
                      {footerContent["Canada"]?.tel && (
                        <a
                          href={`tel:${footerContent["Canada"]?.tel}`}
                          className="footer-contact footer-address">
                          <FaPhoneAlt /> {footerContent["Canada"]?.tel}
                        </a>
                      )}
                    </>
                    </>
                    
                  )}
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="footer-copy">
                &copy; {currentYear}{" "}
                <a
                  href="/"
                  target="_blank"
                  className="footer-highlight">
                  VCSS - V Connect Security Services Limited
                </a>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
