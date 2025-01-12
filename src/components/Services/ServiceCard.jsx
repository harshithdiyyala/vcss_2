import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const ServiceCard = ({ card }) => {
  const navigate = useNavigate()

  return (
    <div
      className="card"
      onClick={() => navigate(`/services/${card.link}`)}
      key={card.title}>
      <img
        src={card.imgLink}
        alt={card.title}
        className="card-image"
      />
      <div className="card-content">
        <div className="flex-container card-title-container">
          <h3 className="card-title">{card.title}</h3>
          <button className="arrow-icon-btn">
            <FaArrowRight className="arrow-icon" />
          </button>
        </div>
        <p className="card-description">{card.content}</p>
      </div>
    </div>
  )
}

export default ServiceCard
