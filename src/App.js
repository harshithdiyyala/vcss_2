import { Route, Routes } from "react-router-dom"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import RegionContextProvider from "./context/RegionContext"
import Service from "./components/Services/Service"
import ContactPage from "./components/Contact/ContactPage"
import Terms from "./components/Terms/Terms"
import Disclaimer from "./components/Disclaimer/Disclaimer"
import Privacy from "./components/Privacy/Privacy"
import About from "./components/About/About"
import ScrollToTop from "./ScrollToTop"

function App() {
  return (
    <RegionContextProvider>
      <ScrollToTop />
      <div className="">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero">
                  <Hero />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="about">
                  <Blog />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />

          <Route
            path="/:region"
            element={
              <>
                <Hero />
                <Services />
                <Blog />
                <Contact />
              </>
            }
          />
          <Route
            path="/services/:service"
            element={<Service />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="/terms-and-conditions"
            element={<Terms />}
          />
          <Route
            path="/disclaimer"
            element={<Disclaimer />}
          />
          <Route
            path="/privacy"
            element={<Privacy />}
          />
        </Routes>
        <Footer />
      </div>
    </RegionContextProvider>
  )
}

export default App
