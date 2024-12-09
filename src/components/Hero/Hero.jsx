import React, { useState, useEffect, useContext } from "react"
import "./Hero.css"
import heroImage from "../../assets/images/hero/hero-image1.jpg"
import heroImage2 from "../../assets/images/hero/hero-image2.jpg"
import heroImage3 from "../../assets/images/hero/hero-img3.jpg"
import heroImage4 from "../../assets/images/hero/hero-img.jpg"
import { RegionContext } from "../../context/RegionContext"
import { GrNext, GrPrevious } from "react-icons/gr"
import { heroContent } from "../../content"

const heroImages = [heroImage2, heroImage3, heroImage4]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { region } = useContext(RegionContext)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="hero-container">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}>
            <div className="overlay" />
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
        <div className="hero-content hero-glass">
          <h1 className="hero-title region-title">
            Empowering{" "}
            <span
              className="
          region-title">
              {region === "Global" ? "Global" : `${region}'s`}
            </span>{" "}
            Workforce
          </h1>
          <p
            className="hero-desc"
            style={{ color: "#f8f8ff" }}>
            {heroContent[`${region}`]}
          </p>
          <div className="image-change-container flex-container">
            <button
              className="carousel-btn"
              onClick={prevSlide}>
              <GrPrevious
                size="2.25rem"
                style={{ fontWeight: 600, color: "#cda406", height: "1.2rem", fill: "1.5rem" }}
              />
            </button>
            <button
              className="carousel-btn"
              onClick={nextSlide}>
              <GrNext
                size="2.25rem"
                style={{ fontWeight: 600, color: "#cda406", height: "1.2rem" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
