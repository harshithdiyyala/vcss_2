import React, { useState, useEffect, useContext } from "react"
import "./Hero.css"
import heroImage from "../../assets/images/hero/hero-image1.jpg"
import heroImage2 from "../../assets/images/hero/hero-image2.jpg"
import heroImage3 from "../../assets/images/hero/hero-img3.jpg"
import heroImage4 from "../../assets/images/hero/hero-img.jpg"
import heroImage5 from "../../assets/images/hero/hero-image5.JPG"
import heroImage6 from '../../assets/images/hero/hero-image6.JPG'
import heroImage7 from '../../assets/images/hero/hero-image7.jpg'
import canadaHome from "../../assets/images/hero/canada-home.jpg"
import ukHome from '../../assets/images/hero/uk-home.jpg'
import { RegionContext } from "../../context/RegionContext"
import { GrNext, GrPrevious } from "react-icons/gr"
import { heroContent } from "../../content"
const initialImages = [heroImage5, heroImage6, heroImage7]

const Hero = () => {

const { region } = useContext(RegionContext);
const [currentSlide, setCurrentSlide] = useState(0);
const [heroImages, setHeroImages] = useState(initialImages);

useEffect(() => {
  setHeroImages(() =>
    region === "UK" ? [...initialImages, ukHome] : region === 'Canada' ? [...initialImages, canadaHome]  : [...initialImages]
  );
}, [region]);

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % heroImages.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
};

useEffect(() => {
  const timer = setInterval(nextSlide, 5000);
  return () => clearInterval(timer);
}, [heroImages]); // Ensure re-run if heroImages change
  return (
    <>
      <div className="hero-container container mx-auto">
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
        <div className="hero-content hero-glass ">
          <h1 className="hero-title hero-title3">
            
            {/* <span
              className="
          region-title">
              {region === "Global" ? "Global" : `${region}'s`}
            </span>{" "} */}
            Welcome to 
            <br/>
            V Connect Security Services
          </h1>
          {/* <p
            className="hero-desc"
            style={{ color: "#f8f8ff" }}>
            {heroContent[`${region}`]}
          </p> */}
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
