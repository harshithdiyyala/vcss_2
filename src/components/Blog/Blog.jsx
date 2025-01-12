import React, { useState, useEffect } from "react"
import { blogContent } from "../../content"
import "./Blog.css"
import { Link } from "react-router-dom"
import { FaExternalLinkAlt, FaLink } from "react-icons/fa"

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Check if the screen is mobile
    }
    handleResize() // Initial check
    window.addEventListener("resize", handleResize) // Add event listener for resizing
    return () => window.removeEventListener("resize", handleResize) // Clean up on unmount
  }, [])

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % blogContent.length)
      }, 3000) // Auto switch every 3 seconds
      return () => clearInterval(interval) // Clean up interval on component unmount
    }
  }, [isMobile])

  return (
    <section className="blogs">
      <div className="container mx-auto">
        <div className="blog-section">
          <h3
            className="services-title blog-heading"
            style={{ textAlign: "center", color: "#101828", margin: "1.5rem 0" }}>
            VCSS - Redefining Security Excellence
          </h3>
          {!isMobile && (
            <p
              className="services-description"
              style={{ fontSize: "20px", textAlign: "center" }}>
              At VCSS, we combine innovation, expertise, and dedication to deliver comprehensive security services tailored to your needs. Trust us to safeguard your spaces with the utmost professionalism and reliability
            </p>
          )}
          <div className="blog-container ">
            <div className="blog-image-container">
              <img
                src={blogContent[activeIndex].imgLink}
                alt="Active Display"
                className="display-image"
              />
            </div>
            <div className="content-container">
              {blogContent.map((item, index) => (
                <div
                  key={index}
                  className={`content-item ${activeIndex === index ? "active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}>
                  {activeIndex === index && <div className="left-border"></div>}
                  <div style={{ marginLeft: "1rem" }}>
                    <h3 className="card-title blog-title">{item.title}</h3>
                    <p className="card-description blog-description">{item.description}</p>
                  </div>
                </div>
              ))}

              <Link
                to="/about"
                className="content-item about-us-link">
                {" "}
                <span>Know More</span>
                <FaExternalLinkAlt
                  className="link-icon"
                  size={18}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
