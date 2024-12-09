import React, { useContext } from "react"
import { RegionContext } from "../../context/RegionContext"
import "./Services.css"
import { servicesContent } from "../../content"
import ServiceCard from "./ServiceCard"

const Services = () => {
  const { region } = useContext(RegionContext)

  return (
    <section className="services">
      <div className="container mx-auto">
        <h1 className="hero-title services-title">Precision-Driven Services – Empowering Your Mission.</h1>
        <p className="services-description">Explore our range of services tailored to meet your needs. Got an idea or suggestion? We’d love to hear from you—reach out anytime!</p>
        <div className="services-container">
          {servicesContent[`${region}`].map((card) => (
            <ServiceCard
              card={card}
              key={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Services
