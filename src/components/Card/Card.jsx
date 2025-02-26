import React from "react"
import "./Card.css"

const ContentCard = ({ image, content, imageOnRight = false }) => {
  return (
    <div className="container mx-auto horizontal-card-container">
      <div className={`horizontal-card ${imageOnRight ? "reverse" : ""} `}>
        <img
          className="content-card-image"
          src={image}
          alt="Card visual"
        />

        <div className={` content-card-content ${imageOnRight ? "padding-left-none" : "padding-right-none"}`} >
          <div >
          <p className="content-font">{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentCard
