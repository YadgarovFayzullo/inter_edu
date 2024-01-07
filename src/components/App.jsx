import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Redaction from "../pages/Redaction";
import PubRules from "../pages/PubRules";
import AboutUS from "../pages/AboutUS";
import Archive from "../pages/Archive";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/redaction" element={<Redaction />} />
      <Route path="/rules" element={<PubRules />} />
      <Route path="/about" element={<AboutUS/>} />
      <Route path="/archive" element={<Archive/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
