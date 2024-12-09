import { Route, Routes } from "react-router-dom"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import RegionContextProvider from "./context/RegionContext"
import Service from "./components/Services/Service"

function App() {
  return (
    <RegionContextProvider>
      <div className="">
        <Navbar />
        <Routes>
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
            path="/services"
            element={<Service />}
          />
          <Route path="/about" />
          <Route path="/contact" />
        </Routes>
        <Footer />
      </div>
    </RegionContextProvider>
  )
}

export default App
