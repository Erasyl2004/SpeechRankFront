import React from "react"
import LandingPage from "./LandingPage"
import UploadFile from "./UploadFile"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/upload" element={<UploadFile />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
