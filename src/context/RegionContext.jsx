import React, { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const RegionContext = createContext()

const RegionContextProvider = ({ children }) => {
  const [region, setRegion] = useState("Global")
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/${region}`, { replace: true })
  }, [region])

  return <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>
}

export default RegionContextProvider
