import React from "react"
import "./Footer.css"
import Logo from "../../assets/images/logos/VCSS_Logo_f.png"
import { footerDescription, footerContent } from "../../content"
import { RegionContext } from "../../context/RegionContext"
import { useContext } from "react"

import { Link } from "react-router-dom"
import { FiMail } from "react-icons/fi"
import { FaPhoneAlt } from "react-icons/fa"

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
                <p>{footerDescription}</p>
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
                  <h4 className="footer-heading">Address</h4>
                  {region !== "Global" ? (
                    <>
                      <p>{footerContent[region]?.additionalData}</p>
                      <p>{footerContent[region]?.addressLine1}</p>
                      <p>{footerContent[region]?.addressLine2}</p>
                      {footerContent[region]?.mail && (
                        <a
                          href={`mailto:${footerContent[region]?.mail}`}
                          className="footer-contact">
                          <FiMail /> {footerContent[region]?.mail}
                        </a>
                      )}
                      {footerContent[region]?.tel && (
                        <a
                          href={`tel:${footerContent[region]?.tel}`}
                          className="footer-contact">
                          <FaPhoneAlt /> {footerContent[region]?.tel}
                        </a>
                      )}
                    </>
                  ) : (
                    <Link
                      to="/contact"
                      className="footer-link">
                      Contact Us
                    </Link>
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
