import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Redaction from "../pages/Redaction";
import PubRules from "../pages/PubRules";
import AboutUs from "../pages/AboutUs";
import Archive from "../pages/Archive";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/redaction" element={<Redaction />} />
      <Route path="/PubRules" element={<PubRules />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/archive" element={<Archive/>} />
      <SpeedInsights/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
