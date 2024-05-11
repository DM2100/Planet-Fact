import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComp } from "./components/Navbar";
import { MercuryInfo } from "./components/MercuryInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EarthInfo } from "./components/EarthInfo";
import { VenusInfo } from "./components/VenusInfo";
import { MarsInfo } from "./components/MarsInfo";
import { JupiterInfo } from "./components/JupiterInfo";
import { SaturnInfo } from "./components/SaturnInfo";
import { UranusInfo } from "./components/Uranus";
import { NeptuneInfo } from "./components/Neptune";
import { HeadingInfo } from "./components/HeadingInfo";


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
        <Route path="/" element={ <HeadingInfo />} />
          <Route path="/mercury" element={<MercuryInfo />} />
          <Route path="/venus" element={<VenusInfo />} />
          <Route path="/earth" element={<EarthInfo />} />
          <Route path="/mars" element={<MarsInfo />} />
          <Route path="/jupiter" element={<JupiterInfo />} />
          <Route path="/saturn" element={<SaturnInfo />} />
          <Route path="/uranus" element={<UranusInfo />} />
          <Route path="/neptune" element={<NeptuneInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
