import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { servicesDescriptionsUK, servicesDescriptionsCanada, servicesDescriptionsGlobal, servicesContent } from "../../content"
import { RegionContext } from "../../context/RegionContext"
import ContentCard from "../Card/Card"
import Enquiry from "../EnquiryForm/Enquiry"

const Service = () => {
  const searchParams = useParams()
  const { region } = useContext(RegionContext)
  const services = region === "Global" ? servicesDescriptionsGlobal : region === "UK" ? servicesDescriptionsUK : servicesDescriptionsCanada

  const service = services.filter((item) => item?.link === searchParams?.service)[0]

  const cardsData = service?.content.map((value, index) => ({
    content: value,
    image: service.images[index],
  }))

  const mainContent = servicesContent[`${region}`].filter((item) => item.title === service?.category)[0]

  return (
    <>
      <div className="service-page">
        <div className="hero-container">
          <div className={`carousel-slide active`}>
            <div className="overlay" />
            <img
              src={mainContent.imgLink}
              alt={`Slide `}
              className="carousel-image"
            />
          </div>
          <div className="hero-content2">
            <div >
            <h1 className=" service-page-title  region-title hero-title" > {mainContent.title} </h1>
            <p
              className="hero-desc hero-desc2"
              style={{ color: "#f8f8ff", textAlign: "center",  }}>
              {mainContent.longContent}
            </p>
            <div
              className=""
              style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="#contact_us"
                style={{ textAlign: "center" }}
                className="contact-btn">
                Request Enquiry
              </a>
            </div>
            </div>
          </div>
        </div>
        {cardsData ? (
          cardsData.map((cardItem, index) => (
            <ContentCard
              image={cardItem.image}
              content={cardItem.content}
              imageOnRight={index % 2 === 0}
            />
          ))
        ) : (
          <p> No Data Avaliable</p>
        )}
        <section id="contact_us">
          <Enquiry category={service?.category} />
        </section>
      </div>
    </>
  )
}

export default Service
