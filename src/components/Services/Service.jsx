import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { servicesDescriptionsUK, servicesDescriptionsCanada, servicesDescriptionsGlobal } from "../../content"
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

  return (
    <>
      <div className="service-page">
        <h1 className=" service-page-title  region-title hero-title"> {service?.category} </h1>
        <Enquiry category={service?.category} />
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
      </div>
    </>
  )
}

export default Service
