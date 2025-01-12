import React, { useEffect, useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import { countries } from "../../content"
import "./Country.css"
import { useNavigate } from "react-router-dom"

const countrys = new Map(countries.map((country) => [country.name, country]))

const CountrySelect = ({ region, setRegion }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleSelectChange = (val) => {
    setRegion(val)
    navigate("/")
    toggleDropdown()
  }
  useEffect(() => {
    let arrow = document.getElementById("dropdown-arrow")
    arrow.classList.toggle("dropdown-arrow-rotate")
  }, [isOpen])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown-container">
      <div className="">
        <div
          className="flex-container display-container"
          onClick={toggleDropdown}>
          <img
            src={countrys.get(`${region}`).flag}
            alt={countrys.get(`${region}`).name}
            className="country-flag"
          />

          {countrys.get(`${region}`).name}
          <FiChevronDown
            size={30}
            className={`dropdown-arrow`}
            // style={{
            //   transform: `rotate(${180}deg)`, // Apply dynamic rotation
            //   transition: "transform 0.3s ease-in-out", // Smooth transition
            // }}
            id="dropdown-arrow"
          />
        </div>
      </div>
      {isOpen && (
        <div className="drop-down ">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex-st-container"
              onClick={() => handleSelectChange(country.name)}>
              <img
                src={country.flag}
                alt={country.name}
                className="country-flag"
              />
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CountrySelect
