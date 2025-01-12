import React, { useContext, useState } from "react"
import "./Navbar.css"

import Logo from "../../assets/images/logos/VCSS_Logo_new.png"
import { logoContent } from "../../content"
import { RegionContext } from "../../context/RegionContext"

import CountrySelect from "../../assets/Country/Country"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = () => {
  const { region, setRegion } = useContext(RegionContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar-container navbar-shadow">
      <div
        className="container mx-auto flex-container"
        style={{ height: "inherit" }}>
        <Link
          className="logo-container flex-container"
          to={`/${region}`}>
          <img
            src={Logo}
            className="logo"
            alt="VCSS Logo"
          />
          <h1 className="logo-name">{logoContent[`${region}`]}</h1>
        </Link>
        <div className="mobile-nav">
          <RxHamburgerMenu
            onClick={() => setMenuOpen(!menuOpen)}
            className="logo"
            size={20}
            style={{ strokeWidth: "1.25px", size: "18px" }}
          />
        </div>
        <div
          className="flex-container desktop-menu"
          style={{ flex: 1, justifyContent: "flex-end", maxWidth: "55%" }}>
          <div>
            <Link to="/services"> Services</Link>
          </div>
          <div>
            <Link to="/about">About Us</Link>
          </div>
          <div>
            <Link to="/contact">Contact Us</Link>
          </div>
          <CountrySelect
            region={region}
            setRegion={setRegion}
          />
        </div>
        {menuOpen && (
          <div
            className="flex-container navbar-menu"
            style={{ flex: 1, justifyContent: "space-between", maxWidth: "55%" }}>
            <Link to="/services">services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <CountrySelect
              region={region}
              setRegion={setRegion}
            />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
